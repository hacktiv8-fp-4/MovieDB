import {
  useGetAllGenresQuery,
  useGetMovieFilterQuery,
} from "../../redux/slice/slice-movie";
import Genres from "../../components/Genres";
import { ListMovieTypes, getGenre } from "../../service/data-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import BaseCard from "../../components/Cards/BaseCard";
import Skeleton from "../../components/Skeleton";

interface Genre {
  id: string;
}

const DiscoverMovies = () => {
  const { data: movieGenres } = useGetAllGenresQuery("movie");
  const genre = movieGenres?.genres;
  const [genreId, setGenreId] = useState<Genre[]>([]);
  const [listFilter, setListFilter] = useState<string[]>([]);
  const filterJoined = genreId.map((item) => item.id).join(",");
  const { data: filterMovie, isFetching } =
    useGetMovieFilterQuery(filterJoined);

  const handleGenreClick = (clickedGenreId: string, genreName: string) => {
    const isGenreSelected = genreId.some((item) => item.id === clickedGenreId);
    if (isGenreSelected) {
      const updatedGenreId = genreId.filter(
        (item) => item.id !== clickedGenreId
      );
      const updatedFilter = listFilter.filter((item) => item !== genreName);
      setGenreId(updatedGenreId);
      setListFilter(updatedFilter);
    } else {
      const newItem: Genre = {
        id: clickedGenreId,
      };
      setGenreId([...genreId, newItem]);
      setListFilter([...listFilter, genreName]);
    }
  };

  const resetFilter = () => {
    setListFilter([]);
    setGenreId([]);
  };

  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">Discover</h1>
      <div className="flex gap-5 flex-wrap mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <h1>Filter by genre: {listFilter.sort().join(", ")}</h1>
          {listFilter.length > 0 && (
            <button
              onClick={resetFilter}
              type="button"
              className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 transition-all text-md ">
              Reset filter
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {genre?.map((item: getGenre) => (
            <div
              onClick={() => handleGenreClick(String(item.id), item.name)}
              key={item.id}>
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
                className="hover:scale-110 z-50 ease-in duration-200">
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
