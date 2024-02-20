import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo (2).png";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
	return (
		<header>
			<nav className="navHeader shadow">
				<div className="row">
					<div className="col-5">
						<ul className="first-ul">
							<li className="">
								<Link to="/">Home</Link>
							</li>
							<li className="">
								<Link to="/">Publish with us</Link>
							</li>
							<li className="">
								<Link to="/">Shop</Link>
							</li>
							<li className="">
								<Link to="/">Services</Link>
							</li>
							<li className="">
								<Link to="/">Blog</Link>
							</li>
						</ul>
					</div>
					<div className="col-2">
						<img src={Logo} alt="" width="200px" />
					</div>
					<div className="col-5">
						<ul className="second-ul mx-3">
							<li className="">
								<Link className="" to="">
									FAQs
								</Link>
							</li>
							<li className="">
								<Link className="" to="">
									CONTACT US
								</Link>
							</li>
							<li className="">
								<Link to="text-dark">
									<AiOutlineUser />
								</Link>
							</li>
							<li className="">
								<Link to="">
									<AiOutlineUser />
								</Link>
							</li>
							<li className="">
								<Link to="">
									<AiOutlineUser />
								</Link>
							</li>
							<li className="">
								<Link to="">
									<AiOutlineUser />
								</Link>
							</li>
							<li className="">
								<span>0/$0.00</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
