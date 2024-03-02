import mongoose, { Schema, mongo } from "mongoose";
import { OrderSchemaTypes } from "../types/schema.types.js";

const singleOrderItem = {
	name: String,
	photo: String,
	price: Number,
	Quantity: Number,
	productId: {
		type: mongoose.Types.ObjectId,
		ref: "Product",
	},
};

const orderSchema = new mongoose.Schema<OrderSchemaTypes>(
	{
		shippingInfo: {
			address: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			state: {
				type: String,
				required: true,
			},
			country: {
				type: String,
				required: true,
			},
			pinCode: {
				type: Number,
				required: true,
			},
		},
		orderItem: [singleOrderItem],
		user: {
			type: String,
			ref: "user",
			required: true,
		},
		subTotal: {
			type: Number,
			required: true,
		},
		tax: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		shippingCharges: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ["Processing", "Delivered", "Shipped"],
			default: "Processing",
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model<OrderSchemaTypes>("Order", orderSchema);
export default Order;
