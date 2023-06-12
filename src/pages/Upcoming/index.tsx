import BaseCard from "../../components/Cards/BaseCard";
import { useGetAllMovieUpcomingQuery } from "../../redux/slice/slice-movie";
import { ListMovieTypes } from "../../service";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const { data: MovieUpcoming } = useGetAllMovieUpcomingQuery(1);

  return (
    <>
      <h1 className="font-semibold text-[22px] text-white mb-4">
        Upcoming Movies
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {MovieUpcoming?.results?.map((item: ListMovieTypes, index) => (
          <Link to={`../details/${item.id}`} key={index}>
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

export default Upcoming;
