import app from "./app.js";
import Razorpay from "razorpay";
import { DB_NAME } from "./constants.js";
import connectDB from "./src/config/database.js";
import { configureCloudinary } from "./src/utils/cloudinary.js";
import nodeCron from "node-cron";
import State from "./src/models/stats.model.js";

const PORT = process.env.PORT || 3000;
//// creating instance of Razorpay
export const instance = new Razorpay({
	key_id: process.env.RAZERPAY_API_KEY,
	key_secret: process.env.RAZERPAY_SECERET_KEY,
});
//// creating stats in db every month
nodeCron.schedule("0 0 0 1 * *", async () => {
	try {
		await State.create({});
		console.log("Cron job executed successfully.");
	} catch (error) {
		console.error("Cron job error:", error);
	}
});
//// mongoDB connect configure cloudinary and start server
async function startServer() {
	try {
		await configureCloudinary();
		await connectDB(DB_NAME);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
	} catch (error) {
		console.error("Error starting the server:", error);
		process.exit(1);
	}
}

startServer();
