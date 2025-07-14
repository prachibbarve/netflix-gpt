import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
      state.movieResult = action.payload;
    },
    deleteMovieResults: (state) => {
      state.movieResult = null;
    },
  },
});

export default GPTSlice.reducer;
export const { toggleSearchView, addMovieResults, deleteMovieResults } =
  GPTSlice.actions;
