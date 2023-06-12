import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../slice/slice-movie";
import reducersSearch from "../slice/slice-search";

const rootReducers = combineReducers({
  search: reducersSearch,
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
