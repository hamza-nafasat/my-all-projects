import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import userReducer from "../reducers/userReducer";
import productApi from "../api/productApi";

export const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER;

export const store = configureStore({
	reducer: {
		[userReducer.name]: userReducer.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware).concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
