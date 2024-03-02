// CUSTOM CLASS FOR ERROR HANDLING
export class CustomError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

// CUSTOM ERROR MIDDLEWARE
// -----------------------
export const customErrorMiddleWare = (err, req, res, next) => {
	err.message ||= "Internal Server Error";
	err.statusCode ||= 500;
	return res.status(err.statusCode).json({
		success: false,
		message: err.message,
	});
};

// ASYNC AWAIT WRAPPER USING PROMISES
// ------------------------------------------
export const asyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((err) => {
		if (err instanceof CustomError) {
			res.status(err.statusCode).json({
				success: false,
				message: err.message,
			});
		} else if (err.name === "ValidationError") {
			const { errors } = err;
			// console.log(errors);
			const formattedErrors = Object.keys(errors).map((key) => ({
				field: key,
				message:
					errors[key].properties.message.split("Path")[1] ||
					errors[key].properties.reason?.message,
			}));
			res.status(400).json({
				success: false,
				message: "User validation failed",
				errorsLength: formattedErrors.length,
				errors: formattedErrors,
			});
		} else {
			console.error("Unhandled error:", err.stack || err.message);
			next(err);
		}
	});
};
