import { AiFillStar } from "react-icons/ai";
import { CardMovieRatedTypes } from "../../service";
import { formatDate } from "../../service/formatDate";

export default function CardPopular({
  rated,
  name,
  release,
  image,
}: CardMovieRatedTypes) {
  // const year = release.substring(0, 4);
  return (
    <div className="relative">
      <img
        src={image}
        className="object-cover rounded-[30px] w-full h-[250px] md:w-[300px]"
        alt=""
      />
      <div className="absolute top-5 left-5 bg-black rounded-full">
        <div className="flex flex-row items-center py-1 px-[10px]">
          <span className="text-white text-sm">
            <AiFillStar />
          </span>
          <span className="text-white text-sm ml-1">{rated}</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-5">
        <div className="">
          <h3 className="text-white text-lg">{name}</h3>
          <p className="text-white text-sm ml-1">
            {formatDate.getYear(release)}
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 bg-black rounded-full">
        <div className="py-3 px-6">
          <span className="text-white text-sm ml-1">Watch Now</span>
        </div>
      </div>
    </div>
  );
}
