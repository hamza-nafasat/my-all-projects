import { ChangeEvent, FormEvent, useState } from "react";
import AdminAside from "../../components/AdminAside";

const NewProduct = () => {
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>();
	const [stock, setStock] = useState<number>();
	const [photo, setPhoto] = useState<string>("");
	const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | undefined = e.target.files?.[0];
		const reader: FileReader = new FileReader();
		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") setPhoto(reader.result);
			};
		}
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="newProductContainer">
				<article>
					<form onSubmit={handleSubmit}>
						<h2>New Product</h2>
						<div>
							<label htmlFor="newProductName">Name:</label>
							<input
								required
								type="text"
								value={name}
								id="newProductName"
								placeholder="Enter product name"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="newProductPrice">Price:</label>
							<input
								required
								type="number"
								value={price}
								id="newProductPrice"
								placeholder="Enter product price"
								onChange={(e) => setPrice(Number(e.target.value))}
							/>
						</div>
						<div>
							<label htmlFor="newProductStock">Stock:</label>
							<input
								required
								type="number"
								value={stock}
								id="newProductStock"
								placeholder="Enter product stock"
								onChange={(e) => setStock(Number(e.target.value))}
							/>
						</div>
						<div>
							<label htmlFor="newProductPhoto">Photo:</label>
							<input
								required
								type="file"
								id="newProductPhoto"
								onChange={changePhotoHandler}
							/>
						</div>
						{photo ? <img src={photo} alt="new product Photo" /> : null}
						<button type="submit">Create</button>
					</form>
				</article>
			</main>
		</div>
	);
};

export default NewProduct;
