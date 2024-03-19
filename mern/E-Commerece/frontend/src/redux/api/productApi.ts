import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	CategoriesResponseTypes,
	HighestPriceResponse,
	NewProductDataTypes,
	ProductsResponseTypes,
	SearchProductsQueryTypes,
	SearchProductsTypes,
	msgResponseTypes,
} from "../../types/api-types";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER;

const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${backendServerUrl}/api/v1/products/`,
	}),
	endpoints: (builder) => ({
		latestProducts: builder.query<ProductsResponseTypes, string>({ query: () => "latest" }),
		highestPrice: builder.query<HighestPriceResponse, string>({ query: () => "high-price" }),
		allAdminProduct: builder.query<ProductsResponseTypes, string>({
			query: (id) => `admin-products?id=${id}`,
		}),
		allCategories: builder.query<CategoriesResponseTypes, string>({
			query: () => `categories`,
		}),
		allSearchProduct: builder.query<SearchProductsTypes, SearchProductsQueryTypes>({
			query: ({ category, page, price, search, sort }) => {
				let base = `all-products?search=${search || ""}`;
				if (category) base += `&category=${category}`;
				if (page) base += `&page=${page}`;
				if (price) base += `&price=${price}`;
				if (sort) base += `&sort=${sort}`;
				return base;
			},
		}),
		createNewProduct: builder.mutation<msgResponseTypes, NewProductDataTypes>({
			query: ({ id, formData }) => ({
				url: `new?id=${id}`,
				body: formData,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useLatestProductsQuery,
	useAllAdminProductQuery,
	useAllCategoriesQuery,
	useHighestPriceQuery,
	useAllSearchProductQuery,
	useCreateNewProductMutation,
} = productApi;
export default productApi;
