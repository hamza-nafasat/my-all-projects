import { useState } from "react";
import AdminAside from "../../components/AdminAside";
import { OrderItemType, OrderType, orderData, orderItemData } from "../../types";
import { Link } from "react-router-dom";

const TransactionManagement = () => {
	const [order, setOrder] = useState<OrderType>(orderData);
	const orderUpdateHandler = () => {
		setOrder((prev) => ({
			...prev,
			status: prev.status === "Processing" ? "Shipped" : "Delivered",
		}));
	};
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="transactionManagementContainer">
				{/* ORDER ITEM SECTION */}
				{/* ================== */}
				<section>
					<h2>Order Items</h2>
					{order.orderItems.map((item) => (
						<ProductCard
							key={item._id}
							name={item.name}
							_id={item._id}
							photo={item.photo}
							price={item.price}
							quantity={item.quantity}
						/>
					))}
				</section>
				{/* ORDER INFO ARTICLE */}
				{/* ================== */}
				<article>
					<h2>Order Info</h2>
					<h5>User info</h5>
					<p>Name - {order.name}</p>
					<p>Country - {order.country}</p>
					<p>Pin Code - {order.pinCode}</p>
					<p>Address - {`${order.address}, ${order.city}, ${order.state}`}</p>
					<h5>Amount Info</h5>
					<p>Tax - {order.tax}</p>
					<p>Subtotal - {order.subtotal}</p>
					<p>Discount - {order.discount}</p>
					<p>Shipping charges - {order.shippingCharges}</p>
					<p>Total amount - {order.total}</p>
					<h5>Status Info</h5>
					<p>
						Status -{" "}
						<span
							className={
								order.status === "Delivered"
									? "purple"
									: order.status === "Shipped"
									? "green"
									: "red"
							}
						>
							{order.status}
						</span>
					</p>
					<button onClick={orderUpdateHandler}>Process Order</button>
				</article>
			</main>
		</div>
	);
};

const ProductCard = ({ name, _id, photo, price, quantity }: OrderItemType) => {
	return (
		<div className="transactionProductCard">
			<img src={photo} alt={name} />
			<Link to={`/product/${_id}`}>{name}</Link>
			<span>
				${price} x {quantity} = ${quantity * price}
			</span>
		</div>
	);
};

export default TransactionManagement;
