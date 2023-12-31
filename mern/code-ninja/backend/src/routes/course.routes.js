import express from "express";
import singleUpload from "../middlewares/multer.js";
import { getAllCourses, getCourseLectures } from "../controllers/course.controllers.js";
import { createCourse, addNewLecture, deleteCourse, DeleteLecture } from "../controllers/course.controllers.js";
import { isAdmin, isAuthenticated, isSubscriber } from "../middlewares/auth.js";

const router = express.Router();

// GET ALL COURSES
router.route("/courses").get(getAllCourses);

//// ===============================
//// ROUTES FOR AUTHENTICATID USER
//// ===============================

// GET ALL LECTURES
router.route("/course/:id").get(isAuthenticated, isSubscriber, getCourseLectures);

//// ===============================
//// ROUTES FOR ONLY ADMIN
//// ===============================
// CREATE A NEW COURSE
router.route("/createcourse").post(isAdmin, singleUpload, createCourse);

// ADD LECTURES AND DELETE COURSE
router.route("/course/:id").post(isAdmin, singleUpload, addNewLecture).delete(isAdmin, deleteCourse);

// DELETE A LECTURE
router.route("/lecture").delete(isAdmin, DeleteLecture);

export default router;
