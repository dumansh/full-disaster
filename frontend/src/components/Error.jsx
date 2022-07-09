import React from "react";

const Error = ({ title }) => {
	document.title = title;

	return <h1>Page Not found</h1>;
};

export default Error;
