import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Createpost from "./pages/Createpost";

function App() {
	return (
		<div className="App">
			<Router>
				<Link to="/createpost"> Create a post</Link>
				<Link to="/">Homepage</Link>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/createpost' element={<Createpost/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
