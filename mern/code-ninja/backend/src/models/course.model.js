import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	video: {
		public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
});

const courseSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please enter a title"],
			minLength: [4, "Title must be 4 or more characters"],
			maxLength: [80, "Title can't exceed 80 characters"],
		},
		description: {
			type: String,
			required: [true, "Please enter a description"],
			minLength: [20, "Description must be 20 or more characters"],
		},
		lectures: [lectureSchema],
		poster: {
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
		views: {
			type: Number,
			default: 0,
		},
		numOfVideos: {
			type: Number,
			default: 0,
		},
		category: {
			type: String,
			required: [true, "Please select a category"],
		},
		createdBy: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
