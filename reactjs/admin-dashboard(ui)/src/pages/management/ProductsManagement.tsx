import { ChangeEvent, FormEvent, useState } from "react";
import AdminAside from "../../components/AdminAside";

const img =
	"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
const ProductsManagement = () => {
	const [name, setName] = useState<string>("Puma shows");
	const [price, setPrice] = useState<number>(5000);
	const [stock, setStock] = useState<number>(12);
	const [photo, setPhoto] = useState<string>(img);
	const [updatedName, setUpdatedName] = useState<string>(name);
	const [updatedPrice, setUpdatedPrice] = useState<number>(price);
	const [updatedStock, setUpdatedStock] = useState<number>(stock);
	const [updatedPhoto, setUpdatedPhoto] = useState<string>(photo);
	const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | undefined = e.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") setUpdatedPhoto(reader.result);
			};
		}
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setName(updatedName);
		setPrice(updatedPrice);
		setStock(updatedStock);
		setPhoto(updatedPhoto);
	};
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="ProductsManagementContainer">
				{/* FIRST SECTION FOR SHOWING OLD DATA */}
				{/* ================================== */}
				<section>
					<strong>ID - idOfNewProduct</strong>
					<img src={photo} alt="product Photo" width={500} height="auto" />
					<p>{name}</p>
					{stock > 0 ? (
						<span className="green">{stock} Available</span>
					) : (
						<span className="red">Not Available</span>
					)}
					<h3>{price}$</h3>
				</section>
				{/* SECOND ARTICLE FOR NEW DATA FORM */}
				{/* ================================ */}
				<article>
					<form onSubmit={handleSubmit}>
						<h2>Manage</h2>
						<div>
							<label htmlFor="productName">Name:</label>
							<input
								required
								type="text"
								value={updatedName}
								id="productName"
								placeholder="Enter product name"
								onChange={(e) => setUpdatedName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="productPrice">Price:</label>
							<input
								required
								type="number"
								value={updatedPrice}
								id="productPrice"
								placeholder="Enter product price"
								onChange={(e) => setUpdatedPrice(Number(e.target.value))}
							/>
						</div>
						<div>
							<label htmlFor="productStock">Stock:</label>
							<input
								required
								type="number"
								value={updatedStock}
								id="productStock"
								placeholder="Enter product stock"
								onChange={(e) => setUpdatedStock(Number(e.target.value))}
							/>
						</div>
						<div>
							<label htmlFor="productPhoto">Photo:</label>
							<input
								required
								type="file"
								id="productPhoto"
								onChange={changePhotoHandler}
							/>
						</div>
						{updatedPhoto ? <img src={updatedPhoto} alt="new product Photo" /> : null}
						<button type="submit">Update</button>
					</form>
				</article>
			</main>
		</div>
	);
};

export default ProductsManagement;
