import { CustomError, asyncHandler } from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

export const registerNewUser = asyncHandler(async (req, res, next) => {
	const { name, username, email, password, phoneNumber } = req.body;
	// 1. check validation before doing anything
	// -----------------------------------------

	// 2. Unique Field Checks using Mongoose Query Optimization
	// --------------------------------------------------------
	const [existingPhone, existingEmail, existingUsername] = await Promise.all([
		User.exists({ phoneNumber }),
		User.exists({ email }),
		User.exists({ username }),
	]);
	if (existingUsername) return next(new CustomError("Username already in use", 400));
	if (existingEmail) return next(new CustomError("Email already in use", 400));
	if (existingPhone) return next(new CustomError("Phone number already in use", 400));
	const user = await User.create({
		name,
		username,
		email,
		password,
		phoneNumber,
	});
	// 3. Response
	// -----------
	res.status(201).json({
		success: true,
		message: "User created successfully",
		data: user,
	});
});

export const loginUser = asyncHandler(async (req, res, next) => {
	const { password, phoneNumber } = req.body;

	let user = await User.findOne({ phoneNumber });

	if (!user) return next(new CustomError("You need to create a new account", 400));

	// 3. Response
	// -----------
	res.status(201).json({
		success: true,
		message: "User created successfully",
		data: user,
	});
});
