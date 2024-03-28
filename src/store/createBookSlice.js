import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createBookSlice = createSlice({
	name: "createBook",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		createBookRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		createBookSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		createBookFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetCreateBooks: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	createBookRequest,
	createBookSuccess,
	createBookFailure,
	resetCreateBooks,
} = createBookSlice.actions;

export const createBook = (formDataToSend) => async (dispatch, getState) => {
	try {
		dispatch(createBookRequest());

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
			`https://ralphbackend.onrender.com/api/book`,
			formDataToSend,
			config
		);

		if (data.status) {
			dispatch(createBookSuccess(data.message));
		} else {
			dispatch(createBookFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(createBookFailure(message));
	}
};

export default createBookSlice.reducer;
