import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

interface InitialState {
	address: string;
	state: string;
	city: string;
	country: string;
	pinCode: string;
}
const initialState: InitialState = {
	address: "",
	state: "",
	city: "",
	country: "",
	pinCode: "",
};

const Shipping = () => {
	const [shippingInfo, setShippingInfo] = useState<InitialState>(initialState);

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		e.preventDefault();
		setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(shippingInfo);
		setShippingInfo(initialState);
	};
	return (
		<div className="shippingPage">
			<Link to={"/cart"} className="backBtn">
				<BiArrowBack />
			</Link>
			<form onSubmit={submitHandler}>
				<h2>Shipping Info</h2>
				<input
					required
					autoFocus
					id="address"
					type="text"
					name="address"
					autoComplete="street-address"
					value={shippingInfo.address}
					placeholder="Enter Your Address"
					onChange={changeHandler}
				/>
				<input
					required
					id="state"
					type="text"
					name="state"
					autoComplete="address-level1"
					value={shippingInfo.state}
					placeholder="Enter Your State"
					onChange={changeHandler}
				/>
				<input
					required
					id="city"
					type="text"
					name="city"
					autoComplete="address-level2"
					value={shippingInfo.city}
					placeholder="Enter Your City"
					onChange={changeHandler}
				/>

				<select
					required
					id="country"
					name="country"
					autoComplete="country"
					value={shippingInfo.country}
					onChange={changeHandler}
				>
					<option value="">Choose Country</option>
					<option value="pakistan">Pakistan</option>
					<option value="india">India</option>
				</select>
				<input
					required
					id="pinCode"
					type="number"
					name="pinCode"
					autoComplete="postal-code"
					value={shippingInfo.pinCode}
					placeholder="Enter Your PinCode"
					onChange={changeHandler}
				/>
				<button type="submit">Pay Now</button>
			</form>
		</div>
	);
};

export default Shipping;
