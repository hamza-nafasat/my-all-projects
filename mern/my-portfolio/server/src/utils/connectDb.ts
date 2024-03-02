import mongoose from "mongoose";

const connectDb = async (url: string, dbName: string = "portfolio-db") => {
	try {
		const response = await mongoose.connect(url, { dbName });
		const { name, host, port } = response.connection;
		console.log(`Database (${name}) connected successfully on mongodb://${host}:${port}`);
	} catch (err) {
		console.log("MongoDb Connecting Error ", err);
	}
};

export default connectDb;
