import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItemCard from "../components/CartItemCard";
import { Link } from "react-router-dom";
import { Products } from "../assets/data.json";

const Subtotal = 4000;
const tax = Math.round(Subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = Subtotal + tax + shippingCharges - discount;

const Cart = () => {
	const [coupon, setCoupon] = useState<string>("");
	const [isValidCoupon, setIsValidCoupon] = useState<boolean>(false);

	useEffect(() => {
		let timOutId = setTimeout(() => {
			setIsValidCoupon((prev) => !prev);
		}, 1000);
		return () => {
			clearTimeout(timOutId);
		};
	}, [coupon]);

	return (
		<div className="cartPage">
			<main>
				{Products.length > 0 ? (
					Products.map((item, index) => (
						<CartItemCard
							key={index}
							name={item.name}
							price={item.price}
							photo={item.photo}
							stock={item.stock}
							productId={item._id}
						/>
					))
				) : (
					<h2>your cart is empty</h2>
				)}
			</main>
			<aside>
				<p>Subtotal - {Subtotal}Rs</p>
				<p>Shipping - {shippingCharges}Rs</p>
				<p>
					Discount - <em className="red"> {discount}Rs</em>
				</p>
				<p>Tax - {tax}Rs</p>
				<p>
					<b>Total Amount - {total}Rs</b>
				</p>
				<input
					type="text"
					value={coupon}
					placeholder="Enter Your Coupon Code"
					onChange={(e) => setCoupon(e.target.value)}
				/>
				{coupon ? (
					isValidCoupon ? (
						<span className="green">
							{discount}Rs off using The{" "}
							<code>{coupon.length > 8 ? coupon.slice(0, 8) + "..." : coupon}</code>
						</span>
					) : (
						<span className="red">
							Invalid Coupon <VscError />
						</span>
					)
				) : undefined}
				{Products.length > 0 ? <Link to={"/shipping"}>Checkout</Link> : undefined}
			</aside>
		</div>
	);
};

export default Cart;
