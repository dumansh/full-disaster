import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import TableRowEdit from "./TableRowEdit";
const url = "http://localhost:8000/api/supply/";

function SupplyList({ title }) {
	document.title = title;
	const [supplies, setSupplies] = useState([{}]);
	const [isLoading, setIsLoading] = useState(true);
	const button = useRef();

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const refactored_data = data.map((supply) => {
					return { ...supply, editFlag: false };
				});

				setSupplies(refactored_data);
				setIsLoading(false);
			});
	}, []);

	function modifyEditFlag(row, e) {
		const index = supplies.findIndex((object) => {
			return object.id === row.id;
		});
		if (row.editFlag) {
			const inputs =
				e.target.parentNode.parentNode.querySelectorAll("input, select");
			const supplyobject = {};
			for (let i = 0; i < inputs.length; i++) {
				if (inputs[i].name !== "active") {
					supplies[index][inputs[i].name] = inputs[i].value;
				} else {
					supplies[index][inputs[i].name] = inputs[i].value === "true";
				}
			}
			fetch(url + `${row.id}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(supplies[index]),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Updated");
				});
		}
		supplies[index].editFlag = !supplies[index].editFlag;
		setSupplies([...supplies]);
	}

	if (isLoading) {
		return <h1>Loading... </h1>;
	}
	return (
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Supply Code</th>
						<th>Billing Code</th>
						<th>Hourly Rate</th>
						<th>Active</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{supplies.map((supply) => {
						return (
							<tr key={supply.id}>
								<td>{supply.id}</td>
								{supply.editFlag ? (
									<TableRowEdit {...supply} />
								) : (
									<TableRow {...supply} />
								)}

								<td>
									<button
										ref={button}
										type='btn'
										onClick={(e) => modifyEditFlag(supply, e)}
										className='btn btn-primary'>
										{supply.editFlag ? "Save" : "Edit"}
									</button>
								</td>
								<td>
									<Link to={`/supply/${supply.id}`}>details</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default SupplyList;
