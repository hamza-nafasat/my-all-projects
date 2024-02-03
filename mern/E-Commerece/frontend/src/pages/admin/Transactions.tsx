import { Column } from "react-table";
import { Link } from "react-router-dom";
import AdminAside from "../../components/admin/AdminAside";
import { ReactElement, useCallback, useState } from "react";
import WithReactTable from "../../components/admin/WithReactTable";

interface TransactionsTableDataTypes {
	user: string;
	amount: number;
	discount: number;
	quantity: number;
	status: ReactElement;
	action: ReactElement;
}
const columns: Column<TransactionsTableDataTypes>[] = [
	{
		Header: "User",
		accessor: "user",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Discount",
		accessor: "discount",
	},
	{
		Header: "Quantity",
		accessor: "quantity",
	},
	{
		Header: "Action",
		accessor: "action",
	},
];
const tableData: TransactionsTableDataTypes[] = [
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Charlie",
		amount: 4500,
		discount: 400,
		quantity: 3,
		status: <span className="red">Processing</span>,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "Dave",
		amount: 6999,
		discount: 400,
		status: <span className="green">Shipped</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
	{
		user: "John",
		amount: 6999,
		discount: 400,
		status: <span className="purple">Delivered</span>,
		quantity: 6,
		action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
	},
];
const Transactions = () => {
	const [transactionsTableData] = useState<TransactionsTableDataTypes[]>(tableData);
	const transactionTable = useCallback(
		WithReactTable<TransactionsTableDataTypes>(
			columns,
			transactionsTableData,
			"reactTableBox",
			"Customers",
			true,
			9
		),
		[]
	);
	return (
		<div className="adminContainer">
			<AdminAside />
			<main style={{ overflowY: "auto" }}>{transactionTable()}</main>
		</div>
	);
};

export default Transactions;
