import { Request } from "express";
import { TryCatch } from "../middlewares/errorHandler.js";
import Order from "../models/orders.model.js";
import { newOrderReqTypes } from "../types/apis.types.js";
import CustomError from "../utils/customClass.js";
import { invalidateNodeCash, reduceStock, responseFunc } from "../utils/features.js";

export const newOrderCreate = TryCatch(async (req: Request<{}, {}, newOrderReqTypes>, res, next) => {
	const { orderItem, shippingInfo, shippingCharges, discount, subTotal, tax, total, user } =
		req.body;
	//// ensuring that all required fields are given
	if (
		!orderItem ||
		!shippingCharges ||
		!shippingInfo ||
		!discount ||
		!subTotal ||
		!tax ||
		!total ||
		!user
	) {
		return next(new CustomError("Please Provide All Fields", 400));
	}
	//// creating a order
	await Order.create({
		orderItem,
		shippingInfo,
		shippingCharges,
		discount,
		subTotal,
		tax,
		total,
		user,
	});
	//// reducing stock from products bcz some items ordered
	await reduceStock(orderItem);
	//// invalidate cash items bcz of order
	invalidateNodeCash({ isProducts: true, isOrders: true, isAdmins: true });
	responseFunc(res, "Your Order Placed Successfully", 201);
});
