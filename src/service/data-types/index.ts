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
  icon: string;
  image: string;
}
export interface CardMovieRatedTypes {
  name: string;
  release: string;
  image: string;
  rated: number;
}
