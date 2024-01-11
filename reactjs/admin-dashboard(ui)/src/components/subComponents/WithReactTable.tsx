import { Column, TableOptions, useTable } from "react-table";

function WithReactTable<TableDataProps extends object>(
	columns: Column<TableDataProps>[],
	data: TableDataProps[],
	heading: string,
	tableContainerClassname: string
) {
	return function ReactTable() {
		const tableOption: TableOptions<TableDataProps> = { columns, data };
		const reactTable = useTable(tableOption);
		return (
			<div className={tableContainerClassname}>
				<h2 className="tableContainerHeading">{heading}</h2>
				<table className="reactTable" {...reactTable.getTableProps()}>
					{/* TABLE HEAD  */}
					{/* =========== */}
					<thead>
						{reactTable.headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					{/* TABLE BODY  */}
					{/* =========== */}
					<tbody {...reactTable.getTableBodyProps()}>
						{reactTable.rows.map((row) => {
							reactTable.prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	};
}

export default WithReactTable;
