import { Link, useParams } from "react-router-dom";
import BaseCard from "../../components/Cards/BaseCard";
import { useGetAllSearchMovieQuery } from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service/data-types";

export default function Searchs() {
  const { keyword } = useParams();
  const { data } = useGetAllSearchMovieQuery({ query: keyword, page: 1 });
  return (
    <div className="grid grid-rows-1 grid-cols-4 gap-5">
      {data?.results.map((item: ListMovieTypes) => (
        <Link to={`../details/${item.id}`} key={item.id}>
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
  );
}
