import { NextFunction, Request, Response } from "express";

export type ApiFuncType = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export interface ResponseType<T = any> {
	success: boolean;
	message?: string;
	data?: T;
}

export interface InvalidateNodeCash {
	isProducts?: boolean;
	isOrders?: boolean;
	isAdmins?: boolean;
}
