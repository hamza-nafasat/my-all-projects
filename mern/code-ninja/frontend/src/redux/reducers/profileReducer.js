import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer({}, (builder) => {
	builder
		// UPDATE PROFILE
		// ==============
		.addCase("updateProfileRequest", (state) => {
			state.loading = true;
		})
		.addCase("updateProfileSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("updateProfileFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// UPDATE PROFILE PICTURE
		// ======================
		.addCase("updateProfilePictureRequest", (state) => {
			state.loading = true;
		})
		.addCase("updateProfilePictureSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("updateProfilePictureFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// CHANGE PASSWORD
		// ===============
		.addCase("changePasswordRequest", (state) => {
			state.loading = true;
		})
		.addCase("changePasswordSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("changePasswordFail", (state, action) => {
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
});
