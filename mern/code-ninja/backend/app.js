import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { API_PREFIX_V1 } from "./constants.js";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";

import userRoutes from "./src/routes/user.routes.js";
import otherRoutes from "./src/routes/other.routes.js";
import courseRoutes from "./src/routes/course.routes.js";
import paymentRoutes from "./src/routes/payment.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
	path: path.join(__dirname, "src", "config", ".env"),
});

//* MIDDLEWARES
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
);

//*  ROUTES
app.use(API_PREFIX_V1, userRoutes);
app.use(API_PREFIX_V1, otherRoutes);
app.use(API_PREFIX_V1, courseRoutes);
app.use(API_PREFIX_V1, paymentRoutes);

//* MAIN ROUTE
app.get("/", (req, res) =>
	res.send(
		`<h2>
			Site is working <a href=${process.env.FRONTEND_URL}>here</a>.
		</h2>`
	)
);

//* ERROR MIDDLEWARE
app.use(errorMiddleware);

export default app;
