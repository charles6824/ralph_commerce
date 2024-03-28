import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createHeroSlice = createSlice({
	name: "createHero",
	initialState: {
		loading: false,
		data: null,
		error: null,
	},
	reducers: {
		createHeroRequest: (state) => {
			state.loading = true;
			state.data = null;
			state.error = null;
		},
		createHeroSuccess: (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.error = null;
		},
		createHeroFailure: (state, action) => {
			state.loading = false;
			state.data = null;
			state.error = action.payload;
		},
		resetcreateHeros: (state) => {
			state.loading = false;
			state.data = null;
			state.error = null;
		},
	},
});

export const {
	createHeroRequest,
	createHeroSuccess,
	createHeroFailure,
	resetcreateHeros,
} = createHeroSlice.actions;

export const createHero = (formDataToSend) => async (dispatch, getState) => {
	try {
		dispatch(createHeroRequest());

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
			`https://ralphbackend.onrender.com/api/hero`,
			formDataToSend,
			config
		);

		if (data.status) {
			dispatch(createHeroSuccess(data.message));
		} else {
			dispatch(createHeroFailure(data.message));
		}
	} catch (err) {
		const message =
			err.response && err.response.data.message
				? err.response.data.message
				: err.message;
		dispatch(createHeroFailure(message));
	}
};

export default createHeroSlice.reducer;
