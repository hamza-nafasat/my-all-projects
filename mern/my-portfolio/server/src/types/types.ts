import { NextFunction, Request, Response } from "express";

export type controllerFunction = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<Response<any, Record<string, any>>>;

export interface UserLoginReqTypes {
	name?: string;
	email: string;
	password: string;
}

export interface UserSchemaTypes {
	name: string;
	email: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}
