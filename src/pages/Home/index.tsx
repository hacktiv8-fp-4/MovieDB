import Card from "../../components/Card";
import Flickity from "react-flickity-component";
import {
  useGetAllMovieQuery,
  useGetAllMovieRatedQuery,
} from "../../redux/slice/slice-movie";
import {
  ArgumentStatetMovieTypes,
  ListMovieTypes,
} from "../../service/data-types";
import CardPopular from "../../components/CardPopular";
import { useSelector } from "react-redux";

const Home = () => {
  const { data: movie } = useGetAllMovieQuery(1);
  const { data: movieRated } = useGetAllMovieRatedQuery(1);
  const { data: search } = useSelector(
    (state: ArgumentStatetMovieTypes) => state.search
  );
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
          {search.length === 0
            ? movieRated?.results
                .slice(0, 4)
                .map((item: ListMovieTypes) => (
                  <CardPopular
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    name={item.title}
                    release={item.release_date}
                    rated={item.vote_average}
                  />
                ))
            : search
                ?.slice(0, 4)
                .map((item: ListMovieTypes) => (
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
          {search.length === 0
            ? movie?.results
                .slice(0, 8)
                .map((item: ListMovieTypes) => (
                  <Card
                    image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    name={item.title}
                    release={item.release_date}
                    icon={"/image/ic_play.svg"}
                  />
                ))
            : search
                ?.slice(0, 8)
                .map((item: ListMovieTypes) => (
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
