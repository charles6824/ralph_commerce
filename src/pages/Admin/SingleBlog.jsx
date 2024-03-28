import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { fetchPost } from "../../store/fetchPostSlice";

const SingleBlog = () => {
	const currentPath = window.location.pathname;
	const params = useParams();
	const dispatch = useDispatch();

	const { loading, data, error } = useSelector((state) => state.fetchPost);

	const [formData, setFormData] = useState({
		category: "",
		title: "",
		message: EditorState.createEmpty(),
	});

	const handleChange = (e) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}));
	};

	const onEditorStateChange = (editorState) => {
		setFormData((prevFormData) => ({ ...prevFormData, message: editorState }));
	};

	useEffect(() => {
		dispatch(fetchPost(params.postID));
	}, [dispatch, params.postID]);

	return (
		<div className="container">
			<span className="breadcrumb pt-3 pb-2 text-uppercase px-4">
				Admin{currentPath}
			</span>


			<div className="row px-4">
				<div className="col-md-6 my-2">
					<label htmlFor="">Title</label>
					<input
						type="text"
						className="form-control"
						value={data && data.title}
						onChange={handleChange}
					/>
				</div>
				<div className="col-md-6 my-2">
					<label htmlFor="">Category</label>
					<select
						className="form-control "
						value={data && data.category}
						onChange={handleChange}
					>
						<option value="" disabled>
							Select a category
						</option>
						<option value="">fjjjjg</option>
						<option value="">kkfddrt</option>
					</select>
				</div>
				<div className="col-md-12 mt-2 mb-3">
					<label htmlFor="">Message</label>
					<div
						style={{
							border: "1px solid #ccc",
							borderRadius: "5px",
							padding: "10px",
							height: "50vh",
						}}
					>
						<Editor
							editorState={formData.message}
							onEditorStateChange={onEditorStateChange}
							placeholder="Enter your text here...."
						/>
					</div>
				</div>
				<div className="col-4">
					<button className="btn btn-info form-control">Edit</button>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
