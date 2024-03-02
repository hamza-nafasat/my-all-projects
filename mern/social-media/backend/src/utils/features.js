import User from "../models/userModel.js";

// function for generating referral code which is unique
export const generateUniqueCode = async () => {
	const length = 15;
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*&^%$#@!abcdefghijklmnopqrstuvwxyz0123456789";
	let code;
	do {
		code = "";
		for (let i = 0; i < length; i++) {
			code += characters.charAt(Math.floor(Math.random() * characters.length));
		}
	} while (await User.exists({ referralCode: code }));
	return code;
};
