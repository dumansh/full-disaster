import React from "react";
import { NavLink } from "react-router-dom";

function SidebarComponent({ link, displayName }) {
	return (
		<li className='nav-item'>
			<NavLink
				to={link}
				className='nav-link text-dark'
				activeclassname='active'
				aria-current='page'>
				{displayName}
			</NavLink>
		</li>
	);
}

export default SidebarComponent;
