import React from "react";

const TableRow = (supply) => {
	return (
		<>
			<td>{supply.supply_code}</td>
			<td>{supply.billing_code}</td>
			<td>{supply.default_rates}</td>
			<td>{supply.active ? "Active" : "Inactive"}</td>
		</>
	);
};

export default TableRow;
