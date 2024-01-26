import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AdminAside from "../components/AdminAside";
import { ReactElement, useCallback, useState } from "react";
import WithReactTable from "../components/subComponents/WithReactTable";

interface ProductsTableDataTypes {
	photo: ReactElement;
	name: string;
	price: number;
	stock: number;
	action: ReactElement;
}
const columns: Column<ProductsTableDataTypes>[] = [
	{
		Header: "Photo",
		accessor: "photo",
	},
	{
		Header: "Name",
		accessor: "name",
	},
	{
		Header: "Price",
		accessor: "price",
	},
	{
		Header: "Stock",
		accessor: "stock",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];
const img =
	"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const productsTableDataTypes: ProductsTableDataTypes[] = [
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
	{
		photo: <img src={img} alt="Shoes" />,
		name: "Puma Shoes",
		price: 690,
		stock: 3,
		action: <Link to="/admin/product/sajknaskd">Manage</Link>,
	},
	{
		photo: <img src={img2} alt="Shoes" />,
		name: "MacBook",
		price: 232223,
		stock: 213,
		action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
	},
];

const Products = () => {
	const [data] = useState<ProductsTableDataTypes[]>(productsTableDataTypes);
	const table = useCallback(
		WithReactTable<ProductsTableDataTypes>(columns, data, "reactTableBox", "Products", true),
		[]
	);
	return (
		<div className="adminContainer">
			<AdminAside />
			<main style={{ overflowY: "auto" }}>{table()}</main>
			<Link to={"/admin/product/new"} className="createProductButton">
				<FaPlus />
			</Link>
		</div>
	);
};

export default Products;
