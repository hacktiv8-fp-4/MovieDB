import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ArgumentMovieTypes,
  MovieDetails,
  GetAllGenres,
} from "../../service/data-types";

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
    getAllMovieNowPlaying: builder.query<ArgumentMovieTypes, number>({
      query: (page: 1) =>
        `/movie/now_playing?language=id-ID&page=${page}&region=ID`,
    }),
    getAllMovieTrending: builder.query<ArgumentMovieTypes, string>({
      query: (time_window) => `/trending/movie/${time_window}`,
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (id) =>
        `/movie/${id}?append_to_response=videos%2Ccredits%2Creviews&language=en-US`,
    }),
    getAllGenres: builder.query<GetAllGenres, string>({
      query: (type) => `/genre/${type}/list`,
    }),
    getMovieFilter: builder.query<ArgumentMovieTypes, string>({
      query: (genreId) =>
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
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
  useGetAllMovieNowPlayingQuery,
  useGetAllMovieTrendingQuery,
  useGetMovieDetailsQuery,
  useGetAllGenresQuery,
  useGetMovieFilterQuery,
} = movieApi;
