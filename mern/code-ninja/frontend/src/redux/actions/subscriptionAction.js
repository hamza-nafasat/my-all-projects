import axios from "axios";
import { server } from "../store/store";

export const buySubscription = () => async (dispatch) => {
	const axiosConfig = { withCredentials: true };
	try {
		dispatch({ type: "buySubscriptionRequest" });
		const { data } = await axios.get(`${server}/subscribe`, axiosConfig);
		dispatch({ type: "buySubscriptionSuccess", payload: data.subscriptionId });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "buySubscriptionFail", payload: errorMessage });
	}
};

export const cancelSubscription = () => async (dispatch) => {
	const axiosConfig = { withCredentials: true };
	try {
		dispatch({ type: "cancelSubscriptionRequest" });
		const { data } = await axios.delete(`${server}/subscription/cancel`, axiosConfig);
		dispatch({ type: "cancelSubscriptionSuccess", payload: data.message });
	} catch (error) {
		const errorMessage = error.response ? error.response.data.message : "Something went wrong";
		dispatch({ type: "cancelSubscriptionFail", payload: errorMessage });
	}
};
