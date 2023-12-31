import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";
import State from "./stats.model.js";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter your name"],
		},
		email: {
			type: String,
			required: [true, "Please enter your email"],
			unique: true,
			validate: [validator.isEmail, "Invalid email address"],
		},
		password: {
			type: String,
			required: [true, "Please enter your password"],
			minLength: [6, "Password must be at least 6 characters"],
			select: false,
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		subscription: {
			id: String,
			status: String,
		},
		avatar: {
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
		playlist: [
			{
				course: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Course",
				},
				poster: String,
			},
		],
		resetPasswordToken: String,
		resetPasswordExpire: Date,
	},
	{ timestamps: true }
);

// Hash the password before saving it to the database
// ==================================================
userSchema.pre("save", async function (next) {
	try {
		if (!this.isModified("password")) return next();
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		console.error("Error during password hashing:", error.message);
		next(error);
	}
});

// Method to compare passwords
// ===========================
userSchema.methods.comparePassword = async function (enteredPassword) {
	try {
		return await bcrypt.compare(enteredPassword, this.password);
	} catch (error) {
		console.error("Error during password comparison:", error.message);
	}
};

// Genrating the jwt tokken for authenticated users
// ================================================
userSchema.methods.getJwtToken = function () {
	try {
		return jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY_TIME,
		});
	} catch (error) {
		console.error("Error during JWT token generation:", error.message);
	}
};

// Reset token for that user which want to forget his password
// ============================================================
userSchema.methods.getResetToken = function () {
	let resetToken = crypto.randomBytes(20).toString("hex");
	this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
	const tokenExpireyTime = process.env.RESET_TOKEN_EXPIRATION_TIME || 15;
	this.resetPasswordExpire = Date.now() + tokenExpireyTime * 60 * 1000;
	return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;

// Adding real time states when any changes occured in users
// =========================================================
User.watch().on("change", async () => {
	try {
		const states = await State.find().sort({ createdAt: "desc" }).limit(1);
		const subscription = await User.find({ "subscription.status": "active" });
		states[0].users = await User.countDocuments();
		states[0].subscriptions = subscription.length;
		states[0].updatedAt = new Date(Date.now());
		await states[0].save();
		console.log("Y");
	} catch (error) {
		console.log("Error in User model change event:", error);
	}
});
