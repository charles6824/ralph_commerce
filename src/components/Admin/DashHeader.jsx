import React, { useState } from "react";
import "../../styles/sidebar.css";
import { PiUserCircleGearLight } from "react-icons/pi";

const DashHeader = () => {
	const [display, setDisplay] = useState(false);
	return (
		<div className="header">
			<div
				className="header-pad d-flex justify-content-end"
				
			>
				<PiUserCircleGearLight size={32} className="mt-3" onClick={() => setDisplay(!display)}
				style={{ cursor: "pointer" }} />
			</div>

			{display && (
				<div className="d-item shadow">
					<ul className="">
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
						<li>1</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default DashHeader;
