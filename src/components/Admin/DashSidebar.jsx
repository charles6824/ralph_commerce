import React from "react";
import "../../styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/logo (2).png";
import { MdDashboard, MdBook } from "react-icons/md";
import { FaList, FaBloggerB } from "react-icons/fa";
import { BsSliders } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { HiOutlineViewList } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';

const DashSidebar = () => {

	const location = useLocation();
	const items = [
		{ name: "Dashboard", link: "/dashboard", icon: MdDashboard },
		{ name: "Orders", link: "/orders", icon: FaList },
		{ name: "Books", link: "/books", icon: MdBook },
		{ name: "Blog", link: "/blog", icon: FaBloggerB },
		{ name: "Hero", link: "/hero", icon: BsSliders },
		{ name: "Users", link: "/users", icon: IoPersonCircleOutline },
		{ name: "Releases", link: "/releases", icon: HiOutlineViewList },
	];

  const isActive = (link) => {
    return location.pathname === link;
  };


	return (
		<div className="sidebar">
			<div className="px-4 py-2">
				<img src={Logo} alt="" width="150px" />
			</div>
			<ul className="sidebar-ul">
				{items &&
					items.map((item, i) => (
						<li key={i} className={isActive(item.link) ? 'active' : ''}>
							<Link to={item.link}>
								<span className="icon"><item.icon /></span> {item.name}
							</Link>
						</li>
					))}
			</ul>
      <div className="sidebar-footer">
        <p><Link to=''><span><FiLogOut /></span>Logout</Link></p>
      </div>
		</div>
	);
};

export default DashSidebar;
