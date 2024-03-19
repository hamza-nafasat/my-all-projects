import { useState } from "react";
import toast from "react-hot-toast";
import { Skeleton } from "../components/Loader";
import ProductCard from "../components/ProductCard";
import {
	useAllCategoriesQuery,
	useAllSearchProductQuery,
	useHighestPriceQuery,
} from "../redux/api/productApi";
import { CustomErrorType } from "../types/api-types";
const Search = () => {
	const [search, setSearch] = useState<string>("");
	const [sort, setSort] = useState<string>("");
	const [maxPrice, setMaxPrice] = useState<number>(10000);
	const [category, setCategory] = useState<string>("");
	const [page, setPage] = useState<number>(1);

	const addToCartHandler = () => {};
	const {
		data: HighPriceData,
		isLoading: HighPriceLoading,
		isError: HighPriceIsError,
		error: HighPriceError,
	} = useHighestPriceQuery("");
	// getting all categories dynamically
	const { data: categories, isError, error, isLoading: categoryLoading } = useAllCategoriesQuery("");
	// getting all search products data
	const {
		data: searchProducts,
		isError: isPError,
		error: PError,
		isLoading: isPLoading,
	} = useAllSearchProductQuery({ category, page, price: maxPrice, search, sort });

	const isNextPage = page < Number(searchProducts?.data?.totalPages) || 1;
	const isPrevPage = page > 1;

	// handle error
	if (isError) {
		const Error = error as CustomErrorType;
		toast.error(Error.data.message);
	}
	if (isPError) {
		const Error = PError as CustomErrorType;
		toast.error(Error.data.message);
	}
	if (HighPriceIsError) {
		const Error = HighPriceError as CustomErrorType;
		toast.error(Error.data.message);
	}
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
						max={!HighPriceLoading ? HighPriceData?.data[0].price : 5000000}
						id="maxPrice"
						value={maxPrice}
						onChange={(e) => setMaxPrice(parseInt(e.target.value))}
					/>
				</div>
				{/* sort  */}
				<div>
					<h4>Categories</h4>
					<select
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">All</option>
						{!categoryLoading &&
							categories?.data.map((category, i) => (
								<option key={i} value={`${category.toLowerCase()}`}>
									{category.toUpperCase()}
								</option>
							))}
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
					{isPLoading ? (
						<Skeleton length={5} bgColor="gray" height="10vh" />
					) : (
						searchProducts?.data?.filteredProducts.map((product) => (
							<ProductCard
								key={product._id}
								productId={product._id}
								name={product.name}
								photo={product.photo}
								stock={product.stock}
								price={product.price}
								handler={addToCartHandler}
							/>
						))
					)}
				</div>
				{/*  Pagination  */}
				<article className="searchPagination">
					<button onClick={() => setPage((pre) => pre - 1)} disabled={!isPrevPage}>
						Prev
					</button>
					<span>
						{page} of {searchProducts?.data?.totalPages}
					</span>
					<button onClick={() => setPage((pre) => pre + 1)} disabled={!isNextPage}>
						Next
					</button>
				</article>
			</main>
		</div>
	);
};

export default Search;
