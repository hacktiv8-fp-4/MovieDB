import BaseCard from "../../components/Cards/BaseCard";
import { useGetAllMovieRatedQuery } from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service/data-types";
import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton";

const TopRated = () => {
  const { data: movieRated, isFetching } = useGetAllMovieRatedQuery(1);
  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">Top Rated</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        {isFetching
          ? [...Array(12).keys()].map((i) => {
              return <Skeleton key={i} />;
            })
          : movieRated?.results.map((item: ListMovieTypes, index) => (
              <Link
                to={`../details/${item.id}`}
                key={index}
                className="hover:scale-110 z-50 ease-in duration-200">
                <BaseCard
                  image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                  name={item.title}
                  release={item.release_date}
                  rated={item.vote_average}
                  id={item.id}
                />
              </Link>
            ))}
        {}
      </div>
    </>
  );
};
export default TopRated;
