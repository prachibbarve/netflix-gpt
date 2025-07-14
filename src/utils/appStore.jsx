import { configureStore } from "@reduxjs/toolkit";

import reducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import gptReducer from "./GPTSlice";
import configReducer from "../utils/appConfigSlice";
const appStore = configureStore({
  reducer: {
    user: reducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
