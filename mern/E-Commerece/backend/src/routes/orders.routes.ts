import express from "express";
import { newOrderCreate } from "../controllers/orders.controllers.js";

const app = express();

app.post("/new", newOrderCreate);

export default app;
