import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/createBlogSlice";
import { toast, ToastContainer } from "react-toastify";
import { FaPlus, FaTimes } from "react-icons/fa";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/blog.css";
import Loader from "../../components/Loader";
import { fetchPosts } from "../../store/fetchPostsSlice";
import { deletePost } from "../../store/deletePostSlice";

const Blog = () => {
	const currentPath = window.location.pathname;
	const dispatch = useDispatch();
	const {
		loading: cLoading,
		error: cError,
		data: cData,
	} = useSelector((state) => state.createPost);
	const {
		loading: fLoading,
		error: fError,
		data: fData,
	} = useSelector((state) => state.fetchPosts);
	const {
		loading: dLoading,
		error: dError,
		data: dData,
	} = useSelector((state) => state.deletePost);
	const [show, setShow] = useState(false);

	const [formData, setFormData] = useState({
		category: "",
		image: null,
		title: "",
		message: EditorState.createEmpty(),
	});

	const handleChange = (e) => {
		if (e.target.type === "file") {
			setFormData((prevFormData) => ({
				...prevFormData,
				[e.target.name]: e.target.files[0],
			}));
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				[e.target.name]: e.target.value,
			}));
		}
	};

	const onEditorStateChange = (editorState) => {
		setFormData((prevFormData) => ({ ...prevFormData, message: editorState }));
	};

  const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};
	const HandleDeleteModal = () => {
		setShowModal(true);
	};

	const handleClose = () => setShow(false);
	const HandleModal = () => {
		setShow(true);
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		const rawContentState = convertToRaw(formData.message.getCurrentContent());
		const markup = draftToHtml(rawContentState);

		const formDataToSend = new FormData();
		formDataToSend.append("category", formData.category);
		formDataToSend.append("title", formData.title);
		formDataToSend.append("message", markup);
		formDataToSend.append("image", formData.image); // Ensure formData.image is appended

		dispatch(createPost(formDataToSend));
	};

  const HandleDelete = (id) => {
    dispatch(deletePost(id))
  }

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

  useEffect(()=>{
    if(dData){
      toast.success(dData)
    }

    if(dError){
      toast.error(dError)
    }
  }, [dData, dError])
	return (
		<>
			<ToastContainer />
			<div className="container">
				{cError && toast.error(cError)}
				{cData && toast.success(cData)}
				<span className="breadcrumb pt-3 pb-2 text-uppercase px-4">
					Admin{currentPath}
				</span>
				<div className="row">
					<div className="col-md-12">
						<div className="d-flex justify-content-between px-4">
							<div className="search">
								<input type="search" className="form-control" />
							</div>
							<div className="button">
								<button className="btn btn-main" onClick={HandleModal}>
									<FaPlus /> Create Post
								</button>
							</div>
						</div>
						<table className="table-responsive my-4">
							<thead>
								<tr>
									<th>S/N</th>
									<th>Topic</th>
									<th>Creator</th>
									<th>Category</th>
									<th>Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{fData &&
									fData.map((item, i) => (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{item.title}</td>
											<td>{item.author}</td>
											<td>{item.category}</td>
											<td>{item.date}</td>
											<td>
                        <Link to={`/blog/${item._id}`}>
												<span id="complete">View</span>{" "}
                        </Link>
												<span id="reject" onClick={HandleDeleteModal}>Delete</span>
											</td>
                      <Modal show={showModal} onHide={closeModal}>
									<Modal.Body>
										<div className="d-flex justify-content-between px-4">
											<p></p>
											<p>
												<FaTimes
													style={{ cursor: "pointer" }}
													className="text-danger"
													onClick={closeModal}
												/>
											</p>
										</div>
										<div className="row py-4 justify-content-center">
											<div className="col-md-10 text-center">
												<p>Confirm Request</p>
												<h6>Are you sure you want to confirm the request?</h6>
												<div className="d-flex justify-content-between pt-4">
													<button
														className="btn btn-primary px-5"
														onClick={closeModal}
													>
														No, Cancel
													</button>
													{dLoading ? <Loader /> : <button className="btn btn-danger" onClick={() => HandleDelete(item._id)}>Delete</button>}
												</div>
											</div>
										</div>
									</Modal.Body>
								</Modal>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<h4 className="text-info">Create Post</h4>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={HandleSubmit} className="form-controls">
							<div>
								<label htmlFor="">Title</label>
								<input
									type="text"
									className="form-control"
									name="title"
									value={formData.title}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label htmlFor="">Message</label>
								{/* <textarea cols="30" rows="10" className="form-control" name="message" value={formData.message} onChange={handleChange}></textarea> */}
								<div
									style={{
										border: "1px solid #ccc",
										borderRadius: "5px",
										padding: "10px",
									}}
								>
									<Editor
										editorState={formData.message}
										onEditorStateChange={onEditorStateChange}
									/>
								</div>
							</div>
							<div>
								<label htmlFor="">Category</label>
								<input
									type="text"
									className="form-control"
									name="category"
									value={formData.category}
									onChange={handleChange}
								/>
							</div>
							<div className="py-3">
								<label htmlFor="">Image</label>
								<input
									type="file"
									className="form-control"
									name="image"
									onChange={handleChange}
								/>
							</div>
							{cLoading ? (
								<Loader />
							) : (
								<button type="submit" className="btn btn-info">
									Submit
								</button>
							)}
						</form>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default Blog;
