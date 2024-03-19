import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { backendServerUrl } from "../redux/store/store";

type ProductProps = {
	productId: string;
	name: string;
	photo: string;
	stock: number;
	price: number;
};

const CartItemCard = ({ name, photo, price, productId }: ProductProps) => {
	const [quantity, setQuantity] = useState<number>(1);
	return (
		<div className="cartItem">
			<img src={`${backendServerUrl}/${photo}`} alt={name} />
			<article>
				<Link to={`/product/${productId}`}>{name}</Link>
				<span>{price}Rs</span>
			</article>
			<div>
				<button onClick={() => setQuantity((pre) => pre - 1)} disabled={quantity === 1}>
					-
				</button>
				<p>{quantity}</p>
				<button onClick={() => setQuantity((pre) => pre + 1)} disabled={quantity === 10}>
					+
				</button>
			</div>
			<button>
				<FaTrash />
			</button>
		</div>
	);
};

export default CartItemCard;
