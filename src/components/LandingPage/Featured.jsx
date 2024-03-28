import React, { useEffect, useState } from "react";
import richdad from "../../images/richdad.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { fetchBooks } from "../../store/fetchBooksSlice";

const Featured = () => {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => state.fetchBooks);
	const [tab, setTab] = useState("A");

	const filteredBiography =
		data && data.filter((book, i) => i <= 12 && book.category === "biography");
	const filteredFantasy =
		data && data.filter((book, i) => i <= 12 && book.category === "fantasy");
	const filteredHistory =
		data && data.filter((book, i) => i <= 12 && book.category === "history");

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);
	return (
		<section className="featured">
			<div className="container">
				<p className="featured-title">Mauris blandit aliquet</p>
				<h5 className="releases">Featured Releases</h5>
				<p className="featured-text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis qui
					veniam vero!
				</p>
						<div className="menu">
							<p
								className={tab === "A" ? "active normal" : "normal"}
								onClick={() => setTab("A")}
							>
								BIOGRAPHY
							</p>
							<p
								className={tab === "B" ? "active normal" : "normal"}
								onClick={() => setTab("B")}
							>
								FANTASY
							</p>
							<p
								className={tab === "C" ? "active normal" : "normal"}
								onClick={() => setTab("C")}
							>
								HISTORY
							</p>
						</div>
						{tab === "A" ? (
							<div className="row justify-content-center">
								{loading && <Loader />}
								{filteredBiography && filteredBiography.length > 0 ? (
									<>
										{filteredBiography.map((d, i) => (
											<div className="col-md-3 col-sm-6" key={i}>
												<div className="product-grid">
													<div className="product-image">
														<Link href="#" className="image">
															<img
																className="pic-1"
																src={`https://ralphbackend.onrender.com/${d.image}`}
																alt=""
															/>
														</Link>
													</div>
												</div>
												<p className="book-title">{d.name}</p>
												<p className="book-category">{d.category}</p>
												<div className="price"> ${d.price}</div>
											</div>
										))}
									</>
								) : (
									<>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
									</>
								)}

								{/* {data && data.filter((d, i) => i <= 12 && d.category === "biography").map((d, i) => (
                <div className="col-md-3 col-sm-6" key={i}>
								<div className="product-grid">
									<div className="product-image">
										<Link href="#" className="image">
											<img className="pic-1" src={`https://ralphbackend.onrender.com/${d.image}`} alt="" />
										</Link>
									</div>
								</div>
								<p className="book-title">
									{d.name}
								</p>
								<p className="book-category">{d.category}</p>
								<div className="price"> ${d.price}</div>
							</div>
              ))} */}
							</div>
						) : tab === "B" ? (
							<div className="row justify-content-center">
								{filteredFantasy && filteredFantasy.length > 0 ? (
									<>
										{filteredFantasy.map((d, i) => (
											<div className="col-md-3 col-sm-6" key={i}>
												<div className="product-grid">
													<div className="product-image">
														<Link href="#" className="image">
															<img
																className="pic-1"
																src={`https://ralphbackend.onrender.com/${d.image}`}
																alt=""
															/>
														</Link>
													</div>
												</div>
												<p className="book-title">{d.name}</p>
												<p className="book-category">{d.category}</p>
												<div className="price"> ${d.price}</div>
											</div>
										))}
									</>
								) : (
									<>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
									</>
								)}
							</div>
						) : (
							<div className="row justify-content-center">
								{filteredHistory && filteredHistory.length > 0 ? (
									<>
										{filteredHistory.map((d, i) => (
											<div className="col-md-3 col-sm-6" key={i}>
												<div className="product-grid">
													<div className="product-image">
														<Link href="#" className="image">
															<img
																className="pic-1"
																src={`https://ralphbackend.onrender.com/${d.image}`}
																alt=""
															/>
														</Link>
													</div>
												</div>
												<p className="book-title">{d.name}</p>
												<p className="book-category">{d.category}</p>
												<div className="price"> ${d.price}</div>
											</div>
										))}
									</>
								) : (
									<>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
										<div className="col-md-3 col-sm-6">
											<div className="product-grid">
												<div className="product-image">
													<Link href="#" className="image">
														<img className="pic-1" src={richdad} alt="" />
													</Link>
												</div>
											</div>
											<p className="book-title">
												Rich Dad Poor Dad by Robert Klemmer
											</p>
											<p className="book-category">Finance</p>
											<div className="price"> $59.99</div>
										</div>
									</>
								)}
							</div>
						)}
				
			</div>
		</section>
	);
};

export default Featured;
