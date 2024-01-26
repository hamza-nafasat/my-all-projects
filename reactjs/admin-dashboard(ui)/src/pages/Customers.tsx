import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";
import AdminAside from "../components/AdminAside";
import { ReactElement, useCallback, useState } from "react";
import WithReactTable from "../components/subComponents/WithReactTable";

interface CustomersTableDataTypes {
	avatar: ReactElement;
	name: string;
	gender: string;
	email: string;
	role: string;
	action: ReactElement;
}
const columns: Column<CustomersTableDataTypes>[] = [
	{
		Header: "Avatar",
		accessor: "avatar",
	},
	{
		Header: "Name",
		accessor: "name",
	},
	{
		Header: "Gender",
		accessor: "gender",
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Role",
		accessor: "role",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];
const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";
const tableData: CustomersTableDataTypes[] = [
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img}
				alt="Shoes"
			/>
		),
		name: "Emily Palmer",
		email: "emily.palmer@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img2}
				alt="Shoes"
			/>
		),
		name: "May Scoot",
		email: "aunt.may@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img}
				alt="Shoes"
			/>
		),
		name: "Emily Palmer",
		email: "emily.palmer@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img2}
				alt="Shoes"
			/>
		),
		name: "May Scoot",
		email: "aunt.may@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img}
				alt="Shoes"
			/>
		),
		name: "Emily Palmer",
		email: "emily.palmer@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img2}
				alt="Shoes"
			/>
		),
		name: "May Scoot",
		email: "aunt.may@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img}
				alt="Shoes"
			/>
		),
		name: "Emily Palmer",
		email: "emily.palmer@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img2}
				alt="Shoes"
			/>
		),
		name: "May Scoot",
		email: "aunt.may@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img}
				alt="Shoes"
			/>
		),
		name: "Emily Palmer",
		email: "emily.palmer@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
	{
		avatar: (
			<img
				style={{
					borderRadius: "50%",
				}}
				src={img2}
				alt="Shoes"
			/>
		),
		name: "May Scoot",
		email: "aunt.may@example.com",
		gender: "female",
		role: "user",
		action: (
			<button>
				<FaTrash />
			</button>
		),
	},
];
const Customers = () => {
	const [CustomersTableData] = useState<CustomersTableDataTypes[]>(tableData);
	const customersTable = useCallback(
		WithReactTable<CustomersTableDataTypes>(
			columns,
			CustomersTableData,
			"reactTableBox",
			"Customers",
			true
		),
		[]
	);
	return (
		<div className="adminContainer">
			<AdminAside />
			<main style={{ overflowY: "auto" }}>{customersTable()}</main>
		</div>
	);
};

export default Customers;
