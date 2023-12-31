import axios from "axios";
import { server } from "../store/store";

export const updateProfile = (name, email) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "updateProfileRequest" });
		const { data } = await axios.put(`${server}/updateprofile`, { name, email }, axiosConfig);
		dispatch({ type: "updateProfileSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "updateProfileFail", payload: errorMessage });
	}
};

export const updateProfilePicture = (formData) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "multipart/form-data" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "updateProfilePictureRequest" });
		const { data } = await axios.put(`${server}/updateprofilepicture`, formData, axiosConfig);
		dispatch({ type: "updateProfilePictureSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "updateProfilePictureFail", payload: errorMessage });
	}
};

export const changePassword = (oldPassword, newPassword) => async (dispatch) => {
	const feilds = { oldPassword, newPassword };
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "changePasswordRequest" });
		const { data } = await axios.put(`${server}/changepassword`, feilds, axiosConfig);
		dispatch({ type: "changePasswordSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "changePasswordFail", payload: errorMessage });
	}
};
