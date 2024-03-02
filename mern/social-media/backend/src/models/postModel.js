import { Schema, model, mongoose } from "mongoose";

const postSchema = new Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		content: {
			type: String,
			required: true,
			maxlength: 280,
		},
		mediaType: {
			type: String,
			required: true,
			enum: ["text", "image", "video"],
		},
		mediaUrl: {
			type: String,
		},
		likes: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
			],
		},
		comments: {
			type: [
				{
					userId: {
						type: mongoose.Schema.Types.ObjectId,
						required: true,
						ref: "User",
					},
					content: {
						type: String,
						required: true,
					},
					createdAt: {
						type: Date,
						default: Date.now,
					},
				},
			],
		},
		shares: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default model("Post", postSchema);
