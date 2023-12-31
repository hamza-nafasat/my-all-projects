import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getRezorpayKey } from "../controllers/payment.controllers.js";
import { buySubscription, cancelSubscription, paymentVerification } from "../controllers/payment.controllers.js";

const router = express.Router();

// GET RAZOR PAY KEY
router.route("/getrezorpaykey").get(getRezorpayKey);

//// ===============================
//// ROUTES FOR AUTHENTICATED USER
//// ===============================

// BUY SUBSCRIPTION
router.route("/subscribe").get(isAuthenticated, buySubscription);

// PAYMENT VERIFICATION AND SAVE IN DB
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// CANCEL SUBSCRIPTION
router.route("/subscription/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
