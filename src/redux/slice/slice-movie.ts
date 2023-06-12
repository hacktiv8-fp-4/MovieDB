import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArgumentMovieTypes } from "../../service/data-types";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGZiNDU0NGM2ZGQ1NGM4MTg2M2JjNzNmMmQxZDZlMiIsInN1YiI6IjY0ODJlODNlZTI3MjYwMDBlOGJmZTBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADhJHV1a3TU6RqYDK_fZxEeEIesjDanBBlRxTvvLYJU"
      );
    },
  }),
  endpoints: (builder) => ({
    getAllMovie: builder.query<ArgumentMovieTypes, number>({
      query: (page: 1) => `/movie/popular?page=${page}`,
    }),
    getAllMovieRated: builder.query<ArgumentMovieTypes, number>({
      query: (page: 1) => `/movie/top_rated?page=${page}`,
    }),
    getAllMovieUpcoming: builder.query<ArgumentMovieTypes, number>({
      query: (page: 1) => `/movie/upcoming?page=${page}`,
    }),
    getAllSearchMovie: builder.query({
      query: (queryParam) => {
        const { query, page } = queryParam;
        return {
          url: "/search/movie",
          params: {
            query,
            page,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllMovieQuery,
  useGetAllMovieRatedQuery,
  useGetAllMovieUpcomingQuery,
  useGetAllSearchMovieQuery,
} = movieApi;
