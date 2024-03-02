import { FaPlus } from "react-icons/fa";

type ProductsProps = {
	productId: string;
	name: string;
	photo: string;
	stock: number;
	price: number;
	handler: () => void;
};

const ProductCard = ({ handler, name, photo, price }: ProductsProps) => {
	return (
		<div className="productCard">
			<img src={photo} alt={name} loading="lazy" />
			<p>{name}</p>
			<span>{price} Rs</span>
			<div>
				<button onClick={() => handler()}>
					<FaPlus />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
