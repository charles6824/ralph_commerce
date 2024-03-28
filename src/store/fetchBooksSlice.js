import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBooksSlice = createSlice({
	name: "fetchBooks",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		fetchBooksRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		fetchBooksSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		fetchBooksFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetBooks: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	fetchBooksRequest,
	fetchBooksSuccess,
	fetchBooksFailure,
	resetBooks,
} = fetchBooksSlice.actions;

export const fetchBooks = () => async (dispatch) => {
	try {
		dispatch(fetchBooksRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`https://ralphbackend.onrender.com/api/book`,
			config
		);

		if (data.status) {
			dispatch(fetchBooksSuccess(data.data));
		} else {
			dispatch(fetchBooksFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(fetchBooksFailure(message));
	}
};

export default fetchBooksSlice.reducer;
