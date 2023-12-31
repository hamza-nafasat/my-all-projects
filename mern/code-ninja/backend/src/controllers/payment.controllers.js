import crypto from "crypto";
import { instance } from "../../server.js";
import User from "../models/user.model.js";
import Payment from "../models/payment.model.js";
import CustomError from "../utils/CustomError.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//// ===============================
//// ROUTES FOR AUTHENTICATED USER
//// ===============================

// BUY SUBSCRIPTION
export const buySubscription = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const user = await User.findById(_id);
	if (user.role === "admin") return next(new CustomError(" Admins don't need to buy subscriptions", 400));
	//// creating subscription
	const plan_id = process.env.PLANE_ID || "plan_NDtXwryu6JoAxK";
	const subscription = await instance.subscriptions.create({
		plan_id,
		customer_notify: 1,
		total_count: 12,
	});
	//// adding id and status
	user.subscription.id = subscription.id;
	user.subscription.status = subscription.status;
	//// sending responce
	await user.save();
	res.status(201).json({
		success: true,
		subscriptionId: subscription.id,
	});
});

// PAYMENT VERIFICATION AND SAVE IN DB
export const paymentVerification = asyncHandler(async (req, res, next) => {
	const { razorpay_signature, razorpay_subscription_id, razorpay_payment_id } = req.body;
	const { _id } = req.user;
	const user = await User.findById(_id);
	const subscription_id = user.subscription.id;
	///// creating hmack signature
	const generatedSignature = crypto
		.createHmac("sha256", process.env.RAZERPAY_SECERET_KEY)
		.update(razorpay_payment_id + "|" + subscription_id, "utf-8")
		.digest("hex");
	///// chenking is payment done or not
	const isAuthentic = generatedSignature === razorpay_signature;
	if (!isAuthentic) return res.redirect(`${process.env.FRONTEND_URL}/paymentfail`);
	//// adding in db
	user.subscription.status = "active";
	await user.save();
	await Payment.create({
		razorpay_signature,
		razorpay_subscription_id,
		razorpay_payment_id,
	});
	res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`);
});

// GET REZORPAY KEY
export const getRezorpayKey = asyncHandler(async (req, res, next) => {
	res.status(200).json({
		success: true,
		key: process.env.RAZERPAY_API_KEY,
	});
});

// GET REZORPAY KEY
export const cancelSubscription = asyncHandler(async (req, res, next) => {
	const { _id } = req.user;
	const user = await User.findById(_id);
	const subscriptionId = user.subscription.id;
	//// initilinzed refund and cancel subscription
	let refund = false;
	instance.subscriptions.cancel(subscriptionId);
	//// find payment document with user id
	const payment = await Payment.findOne({
		razorpay_subscription_id: subscriptionId,
	});
	if (!payment) return next(new CustomError("payment not found", 404));
	//// check if refund is valid the refund
	const gap = Date.now() - payment.createdAt;
	const refundTime = process.env.REFUND_DAYS * 24 * 60 * 60 * 1000;
	if (refundTime > gap) {
		instance.payments.refund(payment.razorpay_payment_id);
		refund = true;
	}
	//// delete payment document
	await Payment.findByIdAndDelete(payment._id);
	user.subscription.id = undefined;
	user.subscription.status = undefined;
	await user.save();
	////
	res.status(200).json({
		success: true,
		message: refund
			? "Your subscription canceled successfully.You can receive full payment within 7 days."
			: "Subscription canceled successfully. No refund initiated as the subscription was canceled after 7 days.",
	});
});

//// ===============================
//// ROUTES FOR ONLY ADMIN
//// ===============================
