import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export default GPTSlice.reducer;
export const { toggleSearchView } = GPTSlice.actions;
