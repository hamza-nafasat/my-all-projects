const asyncHandler = (asyncFn) => async (req, res, next) => {
	try {
		await asyncFn(req, res, next);
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message || "Internal Server Error",
		});
	}
};

// export const promiseHandler = (promiseFn) => (req, res, next) => {
// 	promiseFn(req, res, next)
// 		.then(() => {
// 			next();
// 		})
// 		.catch((error) => {
// 			res.status(500).json({
// 				success: false,
// 				message: error.message || "Internal Server Error",
// 			});
// 		});
// };

export default asyncHandler;
