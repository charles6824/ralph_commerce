import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import PreLoader from "./components/Preloader";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AdminLayout from "./AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Orders from "./pages/Admin/Orders";
import Hero from "./pages/Admin/Hero";
import Books from './pages/Admin/Books'
import Blog from './pages/Admin/Blog'
import Users from './pages/Admin/Users'
import Releases from './pages/Admin/Releases'
import Login from "./pages/Admin/Login";


const App = () => {
	
	return (
		<Router>
			<main className="main-section">
				<Suspense fallback={<PreLoader />}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/admin/login" element={<Login />} />
						<Route path="*" element={<Error />} />
						<Route
							path="/admin"
							element={
								<Navigate replace to={"/admin/dashboard"} />
							}
						/>
						<Route exact path="/" element={<AdminLayout />}>
							<Route
								exact
								path="dashboard"
								element={<Dashboard />}
							/>
							<Route
								exact
								path="hero"
								element={<Hero />}
							/>
							<Route
								exact
								path="orders"
								element={<Orders />}
							/>
							<Route
								exact
								path="books"
								element={<Books />}
							/>
							<Route
								exact
								path="blog"
								element={<Blog />}
							/>
							<Route
								exact
								path="users"
								element={<Users />}
							/>
							<Route
								exact
								path="releases"
								element={<Releases />}
							/>
							
						</Route>
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
};

export default App;