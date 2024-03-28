import React, { useState } from "react";
import "../../styles/sidebar.css";
import { PiUserCircleGearLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const DashHeader = () => {
	const [display, setDisplay] = useState(false);
	const { user } = useSelector((state) => state.auth);

	return (
		<div className="header">
			<div className="header-pad d-flex justify-content-end">
				<PiUserCircleGearLight
					size={32}
					className="mt-3"
					onClick={() => setDisplay(!display)}
					style={{ cursor: "pointer" }}
				/>
			</div>

			{display && (
				<div className="d-item shadow">
					<ul className="">
						<li>
							Name: {user && user.firstName} {user && user.lastName}
						</li>
						<li>Email: {user && user.email}</li>
						<li>
							Admin Type: {user.isSuperadmin ? "Super Admin" : "Sub Admin"}
						</li>
					</ul>
					<div className="text-center">
						<button className="btn btn-secondary">Logout</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashHeader;
