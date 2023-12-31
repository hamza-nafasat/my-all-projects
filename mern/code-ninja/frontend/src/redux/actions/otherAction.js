import axios from "axios";
import { server } from "../store/store";

export const contactUs = (name, email, message) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "contactUsRequest" });
		const { data } = await axios.post(`${server}/contact`, { name, email, message }, axiosConfig);
		dispatch({ type: "contactUsSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "contactUsFail", payload: errorMessage });
	}
};

export const requestAcourse = (name, email, course) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "application/json" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "requestAcourseRequest" });
		const { data } = await axios.post(`${server}/courserequest`, { name, email, course }, axiosConfig);
		dispatch({ type: "requestAcourseSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "requestAcourseFail", payload: errorMessage });
	}
};
