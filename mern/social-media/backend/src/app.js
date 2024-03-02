import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { customErrorMiddleWare } from "./middlewares/asyncHandler.js";

export const app = express();

app.use(express.json());

// Route handling
app.use("/api/v1/users", userRoutes);
app.get("/", (req, res) => {
	res.send(`<h1>App is running on <a href=${process.env.FRONTEND_URL}>APP URL</a></h1>`);
});

app.use(customErrorMiddleWare);
