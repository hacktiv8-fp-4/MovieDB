import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZiNDU0NGM2ZGQ1NGM4MTg2M2JjNzNmMmQxZDZlMiIsInN1YiI6IjY0ODJlODNlZTI3MjYwMDBlOGJmZTBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADhJHV1a3TU6RqYDK_fZxEeEIesjDanBBlRxTvvLYJU"
      );
    },
  }),
  endpoints: (builder) => ({
    getAllMovie: builder.query({
      query: () => "/discover/movie/",
    }),
  }),
});

export const { useGetAllMovieQuery } = movieApi;
