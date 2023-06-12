import CardFlickity from "../../components/Cards/CardFlickity";
import Flickity from "react-flickity-component";
import {
  useGetAllMovieQuery,
  useGetAllMovieRatedQuery,
} from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service";
import BaseCard from "../../components/Cards/BaseCard";

const Home = () => {
  const { data: movie } = useGetAllMovieQuery(1);
  const { data: MovieRated } = useGetAllMovieRatedQuery(1);

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
      <div className="">
        <div className="flex justify-between">
          <div className="font-semibold text-[22px] text-white mb-4">
            Rated Movies
          </div>
          <div className="font-semibold text-lg text-white mb-4">See all</div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {MovieRated?.results
            ?.slice(0, 4)
            .map((item: ListMovieTypes, index) => (
              <BaseCard
                id={item.id}
                key={index}
                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                name={item.title}
                release={item.release_date}
                rated={item.vote_average}
              />
            ))}
        </div>
      </div>
      <div className="mt-[50px] overflow-x-hidden">
        <div className="font-semibold text-[22px] text-white mb-4">
          Popular Movies
        </div>
        <Flickity options={flickityOptions} className="focus:outline-none">
          {movie?.results?.slice(0, 8).map((item: ListMovieTypes, index) => (
            <CardFlickity
              key={index}
              id={item.id}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
            />
          ))}
        </Flickity>
      </div>
    </>
  );
};

export default Home;
