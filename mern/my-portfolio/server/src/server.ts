import express from "express";
import connectDb from "./utils/connectDb.js";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res, next) => {
	res.send("Server is running");
});

connectDb("mongodb://localhost:27017", "my-portfolio-db");

app.listen(port, () => {
	console.log(`server is running on ${port} `);
});
