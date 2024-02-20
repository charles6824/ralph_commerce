import { combineReducers } from "@reduxjs/toolkit";
import fetchProductReducer from "./fetchProductSlice";
import fetchMenuReducer from "./fetchMenuSlice";


const rootReducer = combineReducers({
	fetchProduct: fetchProductReducer,
	fetchMenu: fetchMenuReducer
});

// Create a reset action type
export const RESET_STATE = "RESET_STATE";

// Create a root reducer that listens for the reset action type
const rootResetReducer = (state, action) => {
	if (action.type === RESET_STATE) {
		return rootReducer(undefined, action);
	}
	return rootReducer(state, action);
};

export default rootResetReducer;
