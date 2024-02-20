import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import rootResetReducer, { RESET_STATE } from "./rootReducer";



const store = configureStore({
	reducer: rootResetReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.REACT_APP_NODE_ENV !== "production",
});

export const resetStateAction = () => ({ type: RESET_STATE });

export default store;
