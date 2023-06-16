import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BaseCard from "../../components/Cards/BaseCard";
import Genres from "../../components/Genres";
import Skeleton from "../../components/Skeleton";
import {
  getDataGenre,
  setClearFilter,
  setFilterGenre,
} from "../../redux/slice/slice-filterGenre";
import {
  useGetAllGenresQuery,
  useGetMovieFilterQuery,
} from "../../redux/slice/slice-movie";
import {
  ListMovieTypes,
  genreIdType,
  getGenre,
  listFilterType,
  stateFilterGenre,
} from "../../service/data-types";

const DiscoverMovies = () => {
  const dispatch = useDispatch();
  const { listFilter, genreId } = useSelector((state) => state.filterGenre);
  const { data: movieGenres } = useGetAllGenresQuery("movie");
  const genre = movieGenres?.genres;
  const filterJoined = genreId.map((item: genreIdType) => item.id).join(",");
  const { data: filterMovie, isFetching } = useGetMovieFilterQuery({
    genre: filterJoined,
    page: 1,
  });
  // console.log("genreId", genreId);
  useEffect(() => {
    dispatch(getDataGenre(genre));
  }, [dispatch, genre]);

  const handleGenreClick = (clickedGenreId: string, genreName: string) => {
    dispatch(setFilterGenre({ genreName, clickedGenreId }));
  };

  const resetFilter = () => {
    dispatch(setClearFilter());
  };
  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">Discover</h1>
      <div className="flex gap-5 flex-wrap mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <h1>Filter by genre: {listFilter.slice().sort().join(", ")}</h1>
          {listFilter.length > 0 && (
            <button
              onClick={resetFilter}
              type="button"
              className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 transition-all text-md "
            >
              Reset filter
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {genre?.map((item: getGenre) => (
            <div
              onClick={() => handleGenreClick(String(item.id), item.name)}
              key={item.id}
            >
              <Genres id={item.id} name={item.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {isFetching
          ? [...Array(12).keys()].map((i) => {
              return <Skeleton key={i} />;
            })
          : filterMovie?.results.map((item: ListMovieTypes, index) => (
              <Link
                to={`../details/${item.id}`}
                key={index}
                className="hover:scale-110 z-50 ease-in duration-200"
              >
                <BaseCard
                  id={item.id}
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  name={item.title}
                  release={item.release_date}
                  rated={item.vote_average}
                />
              </Link>
            ))}
      </div>
    </>
  );
};

export default DiscoverMovies;
