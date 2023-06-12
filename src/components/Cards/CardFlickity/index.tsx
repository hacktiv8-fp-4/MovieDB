import { CardMovieTypes } from "../../../service";
import { formatDate } from "../../../service/formatDate";
import { NavLink } from "react-router-dom";

export default function CardFlickity({
  name,
  release,
  image,
  id,
}: CardMovieTypes) {
  return (
    <div className="absolute group overflow-hidden mr-[30px]">
      <img
        src={image}
        className="object-cover rounded-[30px] w-full h-[300px] md:w-[250px]"
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900  rounded-bl-[28px] rounded-br-[28px] translate-y-0 group-hover:translate-y-[300px] z-10 transition ease-in-out duration-500 group-hover:bg-transparent overflow-hidden">
        <div className="px-7 pb-7">
          <div className="font-medium text-xl text-white line-clamp-2">
            {name}
          </div>
          <p className="mb-0 text-gray-500 text-base mt-[10px]">
            {formatDate.getYear(release)}
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500">
        <NavLink
          to={`../details/${id}`}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          See Details
        </NavLink>
      </div>
    </div>
  );
}
