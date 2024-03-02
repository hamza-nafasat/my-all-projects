import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Products } from "../assets/data.json";
const Search = () => {
	const [search, setSearch] = useState<string>("");
	const [sort, setSort] = useState<string>("");
	const [maxPrice, setMaxPrice] = useState<number>(10000);
	const [category, setCategory] = useState<string>("");
	const [page, setPage] = useState<number>(1);

	const addToCartHandler = () => {};

	const isNextPage = page < 4;
	const isPrevPage = page > 1;
	return (
		<div className="productSearchPage">
			{/* ====== Aside ======= */}
			{/* ==================== */}
			<aside>
				<h2>Filters</h2>
				{/* sort  */}
				<div>
					<h4>Sort</h4>
					<select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
						<option value="">Default</option>
						<option value="ascending">Price (Low to High)</option>
						<option value="descending">Price (High to Low)</option>
					</select>
				</div>
				{/* maxPrice  */}
				<div>
					<h4>Max Price: {maxPrice ?? ""}</h4>
					<input
						type="range"
						min={500}
						max={500000}
						id="maxPrice"
						value={maxPrice}
						onChange={(e) => setMaxPrice(parseInt(e.target.value))}
					/>
				</div>
				{/* sort  */}
				<div>
					<h4>Category</h4>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">All</option>
						<option value="mobile">Mobile</option>
						<option value="laptop">Laptop</option>
						<option value="camera">Camera</option>
						<option value="accessories">Accessories</option>
					</select>
				</div>
			</aside>
			{/* ====== Main ======= */}
			{/* ==================== */}
			<main>
				<h2>Products</h2>
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Search by name..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				{/*  Products  */}
				<div className="searchProductsList">
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
				</div>
				{/*  Pagination  */}
				<article className="searchPagination">
					<button onClick={() => setPage((pre) => pre - 1)} disabled={!isPrevPage}>
						Prev
					</button>
					<span>{page} of 4</span>
					<button onClick={() => setPage((pre) => pre + 1)} disabled={!isNextPage}>
						Next
					</button>
				</article>
			</main>
		</div>
	);
};

export default Search;
