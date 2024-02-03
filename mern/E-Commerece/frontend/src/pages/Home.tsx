import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const mainImageUrl =
	"https://res.cloudinary.com/hamzanafasat/image/upload/v1706428734/e-commrce%20mern%20website/ihmcvahfrdqunwmu93w1.jpg";

interface ProductsDetails {
	_id: string;
	name: string;
	stock: number;
	price: number;
	photo: string;
}
export const productsDetails: ProductsDetails[] = [
	{
		_id: "1",
		name: "Mackbook",
		stock: 2,
		price: 200000,
		photo: "https://m.media-amazon.com/images/I/619L9jf3-rL._AC_UF894,1000_QL80_FMwebp_.jpg",
	},
	{
		_id: "2",
		name: "Gaming Headphones",
		stock: 25,
		price: 10000,
		photo: "https://m.media-amazon.com/images/I/51FRJHB7XOL._AC_SL1001_.jpg",
	},
	{
		_id: "3",
		name: "Logitech Mouse",
		stock: 100,
		price: 4999,
		photo: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
	},
	{
		_id: "4",
		name: "IPhone-14",
		stock: 20,
		price: 3050000,
		photo: "https://m.media-amazon.com/images/I/71sWVYmpkhL._AC_SL1500_.jpg",
	},
	{
		_id: "5",
		name: "Mechanical Keyboards",
		stock: 5,
		price: 12000,
		photo: "https://m.media-amazon.com/images/I/81ykzmz6KZL._AC_SL1500_.jpg",
	},
];
const Home = () => {
	const addToCartHandler = () => {};

	return (
		<div className="homePage">
			<img src={mainImageUrl} alt="background image" loading="lazy" />
			<section>
				<h2>Latest Products</h2>
				<Link to={"/search"} className="findMore" aria-label="more products link">
					More
				</Link>
			</section>
			<main>
				{productsDetails.map((product) => (
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

// //IMAGE PRELOADING FUNCTION TILL RETURN JSX
// // ========================================
// const onLoadImage = (res?: string) => {
// 	setIsImageLoaded(true);
// 	if (res) console.log(res);
// };
// useEffect(() => {
// 	const image = new Image();
// 	image.src =
// 		"https://res.cloudinary.com/hamzanafasat/image/upload/v1706428734/e-commrce%20mern%20website/ihmcvahfrdqunwmu93w1.jpg";
// 	image.onload = () => onLoadImage();
// 	image.onerror = () => onLoadImage("image PreLoaded Failed");
// 	// Cleanup function
// 	return () => {
// 		image.onload = null;
// 		image.onerror = null;
// 	};
// }, []);
