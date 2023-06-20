import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListMovieTypes } from "../../service/data-types";

export interface WatchlistState {
  movies: ListMovieTypes[];
}

const initialState: WatchlistState = {
  movies: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<ListMovieTypes>) => {
      state.movies.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<ListMovieTypes>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
