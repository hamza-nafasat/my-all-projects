import axios from "axios";
import { server } from "../store/store";

export const register = (formData) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "multipart/form-data" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "registerRequest" });
		const { data } = await axios.post(`${server}/register`, formData, axiosConfig);
		dispatch({ type: "registerSuccess", payload: data });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "registerFail", payload: errorMessage });
	}
};

export const login = (email, password) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "loginRequest" });
		const { data } = await axios.post(`${server}/login`, { email, password }, axiosConfig);
		dispatch({ type: "loginSuccess", payload: data });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "loginFail", payload: errorMessage });
	}
};

export const loadUser = () => async (dispatch) => {
	const axiosConfig = { withCredentials: true };

	try {
		dispatch({ type: "loaderUserRequest" });
		const { data } = await axios.get(`${server}/myprofile`, axiosConfig);
		dispatch({ type: "loaderUserSuccess", payload: data.user });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "loaderUserFail", payload: errorMessage });
	}
};

export const logout = () => async (dispatch) => {
	const axiosConfig = { withCredentials: true };
	try {
		dispatch({ type: "logoutRequest" });
		const { data } = await axios.get(`${server}/logout`, axiosConfig);
		dispatch({ type: "logoutSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "logoutFail", payload: errorMessage });
	}
};

export const forgetpassword = (email) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "forgetPasswordRequest" });
		const { data } = await axios.post(`${server}/forgetpassword`, { email }, axiosConfig);
		// console.log(data);
		dispatch({ type: "forgetPasswordSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "forgetPasswordFail", payload: errorMessage });
	}
};

export const resetpassword = (password, token) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "resetPasswordRequest" });
		const { data } = await axios.put(`${server}/resetpassword/${token}`, { password }, axiosConfig);
		dispatch({ type: "resetPasswordSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "resetPasswordFail", payload: errorMessage });
	}
};

export const addToPlaylist = (courseId) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "addToPlaylistRequest" });
		const { data } = await axios.post(`${server}/addtoplaylist`, { courseId }, axiosConfig);
		dispatch({ type: "addToPlaylistSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "addToPlaylistFail", payload: errorMessage });
	}
};

export const removeFromPlaylist = (courseId) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "removeFromPlaylistRequest" });
		const { data } = await axios.delete(`${server}/removefromplaylist?courseId=${courseId}`, axiosConfig);
		dispatch({ type: "removeFromPlaylistSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "removeFromPlaylistFail", payload: errorMessage });
	}
};
