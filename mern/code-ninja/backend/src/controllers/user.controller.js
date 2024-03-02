import crypto from "crypto";
import User from "../models/user.model.js";
import getDataUri from "../utils/dataUri.js";
import sendToken from "../utils/sendToken.js";
import Course from "../models/course.model.js";
import CustomError from "../utils/CustomError.js";
import sendEmail from "../utils/sendEmail.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { uploadOnCloudinary, removeFromCloudinary } from "../utils/cloudinary.js";

//  REGISTER
export const register = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return next(new CustomError("Please provide all required fields.", 400));
	}
	const file = req.file;
	if (!file) return next(new CustomError("Profile picture not provided.", 400));
	////
	let user = await User.findOne({ email });
	if (user) return next(new CustomError("User Already Exists", 409));
	//// uploading pic and reginstring user
	const fileUri = getDataUri(file);
	const myCloud = await uploadOnCloudinary(fileUri.content, "image");
	////
	user = await User.create({
		name,
		email,
		password,
		avatar: {
			public_id: myCloud.public_id,
			url: myCloud.secure_url,
		},
	});
	sendToken(res, user, "User Registered Successfully", 201);
});

//  LOGIN
export const login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(new CustomError("Please provide both email and password.", 400));
	}
	////
	const user = await User.findOne({ email }).select("+password");
	if (!user) return next(new CustomError("Incorrect email or password.", 401));
	////
	const isMatch = await user.comparePassword(password);
	if (!isMatch) return next(new CustomError("Incorrect email or password.", 401));
	sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

//  FORGET PASSWORD
export const forgetPassword = asyncHandler(async (req, res, next) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) return next(new CustomError("User not found. Please check your email address.", 404));
	////
	const resetToken = await user.getResetToken();
	await user.save();
	////
	const link = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
	const message = "CodeNinja Reset Password";
	const text = `Hey ${user.name.toUpperCase()}, 
    If you want to reset your password, click the link below:
    ${link}
    If you haven't requested this reset, feel free to ignore this link.`;
	////
	await sendEmail(user.email, message, text);
	////
	res.status(200).json({
		success: true,
		message: `A password reset link has been sent to ${user.email}. Check your inbox!`,
	});
});

//  RESET PASSWORD
export const resetPassword = asyncHandler(async (req, res, next) => {
	const { token } = req.params;
	const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
	////
	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});
	if (!user) return next(new CustomError("Invalid or expired token. Please try again.", 404));
	////
	const { password } = req.body;
	if (!password) return next(new CustomError("Please enter your new password.", 400));
	////
	user.password = password;
	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;
	await user.save();
	////
	res.status(200).json({
		success: true,
		message: "Password Changed Successfully",
	});
});

//// =====================================================
//// ========= ROUTES FOR AUTHENTICATID USER =============
//// =====================================================

//  LOGOUT
export const logout = asyncHandler(async (req, res, next) => {
	const options = {
		expires: new Date(0),
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "none",
		path: "/",
	};
	res.clearCookie("token", options);
	res.status(200).json({
		success: true,
		message: "Logged out Successfully",
	});
});

//  MY PROFILE
export const getMyProfile = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const user = await User.findById(_id).select("-password");
	if (!user) return next(new CustomError("User not found", 404));
	////
	res.status(200).json({
		success: true,
		user,
	});
});

// DELETE MY PROFILE
export const deleteMyProfile = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const user = await User.findById(_id);
	if (!user) return next(new CustomError("User not found", 404));
	//// remove avatar and user
	await removeFromCloudinary(user.avatar.public_id, "image");
	await User.findByIdAndDelete(user._id);
	//// sending responce and logging out
	res.status(200)
		.cookie("token", null, {
			expires: new Date(0),
			httpOnly: true,
			secure: true,
			sameSite: "none",
		})
		.json({
			success: true,
			message: "Your account has been removed successfully.",
		});
});

//  UPDATE PROFILE
export const updateProfile = asyncHandler(async (req, res, next) => {
	const { name, email } = req.body;
	if (!name && !email) {
		return next(new CustomError("You haven't entered anything for updating.", 400));
	}
	const user = await User.findById(req.user._id);
	////
	if (name) user.name = name;
	if (email) user.email = email;
	////
	await user.save();
	res.status(200).json({
		success: true,
		message: "Profile Updated Successfully",
	});
});

