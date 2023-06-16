import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../slice/slice-movie";
import reducersSearch from "../slice/slice-search";
import watchlistSlice from "../slice/slice-watchlist";
import { WatchlistState } from "../slice/slice-watchlist";

export type WatchListRootState = {
  watchlist: WatchlistState;
};

const rootReducers = combineReducers({
  search: reducersSearch,
  watchlist: watchlistSlice,
  [movieApi.reducerPath]: movieApi.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      movieApi.middleware
    ),
});

export default store;
