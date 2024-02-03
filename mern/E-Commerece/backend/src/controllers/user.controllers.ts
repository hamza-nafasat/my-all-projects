import { NextFunction, Response, Request } from "express";
import { NewUserReqProps } from "../types/user,types.js";
import { User } from "../models/user.model.js";

export const createUser = async (
	req: Request<{}, {}, NewUserReqProps>,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, email, dob, photo, gender, _id } = req.body;
		if (!name || !email || !dob || !photo || !gender || !_id) {
			return res.status(400).json({ success: false, message: `please enter all fields` });
		}
		const user = await User.create({ name, email, dob: new Date(dob), photo, gender, _id });
		res.status(200).json({ success: true, message: `Welcome sir ${user.name}` });
	} catch (error: any) {
		return res.status(404).json({ success: false, message: `${error.message}` });
	}
};
