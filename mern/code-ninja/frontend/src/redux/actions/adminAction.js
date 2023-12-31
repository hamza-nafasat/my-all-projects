import axios from "axios";
import { server } from "../store/store";

export const createCourse = (formData) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "multipart/form-data" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "createCourseRequest" });
		const { data } = await axios.post(`${server}/createcourse`, formData, axiosConfig);
		dispatch({ type: "createCourseSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "createCourseFail", payload: errorMessage });
	}
};

export const deleteCourse = (courseId) => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "deleteCourseRequest" });
		const { data } = await axios.delete(`${server}/course/${courseId}`, axiosConfig);
		dispatch({ type: "deleteCourseSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "deleteCourseFail", payload: errorMessage });
	}
};

export const addLectures = (id, formData) => async (dispatch) => {
	const axiosConfig = {
		headers: { "content-type": "multipart/form-data" },
		withCredentials: true,
	};
	try {
		dispatch({ type: "addLecturesRequest" });
		const { data } = await axios.post(`${server}/course/${id}`, formData, axiosConfig);
		dispatch({ type: "addLecturesSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "addLecturesFail", payload: errorMessage });
	}
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "deleteLectureRequest" });
		const { data } = await axios.delete(
			`${server}/lecture/?courseId=${courseId}&lectureId=${lectureId}`,
			axiosConfig
		);
		dispatch({ type: "deleteLectureSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "deleteLectureFail", payload: errorMessage });
	}
};

export const getAllUsers = () => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "getAllUsersRequest" });
		const { data } = await axios.get(`${server}/admin/users`, axiosConfig);
		dispatch({ type: "getAllUsersSuccess", payload: data.users });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "getAllUsersFail", payload: errorMessage });
	}
};

export const changeUserRole = (id) => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "changeUserRoleRequest" });
		const { data } = await axios.put(`${server}/admin/user/${id}`, "", axiosConfig);
		dispatch({ type: "changeUserRoleSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "changeUserRoleFail", payload: errorMessage });
	}
};

export const deleteUser = (id) => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "deleteUserRequest" });
		const { data } = await axios.delete(`${server}/admin/user/${id}`, axiosConfig);
		dispatch({ type: "deleteUserSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "deleteUserFail", payload: errorMessage });
	}
};

export const getAdminStats = () => async (dispatch) => {
	const axiosConfig = {
		withCredentials: true,
	};
	try {
		dispatch({ type: "getAdminStatsRequest" });
		const { data } = await axios.get(`${server}/admin/stats`, axiosConfig);
		dispatch({ type: "getAdminStatsSuccess", payload: data });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "getAdminStatsFail", payload: errorMessage });
	}
};
