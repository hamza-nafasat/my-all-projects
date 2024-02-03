import mongoose from "mongoose";

export const connectDB = async (uri: string, dbName: string) => {
	try {
		const response = await mongoose.connect(uri, { dbName });
		console.log(`DB ${response.connection.name} is connected on ${response.connection.host}`);
	} catch (error: any) {
		console.error(`MongoDB connection failed ${error.message}`);
		process.exit(1);
	}
};
