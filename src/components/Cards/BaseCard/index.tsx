import { AiFillStar } from "react-icons/ai";
import { CardMovieRatedTypes } from "../../../service/data-types";
import { formatDate } from "../../../service/formatDate";

export default function BaseCard({
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
        className="object-cover rounded-[30px] w-full h-[250px]"
        alt=""
      />
      <div className="absolute top-5 left-5 bg-indigo-500 rounded-full">
        <div className="flex flex-row items-center py-1 px-[10px]">
          <span className="text-yellow-500 text-sm">
            <AiFillStar />
          </span>
          <span className="text-white text-sm ml-1">{rated}</span>
        </div>
      </div>
      <div className="absolute bottom-0 w-full   p-5 rounded-b-[28px] bg-gradient-to-t from-slate-900">
        <div className="">
          <h3 className="text-white text-lg line-clamp-2">{name}</h3>
          <p className="text-white text-sm ml-1">
            {formatDate.getYear(release)}
          </p>
        </div>
      </div>
    </div>
  );
}
