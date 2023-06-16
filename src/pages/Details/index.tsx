import { useParams } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../redux/slice/slice-movie";
import YouTube from "react-youtube";
import {
  VideoResult,
  getGenre,
  castDetails,
  ReviewsResult,
} from "../../service/data-types";
import Genres from "../../components/Genres";
import Reviews from "../../components/ReviewsPlaceholder";
import { IoBookmarkOutline, IoBookmarkSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../redux/slice/slice-watchlist";
import { WatchListRootState } from "../../redux/store";

const Details = () => {
  const { id } = useParams();

  const { data: movieDetails } = useGetMovieDetailsQuery(Number(id));
  console.log(movieDetails);

  const video = movieDetails?.videos?.results.find(
    (item: VideoResult) => item.type === "Trailer"
  );

  const cast = movieDetails?.credits?.cast
    .slice(0, 6)
    .map((item: castDetails) => item.name);

  const date = new Date(String(movieDetails?.release_date));

  const { movies } = useSelector(
    (state: WatchListRootState) => state.watchlist
  );

  const dispatch = useDispatch();

  const isMovieInWatchlist = movies.some(
    (item) => item.id === movieDetails?.id
  );

  const handleAddToWatchlist = (movieDetails: any) => {
    dispatch(addToWatchlist(movieDetails));
  };

  const handleRemoveFromWatchlist = (movieDetails: any) => {
    dispatch(removeFromWatchlist(movieDetails));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <YouTube
          videoId={video?.key}
          iframeClassName="aspect-video w-full lg:h-[500px] h-full rounded-xl "
        />
        <div className="flex justify-between flex-wrap md:flex-nowrap">
          <div className="flex justify-between gap-5 flex-wrap md:flex-nowrap">
            <img
              src={`https://image.tmdb.org/t/p/w185${movieDetails?.poster_path}`}
              alt=""
              className="md:self-center"
            />
            <div className="flex flex-col gap-3">
              <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-3">
                <div>
                  <h1 className="text-5xl font-bold mb-2">
                    {movieDetails?.original_title}
                  </h1>
                  <p className="text-gray-300">{cast?.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {movieDetails?.genres?.map((item: getGenre) => (
                  <Genres key={item.id} name={item.name} />
                ))}
              </div>
              <p>{movieDetails?.overview}</p>
              <p className="text-gray-300">
                Release date: {date.toDateString()}
              </p>
              <div>
                {isMovieInWatchlist ? (
                  <button
                    onClick={() => handleRemoveFromWatchlist(movieDetails)}
                    className="flex gap-2">
                    <IconContext.Provider
                      value={{ color: "white", size: "1.3em" }}>
                      <IoBookmarkSharp />
                    </IconContext.Provider>
                    Remove from Watchlist
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToWatchlist(movieDetails)}
                    className="flex gap-2">
                    <IconContext.Provider
                      value={{ color: "white", size: "1.3em" }}>
                      <IoBookmarkOutline />
                    </IconContext.Provider>
                    Add to Watchlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Reviews</h1>
          {movieDetails?.reviews?.results?.length === 0 ? (
            <h1 className="text-center bg-neutral-800 rounded-xl p-5 mt-2">
              No Reviews 😔
            </h1>
          ) : (
            movieDetails?.reviews?.results
              ?.slice(0, 3)
              .map((item: ReviewsResult, index) => (
                <Reviews
                  key={index}
                  author={item.author}
                  content={item.content}
                />
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
