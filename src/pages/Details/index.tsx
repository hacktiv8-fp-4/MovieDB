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

  return (
    <>
      <div className="flex flex-col gap-4">
        <YouTube
          videoId={video?.key}
          iframeClassName="aspect-video w-full lg:h-[500px] h-full rounded-xl "
        />
        <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-3">
          <div>
            <h1 className="text-5xl font-bold mb-2">
              {movieDetails?.original_title}
            </h1>
            <p className="text-gray-300">{cast?.join(", ")}</p>
          </div>
          <div>
            <p className="text-gray-300">
              Release date: {movieDetails?.release_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {movieDetails?.genres?.map((item: getGenre) => (
            <Genres key={item.id} name={item.name} />
          ))}
        </div>
        <p>{movieDetails?.overview}</p>
        <div>
          <h1 className="text-2xl font-semibold">Reviews</h1>
          {movieDetails?.reviews?.results
            ?.slice(0, 3)
            .map((item: ReviewsResult, index) => (
              <Reviews
                key={index}
                author={item.author}
                content={item.content}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Details;
