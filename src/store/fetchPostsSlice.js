import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPostsSlice = createSlice({
	name: "fetchPosts",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		fetchPostsRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		fetchPostsSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		fetchPostsFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetPosts: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	fetchPostsRequest,
	fetchPostsSuccess,
	fetchPostsFailure,
	resetPosts,
} = fetchPostsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
	try {
		dispatch(fetchPostsRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`https://ralphbackend.onrender.com/api/blog`,
			config
		);

		if (data.status) {
			dispatch(fetchPostsSuccess(data.data));
		} else {
			dispatch(fetchPostsFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(fetchPostsFailure(message));
	}
};

export default fetchPostsSlice.reducer;
