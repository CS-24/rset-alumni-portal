import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/posts").then((response) => {
			setPostList(response.data);
		});
	}, []);

	return (
		<div className="App">
			{postList.map((value, key) => {
				return (
					<div classname="post">
						<div className="=title">{value.title} </div>
            <div className="=body">{value.postText} </div>
            <div className="=footer">{value.username} </div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
