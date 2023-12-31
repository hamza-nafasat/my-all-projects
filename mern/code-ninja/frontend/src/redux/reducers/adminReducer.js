import { createReducer } from "@reduxjs/toolkit";

export const adminReduces = createReducer(
	{
		users: [],
	},
	(builder) => {
		builder
			// GET ADMIN STATS
			// ===============
			.addCase("getAdminStatsRequest", (state) => {
				state.loading = true;
			})
			.addCase("getAdminStatsSuccess", (state, action) => {
				state.loading = false;
				state.stats = action.payload.stats;

				state.usersCounts = action.payload.usersCounts;
				state.usersProfit = action.payload.usersProfit;
				state.usersPercentage = action.payload.usersPercentage;

				state.viewsCounts = action.payload.viewsCounts;
				state.viewsProfit = action.payload.viewsProfit;
				state.viewsPercentage = action.payload.viewsPercentage;

				state.subscriptionsCounts = action.payload.subscriptionsCounts;
				state.subscriptionsProfit = action.payload.subscriptionsProfit;
				state.subscriptionsPercentage = action.payload.subscriptionsPercentage;
			})
			.addCase("getAdminStatsFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// CREATE COURSE
			// =============
			.addCase("createCourseRequest", (state) => {
				state.loading = true;
			})
			.addCase("createCourseSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("createCourseFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// DEL COURSE
			// ==========
			.addCase("deleteCourseRequest", (state) => {
				state.loading = true;
			})
			.addCase("deleteCourseSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("deleteCourseFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			//ADD LECTURES
			// ===========
			.addCase("addLecturesRequest", (state) => {
				state.loading = true;
			})
			.addCase("addLecturesSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("addLecturesFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// DEL LECTURES
			// ============
			.addCase("deleteLectureRequest", (state) => {
				state.loading = true;
			})
			.addCase("deleteLectureSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("deleteLectureFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// GET ALL USERS
			// =============
			.addCase("getAllUsersRequest", (state) => {
				state.loading = true;
			})
			.addCase("getAllUsersSuccess", (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase("getAllUsersFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// CHANGE USER ROLE
			// ================
			.addCase("changeUserRoleRequest", (state) => {
				state.loading = true;
			})
			.addCase("changeUserRoleSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("changeUserRoleFail", (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// DELETE USER
			// ===========
			.addCase("deleteUserRequest", (state) => {
				state.loading = true;
			})
			.addCase("deleteUserSuccess", (state, action) => {
				state.loading = false;
				state.message = action.payload;
			})
			.addCase("deleteUserFail", (state, action) => {
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
