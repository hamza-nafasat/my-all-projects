import express from "express";
import {
	createNewCoupon,
	deleteSingleCoupon,
	getAllCoupons,
	getSingleCoupon,
} from "../controllers/payment.controllers.js";
import { isAdmin } from "../middlewares/auth.js";

const app = express();

// CREATE GET DELETE AND GET ALL COUPONS ROUTES
app.post("/coupon/new", isAdmin, createNewCoupon);
app.get("/coupon/all", isAdmin, getAllCoupons);
app.route("/coupons/:couponCode").get(getSingleCoupon).delete(isAdmin, deleteSingleCoupon);

export default app;
