import React from "react";
import "../../styles/dashboard.css";

const Dashboard = () => {
	const currentPath = window.location.pathname;
	return (
		<>
			<div className="container py-3">
				<span className="breadcrumb pt-3 pb-2">Admin{currentPath}</span>
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 my-2">
								<div className="main-dash-bg shadow p-3"></div>
							</div>
							<div className="col-md-6 my-2">
								<div className="row">
									<div className="col-md-6 my-2">
										<div className="red-dash-bg shadow p-3"></div>
									</div>
									<div className="col-md-6 my-2">
										<div className="yellow-dash-bg shadow p-3"></div>
									</div>
									<div className="col-md-12 my-2">
										<div className="blue-dash-bg shadow p-3"></div>
									</div>
								</div>
							</div>
							<div className="col-md-12 my-2">
								<div className="white-dash-bg shadow p-3"></div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
