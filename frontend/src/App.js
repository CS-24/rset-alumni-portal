import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Createpost from "./pages/Createpost";
import Post from "./pages/Post";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="navbar">
					<Link to="/">Homepage</Link>
					<Link to="/createpost"> Create a post</Link>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/createpost" element={<Createpost />} />
					<Route path="/post/:id" element={<Post />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
