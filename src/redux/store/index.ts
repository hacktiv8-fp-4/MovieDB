import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../slice/slice-movie";

const rootReducers = combineReducers({
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
