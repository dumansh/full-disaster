import React from "react";

const TableRowEdit = (supply) => {
	return (
		<>
			<td>
				<input
					type='text'
					name='supply_code'
					defaultValue={supply.supply_code}
					style={{ width: "6rem" }}
				/>
			</td>
			<td>
				<input
					type='text'
					name='billing_code'
					defaultValue={supply.billing_code}
					style={{ width: "5rem" }}
				/>
			</td>
			<td>
				<input
					type='text'
					name='default_rates'
					defaultValue={supply.default_rates}
					style={{ width: "5rem" }}
				/>
			</td>
			<td>
				<select name='active' defaultValue={supply.active}>
					<option value={false}>Inactive</option>
					<option value={true}>Active</option>
				</select>
			</td>
		</>
	);
};

export default TableRowEdit;