//  UPDATE PROFILE PICTURE
export const updateProfilePicture = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const file = req.file;
	if (!file) return next(new CustomError("New Profile Pic not providev", 400));
	////
	const user = await User.findById(_id).select("avatar");
	if (!user) return next(new CustomError("User ot found", 404));
	//// removing old avatar
	await removeFromCloudinary(user.avatar.public_id, "image");
	user.avatar.public_id = undefined;
	user.avatar.url = undefined;
	//// updating new avatar
	const fileUrl = getDataUri(file);
	const myCloud = await uploadOnCloudinary(fileUrl.content, "image");
	user.avatar.public_id = myCloud.public_id;
	user.avatar.url = myCloud.secure_url;
	//// saving user
	await user.save();
	res.status(201).json({
		success: true,
		message: "Profile Pic Updated Successfully",
	});
});

//  CHANGE PASSWORD
export const changePasssword = asyncHandler(async (req, res, next) => {
	const { oldPassword, newPassword } = req.body;
	if (!oldPassword || !newPassword) {
		return next(new CustomError("Please provide all required fields.", 400));
	}
	const user = await User.findById(req.user._id).select("+password");
	const isMatch = await user.comparePassword(oldPassword);
	if (!isMatch) return next(new CustomError("Current password is incorrect.", 401));
	user.password = newPassword;
	await user.save();
	res.status(200).json({
		success: true,
		message: "Password Changed Successfully",
	});
});

//  ADD COURSE TO PLAYLIST
export const addToPlayList = asyncHandler(async (req, res, next) => {
	const { courseId } = req.body;
	if (!courseId) return next(new CustomError("course id not found", 404));
	////
	const user = await User.findById(req.user._id);
	if (!user) return next(new CustomError("User not found", 404));
	////
	const course = await Course.findById(courseId);
	if (!course) return next(new CustomError("Course not found", 404));
	////
	const isCourseAlreadyExist = user.playlist.find((item) => {
		return item.course.toString() === course._id.toString();
	});
	if (isCourseAlreadyExist)
		return next(new CustomError("Course already added in your playlist", 409));
	////
	user.playlist.push({
		course: course._id,
		poster: course.poster.url,
	});
	await user.save();
	////
	res.status(201).json({
		success: true,
		message: "Course Added In Your Playlist",
	});
});

//  REMOVES COURSE FROM PLAYLIST
export const removeFromPlayList = asyncHandler(async (req, res, next) => {
	const { courseId } = req.query;
	if (!courseId) return next(new CustomError("course id not found", 404));
	////
	const user = await User.findById(req.user._id);
	if (!user) return next(new CustomError("User not found", 404));
	////
	const isCourseExist = user.playlist.find((item) => {
		return item.course.toString() === courseId.toString();
	});
	if (!isCourseExist) return next(new CustomError("Course not found in your playlist", 404));
	////
	const playlistAfterRemovingOneCourse = user.playlist.filter((item) => {
		return item.course.toString() !== courseId.toString();
	});
	user.playlist = playlistAfterRemovingOneCourse;
	await user.save();
	////
	res.status(200).json({
		success: true,
		message: "Course Removed From Playlist",
	});
});

//// =====================================================
//// ============ ROUTES FOR ONLY ADMIN ==================
//// =====================================================

// GET ALL USERS
export const getAllUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();
	if (!users) return next(new CustomError("Users Not Found", 404));
	////
	res.status(200).json({
		success: true,
		users,
	});
});

// GET ALL COURSES
export const getAllCourses = asyncHandler(async (req, res, next) => {
	const courses = await Course.find();
	if (!courses) return next(new CustomError("Courses Not Found", 404));
	////
	res.status(200).json({
		success: true,
		courses,
	});
});

// CHANGE USER ROLE
export const updateUserRole = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const user = await User.findById(id);
	if (!user) return next(new CustomError("User not found", 404));
	//// change user role
	if (user.role === "user") user.role = "admin";
	else user.role = "user";
	////
	await user.save();
	res.status(200).json({
		success: true,
		message: `Role upgraded as a ${user.role.toUpperCase()}.`,
	});
});

// DELETE USER
export const deleteUser = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const user = await User.findById(id);
	if (!user) return next(new CustomError("User not found", 404));
	//// delete profile pic and user both
	await removeFromCloudinary(user.avatar.public_id, "image");
	await User.findByIdAndDelete(user._id);
	// cancel subscription
	res.status(200).json({
		success: true,
		message: "User Deleted Successfully",
	});
});
