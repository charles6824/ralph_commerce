import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createPostSlice = createSlice({
	name: "createPost",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		createPostRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		createPostSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		createPostFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetCreatePost: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	createPostRequest,
	createPostSuccess,
	createPostFailure,
	resetCreatePost,
} = createPostSlice.actions;

export const createPost = (formDataToSend) => async (dispatch, getState) => {
	try {
		dispatch(createPostRequest());

		const {
			auth: { user },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${user.token}`,
			},
		};

		const { data } = await axios.post(
			`https://ralphbackend.onrender.com/api/blog`,
			formDataToSend,
			config
		);

		if (data.status) {
			dispatch(createPostSuccess(data.message));
		} else {
			dispatch(createPostFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(createPostFailure(message));
	}
};

export default createPostSlice.reducer;
