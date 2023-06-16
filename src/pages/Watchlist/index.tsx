import { useSelector, useDispatch } from "react-redux";
import { WatchListRootState } from "../../redux/store";
import { removeFromWatchlist } from "../../redux/slice/slice-watchlist";
import { ListMovieTypes } from "../../service/data-types";
import { Link } from "react-router-dom";
import BaseCard from "../../components/Cards/BaseCard";
import { IconContext } from "react-icons";
import { IoBookmarkSharp } from "react-icons/io5";

const Watchlist = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector(
    (state: WatchListRootState) => state.watchlist
  );

  const handleRemoveFromWatchlist = (movies: ListMovieTypes) => {
    dispatch(removeFromWatchlist(movies));
  };

  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">
        Your Watchlist
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {movies.length < 1 ? (
          <h1>No Watchlist.</h1>
        ) : (
          movies?.map((item: ListMovieTypes, index) => (
            <div className="flex flex-col gap-3">
              <div
                className="hover:scale-105 z-50 ease-in duration-200"
                key={index}>
                <Link to={`../details/${item.id}`}>
                  <BaseCard
                    id={item.id}
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    name={item.title}
                    release={item.release_date}
                    rated={item.vote_average}
                  />
                </Link>
              </div>
              <button
                onClick={() => handleRemoveFromWatchlist(item)}
                className="flex gap-2">
                <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
                  <IoBookmarkSharp />
                </IconContext.Provider>
                Remove from Watchlist
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Watchlist;
