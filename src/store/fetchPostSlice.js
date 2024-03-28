import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPostSlice = createSlice({
	name: "fetchPost",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		fetchPostRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		fetchPostSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		fetchPostFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetPost: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	fetchPostRequest,
	fetchPostSuccess,
	fetchPostFailure,
	resetPost,
} = fetchPostSlice.actions;

export const fetchPost = (id) => async (dispatch) => {
	try {
		dispatch(fetchPostRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`https://ralphbackend.onrender.com/api/blog/${id}`,
			config
		);

		if (data.status) {
			dispatch(fetchPostSuccess(data.data));
		} else {
			dispatch(fetchPostFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(fetchPostFailure(message));
	}
};

export default fetchPostSlice.reducer;
