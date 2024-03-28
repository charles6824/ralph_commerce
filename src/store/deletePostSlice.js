import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const deletePostSlice = createSlice({
	name: "deletePost",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		deletePostRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		deletePostSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		deletePostFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetPostDelete: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	deletePostRequest,
	deletePostSuccess,
	deletePostFailure,
	resetPostDelete,
} = deletePostSlice.actions;

export const deletePost = (id) => async (dispatch, getState) => {
	try {
		dispatch(deletePostRequest());

		const {
			auth: { user },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		};

		const { data } = await axios.delete(
			`https://ralphbackend.onrender.com/api/blog/${id}`,
			config
		);

		if (data.status) {
			dispatch(deletePostSuccess(data.message));
		} else {
			dispatch(deletePostFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(deletePostFailure(message));
	}
};

export default deletePostSlice.reducer;
