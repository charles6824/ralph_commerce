import React, { useEffect, useState } from "react";
import Header from "../components/LandingPage/Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/fetchPostSlice";
import { useParams } from "react-router-dom";
import { createComment, resetComment } from "../store/createCommentSlice";
import { FaUserCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../components/LandingPage/Footer";
import Loader from "../components/Loader";
import Preloader from "../components/Preloader";

const SingleBlog = () => {
	const dispatch = useDispatch();
	const params = useParams();

	const {
		loading: l,
		data: d,
		error: e,
	} = useSelector((state) => state.fetchPost);
	const {
		loading: lc,
		data: dc,
		error: ec,
	} = useSelector((state) => state.createComment);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	const HandleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			comment: comment,
			name: name,
			email: email,
		};
		console.log("FormData: ", formData);
		dispatch(createComment(params.id, formData));
	};

	useEffect(() => {
		dispatch(fetchPost(params.id));
	}, [dispatch, params.id]);

	useEffect(() => {
		if (dc) {
			toast.success(dc);
			setName("");
			setEmail("");
			setComment("");
			setTimeout(() => {
				dispatch(fetchPost(params.id));
				dispatch(resetComment());
			}, 2000);
		}

		if (ec) {
			toast.error(ec);
		}
	}, [dc, dispatch, ec, params.id]);

	return (
		<>
			{l && <Preloader />}
			<ToastContainer />
			<Header />
			<div className="sub-hero py-5 text-center">
				<div className="container">
					<h2 className="sub-hero-title">BLOG</h2>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-8 p-3">
						<span className="cat text-uppercase">{d && d.category}</span>
						<h4 className="text-uppercase">{d && d.title}</h4>
						<p>Posted by {d && d.author}</p>
						<div
							className=""
							style={{
								backgroundImage: `url(https://ralphbackend.onrender.com/${
									(d && d.image.replace(/\\/g, "/")) || ""
								})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								height: "60vh",
								width: "100%",
							}}
						></div>
						<div className="py-3">
							<div dangerouslySetInnerHTML={{ __html: d && d.message }} />
						</div>
						<hr className="line" />
						<div className="reply-form">
							<h5>Leave a Comment</h5>
							<div className="row">
								<div className="col-md-6 bordered">
									<label htmlFor="">Name</label>
									<input
										type="text"
										placeholder="Enter your Name"
										className="form-control mb-2"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="col-md-6 bordered">
									<label htmlFor="">Email</label>
									<input
										type="email"
										className="form-control mb-2"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="col-md-12 bordered">
									<label htmlFor=""></label>
									<textarea
										className="form-control mb-2"
										cols="30"
										rows="10"
										value={comment}
										onChange={(e) => setComment(e.target.value)}
									></textarea>
								</div>

								<div className="bordered col-md-12 my-2">
									{lc ? (
										<Loader />
									) : (
										<button
											className="btn btn-primary px-4"
											onClick={HandleSubmit}
										>
											Post Comment
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 pt-5 fixed-scroll">
						<h5 className="pt-5">Comments</h5>
						{d && d.comments.length > 0 ? (
							d.comments.map((c, i) => (
								<div className="card p-3 my-1" key={i}>
									<div className="d-flex gap-2">
										<FaUserCircle className="mt-1" />
										<span className="text-capitalize">
											{c.name}{" "}
											<small className="text-lowercase">({c.email})</small>
										</span>
									</div>
									<hr className="line" />
									<div className="comment-content">
										<p>{c.comment}</p>
									</div>
								</div>
							))
						) : (
							<div className="shadow py-2 px-3 my-2 comment-shadow scrollable,">
								<p>No comments yet</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SingleBlog;
