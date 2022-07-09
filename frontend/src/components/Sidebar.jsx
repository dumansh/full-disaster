import React from "react";
import SidebarComponent from "./SidebarComponent";
const navLinks = [
	{
		link: "/supply",
		displayName: "Supplies Code Maintenance",
	},
	{
		link: "/labor",
		displayName: "Labor Code Maintenance",
	},
];

function Sidebar() {
	return (
		<div
			className='d-flex flex-column flex-shrink-0 p-3 text-dark bg-light'
			style={{ width: "280px" }}>
			<ul className='nav nav-pills flex-column mb-auto'>
				{navLinks.map((navLink, index) => (
					<SidebarComponent key={index} {...navLink} />
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
