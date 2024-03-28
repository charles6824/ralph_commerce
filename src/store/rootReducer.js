import { combineReducers } from "@reduxjs/toolkit";
import createPostReducer from "./createBlogSlice";
import authReducer from "./authSlice";
import fetchPostsReducer from "./fetchPostsSlice";
import fetchPostReducer from "./fetchPostSlice";
import deletePostReducer from "./deletePostSlice";
import createCommentReducer from "./createCommentSlice";
import createBookReducer from "./createBookSlice";
import fetchBooksReducer from "./fetchBooksSlice";
import createHeroReducer from "./createHeroSlice";
import fetchHerosReducer from "./fetchHerosSlice";


const rootReducer = combineReducers({
	createPost: createPostReducer,
	auth: authReducer,
	fetchPosts: fetchPostsReducer,
	fetchPost: fetchPostReducer,
	deletePost: deletePostReducer,
	createComment: createCommentReducer,
	createBook: createBookReducer,
	fetchBooks: fetchBooksReducer,
	createHero: createHeroReducer,
	fetchHeros: fetchHerosReducer,
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
