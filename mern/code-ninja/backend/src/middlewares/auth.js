import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import CustomError from "../utils/CustomError.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// IS USER AUTHENTICATED (LOGED IN )
export const isAuthenticated = asyncHandler(async (req, res, next) => {
	const { token } = req.cookies;
	if (!token) return next(new CustomError("Please login First", 401));
	const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	req.user = await User.findById(decodedToken._id);
	next();
});

// IS USER ADMIN AND LOGGED IN
export const isAdmin = asyncHandler(async (req, res, next) => {
	const { token } = req.cookies;
	if (!token) return next(new CustomError("Please login First", 401));
	const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	req.user = await User.findById(decodedToken._id);
	if (req.user.role !== "admin") {
		return next(new CustomError("Access Denied: Only admin can access this resource.", 403));
	}
	next();
});

// IS USER IS SUBSCRIBER IF HE IS NOT ADMIN
export const isSubscriber = asyncHandler(async (req, res, next) => {
	if (req.user.subscription.status !== "active" && req.user.role !== "admin") {
		return next(new CustomError("Access Denied: Only subscriber can access this resource.", 403));
	}
	next();
});
