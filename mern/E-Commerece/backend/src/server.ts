import express from "express";
import userRoutes from "./routes/users.routes.js";
import { connectDB } from "./utils/dbConnection.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const userPrefix = "/api/v1/users";
const port = process.env.PORT || 8000;

// BODY PARSER MIDDLEWARE ====
app.use(express.json());

// CONNECTING MONGODB ASYNCHRONOUSLY ===
(async () => {
	try {
		await connectDB("mongodb://localhost:27017", "e-commerce");
		// adding routes ===
		app.use(userPrefix, userRoutes);
		app.get("/", (req, res) => res.send("Hello World"));
		// server listing ===
		app.listen(port, () => console.log(`Example app listening on port ${port}!`));
	} catch (err: any) {
		console.error(`Failed to connect to MongoDB ${err.message}`);
		process.exit(1);
	}
})();
