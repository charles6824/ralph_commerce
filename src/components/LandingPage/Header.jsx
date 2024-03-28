import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo (2).png";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {

	const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
		const list = document.getElementById("list")
		// list.setAttribute("class", "show")
		list.classList.toggle("show")
  };



	useEffect(() => {
    const handleResize = () => {
			console.log(window.innerWidth)
      if (window.innerWidth <= 576) {
        setShowNavbar(false);
			}else{
				setShowNavbar(true)
			}
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

	return (
		<header>
			<div className="bg-top-bar d-flex justify-content-between">
				<div className=""></div>
				<div className="">
					<Link to="/login" className="text-white">
						<AiOutlineUser /> Login / Register
					</Link>
				</div>
			</div>
			<nav className="navHeader shadow">
				<Link to="/" className="navbar-brand">
					<img src={Logo} alt="" width="200px" />
				</Link>
				<span className="bars d-md-none" onClick={toggleNavbar}></span>
				{/* {showNavbar && (

				)} */}
					<ul className="nav-list" id="list">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/teams" className="nav-link">
							Our Community
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-link">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/courses" className="nav-link">
								Courses
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/books" className="nav-link">
								Books
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/all-blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact Us
							</Link>
						</li>
					</ul>
				
			</nav>
		</header>
	);
};

export default Header;
