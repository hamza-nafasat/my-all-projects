import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { backendServerUrl } from "../store/store";
import { GetUserResponse, msgResponseTypes } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER;

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${backendServerUrl}/api/v1/users/` }),
	endpoints: (builder) => ({
		login: builder.mutation<msgResponseTypes, User>({
			query: (user) => ({
				url: "new",
				method: "POST",
				body: user,
			}),
		}),
	}),
});

export const { useLoginMutation } = userApi;

// getting user from data base which help us to check that user is login or not
export const getUserFromDb = async (id: string) => {
	try {
		const { data }: { data: GetUserResponse } = await axios.get(
			`${backendServerUrl}/api/v1/users/one/${id}`
		);
		return data;
	} catch (error) {
		throw error;
	}
};
