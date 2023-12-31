import cloudinary from "cloudinary";

export const configureCloudinary = async () => {
	try {
		cloudinary.v2.config({
			cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
			api_key: process.env.CLOUDINARY_CLIENT_KEY,
			api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
		});
		console.log("Cloudinary configured successfully");
	} catch (error) {
		console.error("Error configuring Cloudinary:", error);
	}
};
// UPLOAD FILE ON CLOUDINARY
// =========================
export const uploadOnCloudinary = async (fileName, type) => {
	try {
		const responce = await cloudinary.v2.uploader.upload(fileName, {
			resource_type: type,
		});
		console.log(`${type} uploaded successfully on cloudinary`);
		return responce;
	} catch (error) {
		console.error("Error occurred while uploading file on Cloudinary", error);
		return null;
	}
};
// REMOVE FILE FROM CLOUDINARY
// ===========================
export const removeFromCloudinary = async (fileName, type) => {
	try {
		const responce = await cloudinary.v2.uploader.destroy(fileName, {
			resource_type: type,
		});
		console.log(`${type} deleted successfully from cloudinary`);
		return responce;
	} catch (error) {
		console.error("Error occurred while removing file from Cloudinary", error);
		return null;
	}
};
