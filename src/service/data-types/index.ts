export interface ListMovieTypes {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ArgumentMovieTypes {
  results: ListMovieTypes[];
}

export interface ArgumentStatetMovieTypes {
  search: {
    data: ListMovieTypes[];
  };
}

export interface CardMovieTypes {
  name: string;
  release: string;
  image: string;
  id: number;
}

export interface CardMovieRatedTypes {
  name: string;
  release: string;
  image: string;
  rated: number;
  id: number;
}

export interface GetAllGenres {
  genres: getGenre[];
}

export interface getGenre {
  id?: string;
  name: string;
}

export interface MovieDetails {
  id: number;
  original_title: string;
  title: string;
  overview: string;
  release_date: string;
  videos: MovieVideo;
  genres: getGenre[];
  credits: getCast;
  reviews?: MovieReviews;
  poster_path: string;
}

export interface MovieVideo {
  results: VideoResult[];
}

export interface VideoResult {
  name: string;
  key: string;
  type: string;
}

export interface getCast {
  cast: castDetails[];
}

export interface castDetails {
  name: string;
}

export interface MovieReviews {
  results?: ReviewsResult[];
}

export interface ReviewsResult {
  author: string;
  content: string;
}
export interface genreIdType {
  id: string;
}
export interface listFilterType {
  id: string;
  name: string;
}

export interface stateFilterGenre {
  genreId: genreIdType[];
  listFilter: listFilterType[];
}
