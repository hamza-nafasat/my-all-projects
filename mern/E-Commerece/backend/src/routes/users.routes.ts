import express from "express";
import { createUser } from "../controllers/user.controllers.js";

const app = express();

app.post("/new", createUser);

export default app;
