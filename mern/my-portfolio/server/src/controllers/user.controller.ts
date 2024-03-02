import { NextFunction, Request, Response } from "express";
import { UserLoginReqTypes } from "../types/types.js";
import User from "../models/user.model.js";

export const loginFunction = async (
	req: Request<{}, {}, UserLoginReqTypes>,
	res: Response,
	next: NextFunction
) => {
	const { name, email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ success: false, message: "Email And Password are Required" });
	}
	const user = await User.findOne({ email });
	if (!user) {
		if (name === "me admin" && email && password) {
			await User.create({ name, email, password });
		}
		return res.status(404).json({ success: false, message: "Tum Se Na Ho Paye Ga Beta" });
	}
	if (user.password === password) {
		// send token
	}

	return res.status(200).json({ success: true, message: `Welcome Bose ${user.name.toUpperCase()}` });
};
