import { configureStore } from "@reduxjs/toolkit";

import reducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";

const appStore = configureStore({
  reducer: { user: reducer, movies: moviesReducer },
});

export default appStore;
