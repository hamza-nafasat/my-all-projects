import axios from "axios";
import { server } from "../store/store";

export const getAllCourses =
	(keyword = "", category = "") =>
	async (dispatch) => {
		try {
			dispatch({ type: "allCoursesRequest" });
			const { data } = await axios.get(`${server}/courses?title=${keyword}&category=${category}`);
			dispatch({ type: "allCoursesSuccess", payload: data.data });
		} catch (error) {
			const errorMessage = error.response ? error.response.data.message : "Something went wrong";
			dispatch({ type: "allCoursesFail", payload: errorMessage });
		}
	};

export const getCourseLectures = (id) => async (dispatch) => {
	const axiosConfig = { withCredentials: true };
	try {
		dispatch({ type: "courseLecturesRequest" });
		const { data } = await axios.get(`${server}/course/${id}`, axiosConfig);
		dispatch({ type: "courseLecturesSuccess", payload: data.lectures });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "courseLecturesFail", payload: errorMessage });
	}
};
