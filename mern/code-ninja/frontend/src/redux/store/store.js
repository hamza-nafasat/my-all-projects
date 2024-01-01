import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
import { otherReducer } from "../reducers/otherReducer";
import { adminReduces } from "../reducers/adminReducer";
import { courseReducers } from "../reducers/courseReducer";
import { profileReducer } from "../reducers/profileReducer";
import { subscriptionReducer } from "../reducers/subscriptionReducer";

export const server = "https://backend-mern-codeninja.vercel.app/api/v1";
// export const server = "http://localhost:4000/api/v1";

const store = configureStore({
	reducer: {
		user: userReducer,
		other: otherReducer,
		admin: adminReduces,
		course: courseReducers,
		profile: profileReducer,
		subscription: subscriptionReducer,
	},
});

export default store;
