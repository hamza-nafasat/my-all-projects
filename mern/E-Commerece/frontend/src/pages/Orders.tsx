import { ReactElement, useState } from "react";
import WithReactTable from "../components/admin/WithReactTable";
import { Column } from "react-table";
import { Link } from "react-router-dom";

interface OrderData {
	_id: string;
	amount: number;
	quantity: number;
	discount: number;
	action: ReactElement;
	status: ReactElement;
}
const column: Column<OrderData>[] = [
	{ Header: "ID", accessor: "_id" },
	{ Header: "Amount", accessor: "amount" },
	{ Header: "Quantity", accessor: "quantity" },
	{ Header: "Discount", accessor: "discount" },
	{ Header: "Status", accessor: "status" },
	{ Header: "Action", accessor: "action" },
];

const data = [
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
	{
		_id: "hamzaNafasatId1234",
		amount: 5999,
		quantity: 1,
		discount: 400,
		status: <span className="red">Pending</span>,
		action: <Link to={`/order/hamzaNafasatId1234`}>View</Link>,
	},
];

const Orders = () => {
	const [orderData] = useState<OrderData[]>(data);
	const table = WithReactTable<OrderData>(column, orderData, "reactTableBox", "My Orders", true, 6);
	return <div className="container">{table()}</div>;
};

export default Orders;
