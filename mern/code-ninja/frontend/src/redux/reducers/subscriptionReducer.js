import { createReducer } from "@reduxjs/toolkit";

export const subscriptionReducer = createReducer({}, (builder) => {
	builder
		// BUY SUBSCRIPTION
		// ================
		.addCase("buySubscriptionRequest", (state) => {
			state.loading = true;
		})
		.addCase("buySubscriptionSuccess", (state, action) => {
			state.loading = false;
			state.subscriptionId = action.payload;
		})
		.addCase("buySubscriptionFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		// CANCEL SUBSCRIPTION
		// ===================
		.addCase("cancelSubscriptionRequest", (state) => {
			state.loading = true;
		})
		.addCase("cancelSubscriptionSuccess", (state, action) => {
			state.loading = false;
			state.message = action.payload;
		})
		.addCase("cancelSubscriptionFail", (state, action) => {
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
