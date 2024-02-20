import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashSidebar from "./components/Admin/DashSidebar";
import DashHeader from "./components/Admin/DashHeader";

const AdminLayout = () => {
	const adminInfo = {};

	return (
		<div className="admin-layout">
      {adminInfo ? (
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
                     <Outlet  />
                </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
	);
};

export default AdminLayout;
