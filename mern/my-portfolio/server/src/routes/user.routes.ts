import express from "express";
import { loginFunction } from "../controllers/user.controller.js";

const app = express();

app.get("/login/i-am-admin", loginFunction);
