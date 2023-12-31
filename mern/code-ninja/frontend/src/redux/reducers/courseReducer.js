import { createReducer } from "@reduxjs/toolkit";

export const courseReducers = createReducer(
	{
		courses: [],
		lectures: [],
	},
	(builder) => {
		builder
			// GET ALL COURSES
			// ===============
			.addCase("allCoursesRequest", (state) => {
				state.loading = true;
			})
			.addCase("allCoursesSuccess", (state, action) => {
				state.loading = false;
				state.courses = action.payload;
			})
			.addCase("allCoursesFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// GET COURSE LECTURES
			// ===================
			.addCase("courseLecturesRequest", (state) => {
				state.loading = true;
			})
			.addCase("courseLecturesSuccess", (state, action) => {
				state.loading = false;
				state.lectures = action.payload;
			})
			.addCase("courseLecturesFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// CLEAR MESSAGE AND ERROR
			// =======================
			.addCase("clearError", (state) => {
				state.error = null;
			})
			.addCase("clearMessage", (state) => {
				state.message = null;
			});
	}
);
