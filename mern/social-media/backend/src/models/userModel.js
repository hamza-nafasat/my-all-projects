import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import Joi from "joi";
import { generateUniqueCode } from "../utils/features.js";

const userSchema = new Schema(
	{
		//! 1
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 20,
		},
		//! 2
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 4,
			maxlength: 25,
			validate(value) {
				const usernameSchema = Joi.string()
					.min(4)
					.trim()
					.required()
					.pattern(/^[a-z_-]+$/);
				const { error } = usernameSchema.validate(value);
				if (error) {
					throw new Error(
						"Username must be 4-25 characters long and contain only lowercase letters, underscores, or hyphens."
					);
				}
			},
		},
		//! 3
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				const emailSchema = Joi.string().email().required();
				const { error } = emailSchema.validate(value);
				if (error) {
					throw new Error("Invalid email address. Please enter a valid email.");
				}
			},
		},
		//! 4
		password: {
			type: String,
			required: true,
			minlength: 8,
			trim: true,
			validate(value) {
				const passwordSchema = Joi.string()
					.min(8)
					.trim()
					.required()
					.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
				const { error } = passwordSchema.validate(value);
				if (error) {
					throw new Error(
						"Password must be at least 8 characters long and contain a mix of lowercase and uppercase letters, and at least one number."
					);
				}
			},
		},
		//! 5
		phoneNumber: {
			type: String,
			unique: true,
			required: true,
			trim: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		photo: {
			type: String,
			trim: true,
		},
		posts: {
			type: [Schema.Types.ObjectId],
			ref: "Post",
		},
		followers: {
			type: [Schema.Types.ObjectId],
			ref: "User",
		},
		following: {
			type: [Schema.Types.ObjectId],
			ref: "User",
		},
		badges: {
			type: [Schema.Types.ObjectId],
			ref: "Badge",
		},
		points: {
			type: Number,
			default: 0,
		},
		location: {
			type: {
				type: String,
				enum: ["Point", "Polygon"],
			},
			coordinates: {
				type: [Number],
				index: "2dsphere",
			},
		},
		referralCode: {
			type: String,
			unique: true,
			minlength: 15,
		},
		referralPointsEarned: {
			type: Number,
			default: 0,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		lastLogin: {
			type: Date,
		},
	},
	{ timestamps: true }
);

// -------------------------------
// Virtual property for post count
// -------------------------------
userSchema.virtual("postCount").get(function () {
	return this.posts.length;
});
userSchema.virtual("followersCount").get(function () {
	return this.followers.length;
});
userSchema.virtual("followingsCount").get(function () {
	return this.following.length;
});
// ----------------
// Pre-save hooks
// ----------------
userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 10);
	}
	next();
});
userSchema.pre("save", async function (next) {
	let code = await generateUniqueCode();
	this.referralCode = code;
	next();
});
userSchema.pre("save", async function (next) {
	const user = this;
	if (user.isNew && user.referredBy) {
		try {
			const referringUser = await User.findById(user.referredBy);
			if (referringUser) {
				referringUser.points += 50;
				referringUser.referralPointsEarned += 50;
				await referringUser.save();
			}
		} catch (error) {
			console.error("Error updating points on referral:", error.message);
		}
	}
	next();
});

// --------------------------------------------------------------------------------
// static methods for user schema for comparing password and update lastLogin state
// --------------------------------------------------------------------------------
userSchema.statics.login = async function (userId) {
	try {
		const user = await this.findByIdAndUpdate(userId, {
			lastLogin: Date.now(),
		});
		return user;
	} catch (error) {
		console.log(error?.message || "error during changing last login date from model");
		throw error;
	}
};
// -----------------------------------------
// Exclude private fields from JSON output
// -----------------------------------------
userSchema.methods.toJSON = function () {
	const user = this.toObject();
	delete user.password;
	return user;
};

export const User = model("User", userSchema);
export default User;
