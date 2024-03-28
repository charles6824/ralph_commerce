import React, { useEffect } from "react";
import Slider from "react-slick";
import { FaRegMessage } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fetchPosts } from "../../store/fetchPostsSlice";
import web6 from "../../images/web6.jpg";
import typewritter from "../../images/books-typewriter-img-left.png";
import quoteImg from "../../images/books-quotes-dark.svg";
import rightType1 from "../../images/books-typewriter-right-1.jpg";
import rightType2 from "../../images/books-typewriter-right-2.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 2000,
			settings: {
				slidesToShow: 3,
			},
		},
	],
};

const Latest = () => {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => state.fetchPosts);

	function convertDate(inputDate) {
		const parsedDate = new Date(inputDate);

		// Months array to map month index to month name
		const months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		];

		// Format the date in the desired format
		const formattedDate = `${
			parsedDate.getDate() > 10
				? parsedDate.getDate()
				: "0" + parsedDate.getDate()
		} ${months[parsedDate.getMonth()]}`;

		return formattedDate;
	}

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<section className="latest py-5">
			<div className="container">
				<p className="latest-title">Commodo integer</p>
				<h5 className="articles">Latest Articles</h5>
				<p className="article-text">
					There are many variations of passages of lorem ipsum available.
				</p>
				<div className="row">
					<div className="col-md-12">
						{data && data.length > 0 ? (
							<Slider {...settings}>
								{data &&
									data
										.filter((d, i) => i <= 10)
										.map((item, i) => (
											<div className="slider-item p-2" key={i}>
												<div
													className="blog-div"
													style={{
														background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url(https://ralphbackend.onrender.com/${
															(item && item.image.replace(/\\/g, "/")) || ""
														})`,
														backgroundPosition: "",
														backgroundSize: "cover",
														height: "380px",
													}}
												>
													<Link to={`/blog/${item._id}`}>
														<div className="time">
															<h4>{convertDate(item.date)}</h4>
														</div>
														<div className="blog-content">
															<span>{item.category}</span>
															<h3>{item.title}</h3>
															<p>
																posted by {item.author}{" "}
																<span className="msg">
																	<FaRegMessage /> <i>{item.comments.length}</i>
																</span>{" "}
															</p>
														</div>
													</Link>
												</div>
											</div>
										))}
								{/* 							
							<div className="slider-item p-2">
								<div
									className="blog-div"
									style={{
										background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url(${web6})`,
										backgroundPosition: "",
										backgroundSize: "cover",
										height: "380px",
									}}
								>
									<div className="time">
										<h4>08 May</h4>
									</div>
									<div className="blog-content">
										<span>Publishing tips</span>
										<h3>
											10 steps to finally finish writing your book this year
										</h3>
										<p>
											posted by Rajeshdevjee{" "}
											<span className="msg">
												<FaRegMessage /> <i>5</i>
											</span>{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="slider-item p-2">
								<div
									className="blog-div"
									style={{
										background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url(${web6})`,
										backgroundPosition: "",
										backgroundSize: "cover",
										height: "380px",
									}}
								>
									<div className="time">
										<h4>08 May</h4>
									</div>
									<div className="blog-content">
										<span>Publishing tips</span>
										<h3>
											10 steps to finally finish writing your book this year
										</h3>
										<p>
											posted by Rajeshdevjee{" "}
											<span className="msg">
												<FaRegMessage /> <i>5</i>
											</span>{" "}
										</p>
									</div>
								</div>
							</div>
							<div className="slider-item p-2">
								<div
									className="blog-div"
									style={{
										background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),url(${web6})`,
										backgroundPosition: "",
										backgroundSize: "cover",
										height: "380px",
									}}
								>
									<div className="time">
										<h4>08 May</h4>
									</div>
									<div className="blog-content">
										<span>Publishing tips</span>
										<h3>
											10 steps to finally finish writing your book this year
										</h3>
										<p>
											posted by Rajeshdevjee{" "}
											<span className="msg">
												<FaRegMessage /> <i>5</i>
											</span>{" "}
										</p>
									</div>
								</div>
							</div> */}
							</Slider>
						) : (
							<>
								<p className="text-danger py-5">No Articles yet</p>
							</>
						)}
					</div>
				</div>

				<div className="row pt-5 px-4 justify-content-center text-center">
					<div className="col-md-4">
						<div
							className="blc"
							style={{
								padding: "10px 10px",
							}}
						>
							<img
								src={typewritter}
								alt=""
								width="100%"
								style={{ height: "auto", textAlign: "center" }}
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-8">
								<div className="black-img" style={{ position: "relative" }}>
									<div className="black-img-content" style={{ zIndex: "9999" }}>
										<h5>BECOME OUR PARTNER</h5>
										<h3>
											Self-Publishing <br /> And Book Printing
										</h3>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour, or randomised words which
											don’t look even.
										</p>
										<Link to="" className="btn-view-more">
											View More
										</Link>
									</div>
									<img
										src={quoteImg}
										alt=""
										style={{
											position: "absolute",
											top: "35%",
											right: "20px",
											opacity: "0.5",
											zIndex: "1",
										}}
									/>
								</div>
							</div>
							<div className="col-md-4">
								<div
									className="sub-div"
									style={{
										background: `url(${rightType1})`,
										height: "33vh",
										marginBottom: "30px",
									}}
								></div>
								<div
									className="sub-div"
									style={{
										background: `url(${rightType2})`,
										height: "33vh",
										width: "100%",
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Latest;
