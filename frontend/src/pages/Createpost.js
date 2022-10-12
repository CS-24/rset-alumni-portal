import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Createpost() {
	const initialValues = {
		title: "",
		postText: "",
		username: "",
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required("You must input a Title!"),
		postText: Yup.string().required(),
		username: Yup.string()
			.min(3)
			.max(15)
			.required(),
	});

	const onSubmit = (data) => {
		axios.post("http://localhost:3001/posts", data).then((response) => {
			console.log("Post creation worked");
		});
		console.log(data);
	};

	return (
		<div className="createPostPage">
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<Form className="formContainer">
					<label>Title: </label>
					<ErrorMessage name="title" component="span" />
					<Field
						id="inputCreatePost"
						name="title"
						placeholder="(Ex. Title...)"
					/>
					<label>Post: </label>
					<ErrorMessage name="postText" component="span" />
					<Field
						id="inputCreatePost"
						name="postText"
						placeholder="(Ex. body...)"
					/>
					<label>Username: </label>
					<ErrorMessage name="username" component="span" />
					<Field
						id="inputCreatePost"
						name="username"
						placeholder="(Ex. John...)"
					/>

					<button type="submit">Create post</button>
				</Form>
			</Formik>
		</div>
	);
}

export default Createpost;
