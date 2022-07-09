import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Sidebar from "./components/Sidebar";
import SupplyList from "./components/SupplyList";

export default function App() {
	return (
		<div className='d-flex'>
			<BrowserRouter>
				<Sidebar />
				<main>
					<Routes>
						<Route path='/' element={<Home title='Home' />} title='hello' />
						<Route path='/about' element={<About title='About' />} />
						<Route path='/supply' element={<SupplyList title='Supply' />} />
						<Route path='*' element={<Error title='404 Not Found' />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}
