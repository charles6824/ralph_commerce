import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/blog.css";
import { fetchBooks } from "../../store/fetchBooksSlice";
import Loader from "../../components/Loader";
import Preloader from "../../components/Preloader";
import { FaPlus, FaTimes } from "react-icons/fa";
import { createHero } from "../../store/createHeroSlice";
import { toast, ToastContainer } from "react-toastify";
import { fetchHeros } from "../../store/fetchHerosSlice";

const Hero = () => {
	const currentPath = window.location.pathname;
	const dispatch = useDispatch();

	const {
		loading: fLoading,
		data: fData,
		error: fError,
	} = useSelector((state) => state.fetchHeros);
	const {
		loading: cLoading,
		data: cData,
		error: cError,
	} = useSelector((state) => state.createHero);

	const [formData, setFormData] = useState({
		title: "",
		image: null,
		content: "",
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
	const [show, setShow] = useState(false);
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

		const formDataToSend = new FormData();
		formDataToSend.append("title", formData.title);
		formDataToSend.append("content", formData.content);
		formDataToSend.append("image", formData.image);

		dispatch(createHero(formDataToSend));
	};

	useEffect(() => {
		dispatch(fetchHeros());
	}, [dispatch]);

	useEffect(() => {
		if (cData) {
			toast.success(cData);
			setShowModal(false);
			setShow(false);
      setTimeout(() => {
        dispatch(fetchHeros())
      }, 2000)
		}
		if (cError) {
			toast.error(cError);
		}
	}, [cData, cError, dispatch]);

	return (
		<div className="container">
			{fLoading && <Preloader />}
			<ToastContainer />
			<span className="breadcrumb pt-3 pb-2 text-uppercase">
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
								<FaPlus /> Create Hero
							</button>
						</div>
					</div>
					<div className="search">
						<table className="table-responsive my-4">
							<thead>
								<tr>
									<th>S/N</th>
									<th>Title</th>
									<th>Content</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{fData &&
									fData.map((item, i) => (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>{item.title}</td>
											<td>{item.content}</td>
											<td>
												<span id="pending">Edit</span>
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
															<h6>
																Are you sure you want to confirm the request?
															</h6>
															<div className="d-flex justify-content-between pt-4">
																<button
																	className="btn btn-primary px-5"
																	onClick={closeModal}
																>
																	No, Cancel
																</button>
																{/* {dLoading ? <Loader /> : <button className="btn btn-danger" onClick={() => HandleDelete(item._id)}>Delete</button>} */}
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
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h4 className="text-info">Create Hero</h4>
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
							<label htmlFor="">Content</label>
							<input
								type="text"
								className="form-control"
								name="content"
								value={formData.content}
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
	);
};

export default Hero;
