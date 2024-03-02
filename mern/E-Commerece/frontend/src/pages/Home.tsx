import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import backgroundImage from "../assets/img/cover.jpg";
import { Products } from "../assets/data.json";

const Home = () => {
	const addToCartHandler = () => {};

	return (
		<div className="homePage">
			<img src={backgroundImage} alt="background image" loading="lazy" />
			<section>
				<h2>Latest Products</h2>
				<Link to={"/search"} className="findMore" aria-label="more products link">
					More
				</Link>
			</section>
			<main>
				{Products.map((product) => (
					<ProductCard
						key={product._id}
						productId={product._id}
						name={product.name}
						photo={product.photo}
						stock={product.stock}
						price={product.price}
						handler={addToCartHandler}
					/>
				))}
			</main>
		</div>
	);
};

export default Home;
