import { Column } from "react-table";
import WithReactTable from "./WithReactTable";

interface DashboardTableDataTypes {
	id: string;
	quantity: number;
	discount: number;
	amount: number;
	status: string;
}
const columns: Column<DashboardTableDataTypes>[] = [
	{
		Header: "ID",
		accessor: "id",
	},
	{
		Header: "Quantity",
		accessor: "quantity",
	},
	{
		Header: "Discount",
		accessor: "discount",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Status",
		accessor: "status",
	},
];

const DashboardTable = ({ tableData = [] }: { tableData: DashboardTableDataTypes[] }) => {
	return WithReactTable<DashboardTableDataTypes>(
		columns,
		tableData,
		"reactTableContainer",
		"Top Transactions"
	)();
};

export default DashboardTable;
