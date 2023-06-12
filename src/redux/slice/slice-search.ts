import { createSlice } from "@reduxjs/toolkit";

export const sliceSearch = createSlice({
  name: "search",
  initialState: {
    data: [],
  },
  reducers: {
    getDataSearchApi: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});

export const { getDataSearchApi } = sliceSearch.actions;
export default sliceSearch.reducer;
