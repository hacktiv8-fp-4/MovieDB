import { createSlice } from "@reduxjs/toolkit";
import { genreIdType, listFilterType } from "../../service/data-types";

export const sliceFilterGenre = createSlice({
  name: "filterGenre",
  initialState: {
    genre: [],
    genreId: [],
    listFilter: [],
  },
  reducers: {
    getDataGenre: (state, action) => {
      state.genre = action.payload;
    },
    setFilterGenre: (state, action) => {
      const clickedGenreId: string = action.payload.clickedGenreId;
      const genreName: string = action.payload.genreName;
      const isGenreSelected = state.genreId.find(
        (item: genreIdType) => item.id === clickedGenreId
      );
      if (isGenreSelected) {
        const updatedGenreId = state.genreId.filter(
          (item: genreIdType) => item.id !== clickedGenreId
        );
        const updatedFilter = state.listFilter.filter(
          (item) => item !== genreName
        );
        state.genreId = updatedGenreId;
        state.listFilter = updatedFilter;
      } else {
        const newItem: genreIdType = {
          id: clickedGenreId,
        };
        const spreeedGenre = [...state.genreId, newItem];
        const spreeedList = [...state.listFilter, genreName];
        state.genreId = spreeedGenre;
        state.listFilter = spreeedList;
      }
    },
    setClearFilter: (state) => {
      state.genreId = [];
      state.listFilter = [];
    },
  },
});

export const { getDataGenre, setFilterGenre, setClearFilter } =
  sliceFilterGenre.actions;
export default sliceFilterGenre.reducer;
