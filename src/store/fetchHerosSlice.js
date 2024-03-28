import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchHerosSlice = createSlice({
	name: "fetchHeros",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		fetchHerosRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		fetchHerosSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		fetchHerosFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetHeros: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	fetchHerosRequest,
	fetchHerosSuccess,
	fetchHerosFailure,
	resetHeros,
} = fetchHerosSlice.actions;

export const fetchHeros = () => async (dispatch) => {
	try {
		dispatch(fetchHerosRequest());

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const { data } = await axios.get(
			`https://ralphbackend.onrender.com/api/hero`,
			config
		);

		if (data.status) {
			dispatch(fetchHerosSuccess(data.data));
		} else {
			dispatch(fetchHerosFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(fetchHerosFailure(message));
	}
};

export default fetchHerosSlice.reducer;
