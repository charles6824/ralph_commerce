import React from "react";
import backgroundImg from "../../images/book_slider.jpg";
import book from "../../images/book.png";

const Hero = () => {
	return (
		<div
			className="hero"
			style={{
				background: `url(${backgroundImg})`,
				backgroundPosition: "center",
			}}
		>
			<div className="hero-bg">
				<div className="hero-info">
					<h5>WORLD BEST SELLERS</h5>
					<h2>
						Escape Book <br /> Charles Fredrick
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nam
						modi cupiditate soluta veritatis odio culpa minus consectetur aut
						fugit.
					</p>
				</div>
				<img src={book} alt="Book" height="400px" />
			</div>
		</div>
	);
};

export default Hero;
