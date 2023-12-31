import express from "express";
import singleUpload from "../middlewares/multer.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAllUsers, getAllCourses, updateUserRole, deleteUser } from "../controllers/user.controller.js";
import { logout, getMyProfile, deleteMyProfile, updateProfile } from "../controllers/user.controller.js";
import { register, login, forgetPassword, resetPassword, changePasssword } from "../controllers/user.controller.js";
import { addToPlayList, removeFromPlayList, updateProfilePicture } from "../controllers/user.controller.js";

const router = express.Router();

// REGISTER ROUTE
router.route("/register").post(singleUpload, register);

// LOGIN ROUTE
router.route("/login").post(login);

// FORGET PASSWORD
router.route("/forgetpassword").post(forgetPassword);

// RESET PASSWORD
router.route("/resetpassword/:token").put(resetPassword);

//// ===============================
//// ROUTES FOR AUTHENTICATED USER
//// ===============================

// LOGOUT
router.route("/logout").get(isAuthenticated, logout);

// GET PROFILE && DELETE PROFILE
router.route("/myprofile").get(isAuthenticated, getMyProfile).delete(isAuthenticated, deleteMyProfile);

// UPDATE PROFILE
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UPDATE PROFILE PIC
router.route("/updateprofilepicture").put(isAuthenticated, singleUpload, updateProfilePicture);

// CHANGE PASSWORD
router.route("/changepassword").put(isAuthenticated, changePasssword);

// ADD COURSE TO PLAYLIST
router.route("/addtoplaylist").post(isAuthenticated, addToPlayList);

// REMOVE COURSE FROM PLAYLIST
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlayList);

//// ===============================
//// ROUTES FOR ONLY ADMIN
//// ===============================

// GET ALL USERS
router.route("/admin/users").get(isAdmin, getAllUsers);

// GET ALL COURSES
router.route("/admin/courses").get(isAdmin, getAllCourses);

// CHANGE USER ROLE && DELETE USER
router.route("/admin/user/:id").put(isAdmin, updateUserRole).delete(isAdmin, deleteUser);

export default router;
