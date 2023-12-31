import getDataUri from "../utils/dataUri.js";
import Course from "../models/course.model.js";
import CustomError from "../utils/CustomError.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { uploadOnCloudinary, removeFromCloudinary } from "../utils/cloudinary.js";

//  GET ALL COURSES
export const getAllCourses = asyncHandler(async (req, res, next) => {
	const title = req.query?.title ?? "";
	const category = req.query?.category ?? "";
	//// finding all lectures
	const data = await Course.find({
		title: { $regex: title, $options: "i" },
		category: { $regex: category, $options: "i" },
	}).select("-lectures");
	if (!data) return next(new CustomError("No course found", 404));
	////
	res.status(200).json({
		success: true,
		data,
	});
});

//// =====================================================
//// ========= ROUTES FOR AUTHENTICATID USER =============
//// =====================================================

//  GET ALL LECTURES
export const getCourseLectures = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const course = await Course.findById(id).select("lectures views");
	if (!course) return next(new CustomError("Lectures not found for this course", 404));
	////
	course.views += 1;
	await course.save({ validateBeforeSave: false });
	res.status(200).json({
		success: true,
		lectures: course.lectures,
	});
});

//// =====================================================
//// =============== ROUTES FOR ONLY ADMIN ===============
//// =====================================================

//  CREATE A NEW COURSE
export const createCourse = asyncHandler(async (req, res, next) => {
	const { title, description, category, createdBy } = req.body;
	if (!title || !description || !category || !createdBy) {
		return next(new CustomError("Please enter all fields", 400));
	}
	////
	const file = req.file;
	if (!file) return next(new CustomError("Poster not found", 404));
	const fileUrl = getDataUri(file);
	const myCloud = await uploadOnCloudinary(fileUrl.content, "image");
	////
	await Course.create({
		title,
		description,
		category,
		createdBy,
		poster: {
			public_id: myCloud.public_id,
			url: myCloud.secure_url,
		},
	});
	////
	res.status(201).json({
		success: true,
		message: "Course Created Successfully.Now You Can Add Lectures",
	});
});

//  DELETE A COURSE
export const deleteCourse = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	if (!id) return next(new CustomError("Course id not provided", 400));
	////
	const course = await Course.findById(id);
	if (!course) return next(new CustomError("Course not found", 404));
	//// REMOVING POSTER
	await removeFromCloudinary(course.poster.public_id, "image");
	//// REMOVING LECTURE VIDEOS
	for (let i = 0; i < course.lectures.length; i++) {
		const singleLecure = course.lectures[i];
		removeFromCloudinary(singleLecure.video.public_id, "video");
	}
	////
	await Course.deleteOne({ _id: course._id });
	res.status(201).json({
		success: true,
		message: "Course Deleted Successfully",
	});
});

//  ADD LECTURES
export const addNewLecture = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const { title, description } = req.body;
	if (!title || !description) return next(new CustomError("Title and description not found", 404));
	const file = req.file;
	if (!file) return next(new CustomError("Poster not found", 404));
	//// getting lectures from database
	const course = await Course.findById(id).select("lectures numOfVideos");
	if (!course) return next(new CustomError("Lectures not found for this course", 404));
	////
	const fileUrl = getDataUri(file);
	const myCloud = await uploadOnCloudinary(fileUrl.content, "video");
	////
	course.lectures.push({
		title,
		description,
		video: {
			public_id: myCloud.public_id,
			url: myCloud.secure_url,
		},
	});
	////
	course.numOfVideos = course.lectures.length;
	await course.save();
	////
	res.status(201).json({
		success: true,
		message: "Lecture Added Successfully",
	});
});

//  DELETE LECTURES
export const DeleteLecture = asyncHandler(async (req, res, next) => {
	const { courseId, lectureId } = req.query;
	if (!courseId || !lectureId) return next(new CustomError("CourseId or LecureId not provided", 400));
	////
	const course = await Course.findById(courseId);
	if (!course) return next(new CustomError("Course not found", 404));
	//// REMOVING LECTURE VIDEO
	const lectureForDeletion = course.lectures.find((item) => {
		return item._id.toString() === lectureId.toString();
	});
	if (!lectureForDeletion) return next(new CustomError("Lecture not found", 404));
	await removeFromCloudinary(lectureForDeletion.video.public_id, "video");
	//// filtering removed lecture from lectures
	course.lectures = course.lectures.filter((item) => {
		return item._id.toString() !== lectureId.toString();
	});
	////
	course.numOfVideos = course.lectures.length;
	await course.save();
	res.status(201).json({
		success: true,
		message: "Lecture Deleted Successfully",
	});
});
