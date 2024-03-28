import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../../images/logo (2).png";
import backgroundImg from "../../images/book_slider.jpg";

import Loader from "../../components/Loader";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, error, user } = useSelector((state) => state.auth);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const HandleDashBoard = (e) => {
		e.preventDefault();
		const formData = {
			email: email,
			password: password,
		};
		dispatch(login(formData));
	};

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
		if (error) {
			toast.error(error);
		}
	}, [error, navigate, user]);
	return (
		<div
			style={{
				background: `linear-gradient(40deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${backgroundImg})`,
				maxHeight: "100vh",
				height: "100vh",
				overflow: "none",
			}}
		>
			<ToastContainer />
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-md-5">
						<div
							className="card shadow px-4 py-4"
							style={{
								height: "70vh",
								transform: "translateY(10%)",
								borderRadius: "20px",
							}}
						>
							<div className="text-center">
								<img src={Logo} alt="" width="150px" />
							</div>
							<h4 className="pt-4 pb-3">Sign In</h4>
							<div
								className="card text-white p-2"
								style={{ background: "#ffd3b4" }}
							>
								<small>Do not give out your password to anyone</small>
							</div>
							<form className="form-controls pt-3">
								<div className="py-2">
									<label htmlFor="">Email</label>
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="form-control"
									/>
								</div>
								<div className="pt-2 pb-3">
									<label htmlFor="">Password</label>
									<input
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										className="form-control"
									/>
								</div>
								{loading ? (
									<Loader />
								) : (
									<button
										onClick={HandleDashBoard}
										className="btn form-control btn-dark text-uppercase py-2"
									>
										Login
									</button>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
