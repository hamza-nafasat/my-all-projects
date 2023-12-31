import State from "../models/stats.model.js";
import sendEmail from "../utils/sendEmail.js";
import Course from "../models/course.model.js";
import CustomError from "../utils/CustomError.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// CONTACT FORM
export const contactForm = asyncHandler(async (req, res, next) => {
	const { name, email, message } = req.body;
	if (!name || !email || !message) return next(new CustomError("Please provide all required feilds", 400));
	//// sending mail to owner
	const to = process.env.MY_MAIL || "gyromaster55@gmail.com";
	const subject = "Contact from CodeNinja";
	const text = `i am ${name} and my email is ${email} and my message\n\n    ${message}`;
	await sendEmail(to, subject, text);
	//// sending responce
	res.status(200).json({
		success: true,
		message: "Your message has been sent",
	});
});

// COURSE REQUEST
export const courseRequest = asyncHandler(async (req, res, next) => {
	const { name, email, course } = req.body;
	if (!name || !email || !course) return next(new CustomError("Please provide all required feilds", 400));
	//// sending mail for requeset
	const to = process.env.MY_MAIL || "gyromaster55@gmail.com";
	const subject = "Request for a course from CodeNinja";
	const text = `i am ${name} and my email is ${email} and i am requesting for\n\n${course}`;
	await sendEmail(to, subject, text);
	//// sending responce
	res.status(200).json({
		success: true,
		message: "Your request has been sent",
	});
});

// GET DASHBOARD STATS
export const getDashboardStats = asyncHandler(async (req, res, next) => {
	const stats = await State.find().sort({ updatedAt: "desc" }).limit(12);
	//// creating statsData array and pushing stats in this arrray
	const statsData = [];
	for (let i = 0; i < stats.length; i++) {
		statsData.unshift(stats[i]);
	}
	//// if stats size is small from 12 then completint this size
	const requiredSize = 12 - stats.length;
	for (let i = 0; i < requiredSize; i++) {
		statsData.unshift({
			users: 0,
			subscriptions: 0,
			views: 0,
		});
	}
	//// getting counts of latest month
	const usersCounts = statsData[11].users;
	const viewsCounts = statsData[11].views;
	const subscriptionsCounts = statsData[11].subscriptions;
	//// initilizing profit and percntage
	let usersProfit = true;
	let usersPercentage = 0;
	let viewsProfit = true;
	let viewsPercentage = 0;
	let subscriptionsProfit = true;
	let subscriptionsPercentage = 0;
	////
	if (statsData[10].users === 0) usersPercentage = usersCounts * 100;
	if (statsData[10].views === 0) viewsPercentage = viewsCounts * 100;
	if (statsData[10].subscriptions === 0) subscriptionsPercentage = subscriptionsCounts * 100;
	else {
		const difference = {
			users: statsData[11].users - statsData[10].users,
			views: statsData[11].views - statsData[10].views,
			subscriptions: statsData[11].subscriptions - statsData[10].subscriptions,
		};
		usersPercentage = Math.round((difference.users / statsData[10].users) * 100);
		viewsPercentage = Math.round((difference.views / statsData[10].views) * 100);
		subscriptionsPercentage = Math.round((difference.subscriptions / statsData[10].subscriptions) * 100);
		////
		if (usersPercentage < 0) usersProfit = false;
		if (viewsPercentage < 0) viewsProfit = false;
		if (subscriptionsPercentage < 0) subscriptionsProfit = false;
	}
	//// sending responce
	res.status(200).json({
		success: true,
		stats: statsData,
		usersCounts,
		usersProfit,
		usersPercentage,
		viewsCounts,
		viewsProfit,
		viewsPercentage,
		subscriptionsCounts,
		subscriptionsProfit,
		subscriptionsPercentage,
	});
});

// updating views in stats
// =======================
Course.watch().on("change", async () => {
	try {
		const states = await State.find().sort({ createdAt: "desc" }).limit(1);
		const course = await Course.find();
		//// counting total views from courses
		let totalViews = 0;
		for (let i = 0; i < course.length; i++) {
			totalViews += course[i].views;
		}
		//// updating views in states and saving
		states[0].views = totalViews;
		states[0].updatedAt = new Date(Date.now());
		await states[0].save();
	} catch (error) {
		console.error("Error in Course model change stream:", error);
	}
});
