import React from "react";

const Home = ({ title }) => {
	document.title = title;
	return <h1 className='m-5'>Home</h1>;
};

export default Home;
