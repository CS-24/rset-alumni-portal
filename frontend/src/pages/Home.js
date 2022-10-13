import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [postList, setPostList] = useState([]);
	let navigate = useNavigate();

	useEffect(() => {
		axios.get("http://localhost:3001/posts").then((response) => {
			setPostList(response.data);
		});
	}, []);

	return (
		<div>
			{postList.map((value, key) => {
				return (
					<div
						className="post"
						onClick={() => {
							navigate(`/post/${value.id}`);
						}}
					>
						<div className="title"> {value.title} </div>
						<div className="body">{value.postText}</div>
						<div className="footer">{value.username}</div>
					</div>
				);
			})}
		</div>
	);
}

export default Home;
