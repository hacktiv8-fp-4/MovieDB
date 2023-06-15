import Flickity from "react-flickity-component";
import BaseCard from "../../components/Cards/BaseCard";
import CardFlickity from "../../components/Cards/CardFlickity";
import {
  useGetAllMovieQuery,
  useGetAllMovieRatedQuery,
  useGetAllMovieNowPlayingQuery,
  useGetAllMovieTrendingQuery,
} from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service/data-types";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: movie } = useGetAllMovieQuery(1);
  const { data: movieRated } = useGetAllMovieRatedQuery(1);
  const { data: movieNowPlaying } = useGetAllMovieNowPlayingQuery(1);
  const { data: movieTrending } = useGetAllMovieTrendingQuery("day");

  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: ">1",
  };

  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold text-[22px] text-white mb-4">
            Rated Movies
          </h1>
          <Link
            to="top_rated"
            className="font-semibold text-lg text-white mb-4 underline">
            See all
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
          {movieRated?.results
            .slice(0, 4)
            .map((item: ListMovieTypes, index) => (
              <Link
                to={`../details/${item.id}`}
                key={index}
                className="hover:scale-105 z-50 ease-in duration-200">
                <BaseCard
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  name={item.title}
                  release={item.release_date}
                  rated={item.vote_average}
                  id={item.id}
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="mt-[50px] overflow-hidden">
        <h1 className="font-semibold text-[22px] text-white mb-4">
          Popular Movies
        </h1>
        <Flickity options={flickityOptions} className="focus:outline-none">
          {movie?.results.map((item: ListMovieTypes) => (
            <CardFlickity
              key={item.id}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
              id={item.id}
            />
          ))}
        </Flickity>
      </div>
      <div className="mt-[50px] overflow-hidden">
        <h1 className="font-semibold text-[22px] text-white mb-4">
          Now Playing in Cinemas
        </h1>
        <Flickity options={flickityOptions} className="focus:outline-none">
          {movieNowPlaying?.results.map((item: ListMovieTypes) => (
            <CardFlickity
              key={item.id}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
              id={item.id}
            />
          ))}
        </Flickity>
      </div>
      <div className="mt-[50px] overflow-hidden">
        <h1 className="font-semibold text-[22px] text-white mb-4">
          What's Trending?
        </h1>
        <Flickity options={flickityOptions} className="focus:outline-none">
          {movieTrending?.results.map((item: ListMovieTypes) => (
            <CardFlickity
              key={item.id}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
              id={item.id}
            />
          ))}
        </Flickity>
      </div>
    </>
  );
};

export default Home;
