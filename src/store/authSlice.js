// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userFromStorage = JSON.parse(localStorage.getItem("adminInfo"))
	? JSON.parse(localStorage.getItem("adminInfo"))
	: null;

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		user: userFromStorage,
		token: null,
		loading: false,
		error: null,
	},
	reducers: {
		// login: (state, action) => {
		//   state.isAuthenticated = true;
		//   state.user = action.payload;
		// },
		// logout: (state) => {
		//   state.isAuthenticated = false;
		//   state.user = null;
		// },
		loginRequest: (state) => {
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
			state.loading = true;
			state.error = null;
		},
		setToken: (state, action) => {
			state.isAuthenticated = true;
			// state.token = action.payload.token;
			state.user = action.payload;
			state.loading = false;
			state.error = null;
		},
		setError: (state, action) => {
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
			state.loading = false;
			state.error = null;
		},
		reset: (state) => {
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { loginRequest, setToken, setError, logout, reset } =
	authSlice.actions;

export const updateToken = (token) => (dispatch) => {
	dispatch(setToken(token));
};

export const login = (formData) => async (dispatch) => {
	try {
		dispatch(loginRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			"https://ralphbackend.onrender.com/api/10181/admin/auth",
			{ formData: formData },
			config
		);
		////////console.log(data)
		if (data.status) {
			localStorage.setItem("adminInfo", JSON.stringify(data.data));
			dispatch(setToken(data.data));
		} else {
			dispatch(setError(data.message));
		}
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		dispatch(setError(message));
	}
};

export default authSlice.reducer;
