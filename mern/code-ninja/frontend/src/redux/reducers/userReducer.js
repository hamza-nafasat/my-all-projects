import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
	builder
		// REGISTER
		// ========
		.addCase("registerRequest", (state) => {
			state.loading = true;
		})
		.addCase("registerSuccess", (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		})
		.addCase("registerFail", (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		})
		// LOGIN
		// ======
		.addCase("loginRequest", (state) => {
			state.loading = true;
		})
		.addCase("loginSuccess", (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload.user;
			state.message = action.payload.message;
		})
		.addCase("loginFail", (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.error = action.payload;
		})
		// LOADER USER
		// ===========
		.addCase("loaderUserRequest", (state) => {
			state.loading = true;
		})
		.addCase("loaderUserSuccess", (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		})
		.addCase("loaderUserFail", (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
		})
		// LOGOUT
		// ======
		.addCase("logoutRequest", (state) => {
			state.loading = true;
		})
		.addCase("logoutSuccess", (state, action) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.user = null;
			state.message = action.payload;
		})
		.addCase("logoutFail", (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.error = action.payload;
		})
		// FORGET PASSWORD
		// ===============
		.addCase("forgetPasswordRequest", (state) => {
			state.loading = true;
		})
		.addCase("forgetPasswordSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("forgetPasswordFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// RESET PASSWORD
		// ===============
		.addCase("resetPasswordRequest", (state) => {
			state.loading = true;
		})
		.addCase("resetPasswordSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("resetPasswordFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// ADD TO PLAY LIST
		// ================
		.addCase("addToPlaylistRequest", (state) => {
			state.loading = true;
		})
		.addCase("addToPlaylistSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("addToPlaylistFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// REMOVE FROM PLAY LIST
		// ================-====
		.addCase("removeFromPlaylistRequest", (state) => {
			state.loading = true;
		})
		.addCase("removeFromPlaylistSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("removeFromPlaylistFail", (state, action) => {
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
