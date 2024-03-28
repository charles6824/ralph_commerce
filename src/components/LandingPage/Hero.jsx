import React, { useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImg from "../../images/book_slider.jpg";
import book from "../../images/book.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeros } from "../../store/fetchHerosSlice";
import Preloader from "../Preloader";

const Hero = () => {
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => state.fetchHeros);

	useEffect(() => {
		dispatch(fetchHeros());
	}, [dispatch]);
	return (
		<div
			className="hero"
			style={{
				background: `url(${backgroundImg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			{loading && <Preloader />}
			{data &&
				data.map((d, i) => (
					<motion.div
						className="hero-bg d-none d-md-block"
						initial={{ x: "100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 120, duration: 1 }}
						key={i}
					>
						<div className="hero-info">
							<h5>WORLD BEST SELLERS</h5>
							<h2>{d.title}</h2>
							<p>{d.content}</p>
							<div className="buttons">
								<button className="hero-btn">ADD TO CART</button>
								<button className="hero-btn more">VIEW MORE</button>
							</div>
						</div>
						<img
							src={`https://ralphbackend.onrender.com/${d.image}`}
							alt="Book"
							height="250px"
						/>
					</motion.div>
				))}

			<div className="hero-mobile-bg d-block d-md-none">
				<div className="row justify-content-center">
					<div className="col-md-12 text-right p-4">
						<img src={book} alt="Book" width="100%" />
					</div>
					<div className="col-12 text-center">
						<div className="hero-mobile-info">
							<h5>WORLD BEST SELLERS</h5>
							<h2>Escape Book Charles Fredrick</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
								nam modi cupiditate soluta veritatis odio culpa minus
								consectetur aut fugit.
							</p>
							<div className="buttons">
								<button className="hero-btn">ADD TO CART</button>
								<button className="hero-btn more">VIEW MORE</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
