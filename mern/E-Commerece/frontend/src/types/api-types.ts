import { ProductTypes, User } from "./types";

export interface CustomErrorType {
	status: number;
	data: {
		message: string;
		success: boolean;
	};
}

export interface msgResponseTypes {
	success: boolean;
	message: string;
}

export interface GetUserResponse {
	success: boolean;
	data: User;
}

export interface ProductsResponseTypes {
	success: boolean;
	data: ProductTypes[];
}
export interface HighestPriceResponse {
	success: boolean;
	data: [
		{
			_id: string;
			price: number;
		}
	];
}
export interface CategoriesResponseTypes {
	success: boolean;
	data: string[];
}
export interface SearchProductsTypes {
	success: boolean;
	data: {
		totalPages: number;
		filteredProducts: ProductTypes[];
	};
}
export interface SearchProductsQueryTypes {
	page: number;
	price: number;
	search: string;
	sort: string;
	category: string;
}
export interface NewProductFormData {}
export interface NewProductDataTypes {
	id: string;
	formData: NewProductFormData;
}
