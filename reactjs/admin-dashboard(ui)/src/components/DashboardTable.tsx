import { Column } from "react-table";
import WithReactTable from "./subComponents/WithReactTable";

interface TableDataProps {
	id: string;
	quantity: number;
	discount: number;
	amount: number;
	status: string;
}
const columns: Column<TableDataProps>[] = [
	{ Header: "Id", accessor: "id" },
	{ Header: "Quantity", accessor: "quantity" },
	{ Header: "Discount", accessor: "discount" },
	{ Header: "Amount", accessor: "amount" },
	{ Header: "Status", accessor: "status" },
];
const DashboardTable = ({ data = [] }: { data: TableDataProps[] }) => {
	return WithReactTable<TableDataProps>(
		columns,
		data,
		"Top Transactions",
		"transactionTableContainer"
	)();
};

export default DashboardTable;
