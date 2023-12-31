import mongoose from "mongoose";

const connectDB = async (dbName = "newdatabase", options = {}) => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
			dbName,
			...options,
		});
		const { name, host, port } = connection;
		console.log(`Database(${name}) connected successfully on //${host}:${port} `);
	} catch (error) {
		console.error("Error connecting to the database:", error);
	}
};

export default connectDB;
