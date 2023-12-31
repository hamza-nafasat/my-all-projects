import mongoose from "mongoose";

const stateScheema = new mongoose.Schema(
	{
		users: {
			type: Number,
			default: 0,
		},
		views: {
			type: Number,
			default: 0,
		},
		subscriptions: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const State = mongoose.model("state", stateScheema);
export default State;
