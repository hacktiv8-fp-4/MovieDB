import Card from "../../components/Card";
import Flickity from "react-flickity-component";
import {
  useGetAllMovieQuery,
  useGetAllMovieRatedQuery,
} from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service";
import CardPopular from "../../components/CardPopular";

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
      <div className="mt-[50px]">
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-[22px] text-black mb-4">
            Rated Movies
          </div>
          <div className="font-semibold text-lg text-black mb-4">See all</div>
        </div>
        <div className="grid grid-rows-1 grid-cols-4 gap-5">
          {MovieRated?.results?.slice(0, 4).map((item: ListMovieTypes) => (
            <CardPopular
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
              rated={item.vote_average}
            />
          ))}
        </div>
      </div>
      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">
          Popular Movies
        </div>
        <Flickity options={flickityOptions} className="focus:outline-none">
          {movie?.results?.slice(0, 8).map((item: ListMovieTypes) => (
            <Card
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              name={item.title}
              release={item.release_date}
              icon={"/image/ic_play.svg"}
            />
          ))}
        </Flickity>
      </div>
    </>
  );
};

export default Home;
