import express from "express";
import { registerNewUser } from "../controllers/userControllers.js";

const app = express();

// register a user  http://localhost:4000/api/v1/register
app.post("/register", registerNewUser);

export default app;
