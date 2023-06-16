import { Link, useParams } from "react-router-dom";
import BaseCard from "../../components/Cards/BaseCard";
import { useGetAllSearchMovieQuery } from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service/data-types";
import NoImage from "../../assets/No-Image-Placeholder.png";
import Skeleton from "../../components/Skeleton";

export default function Searchs() {
  const { keyword } = useParams();
  const { data, isFetching } = useGetAllSearchMovieQuery({
    query: keyword,
    page: 1,
  });
  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">
        Search results for "{keyword}"
      </h1>
      <div className="grid grid-rows-1 grid-cols-4 gap-5">
        {isFetching
          ? [...Array(12).keys()].map((i) => {
              return <Skeleton key={i} />;
            })
          : data?.results.map((item: ListMovieTypes) => (
              <Link
                to={`../details/${item.id}`}
                key={item.id}
                className="hover:scale-110 z-50 ease-in duration-200">
                <BaseCard
                  image={
                    item.poster_path === null
                      ? NoImage
                      : `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  }
                  name={item.title}
                  release={item.release_date}
                  rated={item.vote_average}
                  id={item.id}
                />
              </Link>
            ))}
      </div>
    </>
  );
}
