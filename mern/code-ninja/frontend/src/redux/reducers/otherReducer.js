import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer(
	{
		message: null,
		error: null,
	},
	(builder) => {
		builder
			// CONTACT US
			// ==========
			.addCase("contactUsRequest", (state) => {
				state.loading = true;
			})
			.addCase("contactUsSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("contactUsFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// REQUEST A COURSE
			// ================
			.addCase("requestAcourseRequest", (state) => {
				state.loading = true;
			})
			.addCase("requestAcourseSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("requestAcourseFail", (state, action) => {
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
