import { NextFunction, Request, Response } from "express";
import { controllerFunction } from "../types/types.js";

const TryCatch = (func: controllerFunction) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			return await func(req, res, next);
		} catch (err) {
			res.status(404).json({
				success: false,
				message: "Internal Server Error",
			});
		}
	};
};
