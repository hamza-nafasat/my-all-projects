import express from "express";
import { isAdmin, isAuthenticated, isSubscriber } from "../middlewares/auth.js";
import { contactForm, courseRequest, getDashboardStats } from "../controllers/other.controllers.js";

const router = express.Router();

//// ===============================
//// ROUTES FOR AUTHENTICATID USER
//// ===============================
// CONTACT FORM
router.route("/contact").post(contactForm);

// COURSE REQUEST
router.route("/courserequest").post(courseRequest);

//// ===============================
//// ROUTES FOR ONLY ADMIN
//// ===============================

// DASHBOARD ADMIN STATES
router.route("/admin/stats").get(isAdmin, getDashboardStats);

export default router;
