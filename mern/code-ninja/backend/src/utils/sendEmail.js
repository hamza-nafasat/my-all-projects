import { createTransport } from "nodemailer";

const sendEmail = async (to, subject, text) => {
	const transpoter = createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});
	await transpoter.sendMail({ to, subject, text });
};

export default sendEmail;
