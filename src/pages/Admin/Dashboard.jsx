import React from "react";

const Dashboard = () => {
	const currentPath = window.location.pathname;
	return (
		<div>
			<h2>{currentPath}</h2>
		</div>
	);
};

export default Dashboard;
