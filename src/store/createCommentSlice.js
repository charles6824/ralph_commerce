import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createCommentSlice = createSlice({
	name: "createComment",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		createCommentRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		createCommentSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		createCommentFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetComment: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	createCommentRequest,
	createCommentSuccess,
	createCommentFailure,
	resetComment,
} = createCommentSlice.actions;

export const createComment = (id, formData) => async (dispatch) => {
	try {
		dispatch(createCommentRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.post(
			`https://ralphbackend.onrender.com/api/blog/${id}/comment`,
			{ formData },
			config
		);

		if (data.status) {
			dispatch(createCommentSuccess(data.message));
		} else {
			dispatch(createCommentFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(createCommentFailure(message));
	}
};

export default createCommentSlice.reducer;
