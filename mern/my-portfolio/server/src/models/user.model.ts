import mongoose, { mongo } from "mongoose";
import { UserSchemaTypes } from "../types/types.js";

const userSchema = new mongoose.Schema<UserSchemaTypes>(
	{
		name: {
			type: String,
			required: [true, "Please Enter Your Name"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Please Enter Your Email"],
		},
		password: {
			type: String,
			required: [true, "Please Enter Your Password"],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model<UserSchemaTypes>("User", userSchema);
export default User;
