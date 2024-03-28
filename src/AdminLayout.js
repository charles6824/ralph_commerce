import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import DashSidebar from "./components/Admin/DashSidebar";
import DashHeader from "./components/Admin/DashHeader";
import resetStateAction from "./store/store";

const AdminLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	// function isCurrentDateGreaterThanEventDate(eventDate) {
	// 	const currentDate = new Date();
	// 	const parsedEventDate = new Date(eventDate);
	// 	return currentDate >= parsedEventDate;
	// }

	// useEffect(() => {
	// 	setInterval(() => {
	// 		const currentDate = new Date();
	// 		const parsedEventDate = new Date(user?.expiresIn);
	// 		if (currentDate >= parsedEventDate) {
	// 			console.log("Current date is now greater than event date");
	// 			localStorage.removeItem("adminInfo");
	// 			setTimeout(() => {
	// 				navigate("/admin/login");
	// 				dispatch(resetStateAction());
	// 			}, 1000)
	// 		} else {
	// 			console.log(`Current date is not greater than event date`);
	// 		}
	// 	}, 3000);
	// }, [dispatch, navigate, user?.expiresIn]);

	return (
		<div className="admin-layout">
			{user && user ? (
				<>
					<div className="sidebar">
						<DashSidebar />
					</div>
					<div className="main-content">
						<div className="header">
							<DashHeader />
						</div>
						<div className="outlet">
							<div className="container">
								<Outlet />
							</div>
						</div>
					</div>
				</>
			) : (
				<Navigate to="/admin/login" />
			)}
		</div>
	);
};

export default AdminLayout;
