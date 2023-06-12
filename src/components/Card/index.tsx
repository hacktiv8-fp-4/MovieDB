import { CardMovieTypes } from "../../service/data-types";
import { formatDate } from "../../service/formatDate";

export default function Card({ name, release, icon, image }: CardMovieTypes) {
  return (
    <div className="absolute group overflow-hidden mr-[30px]">
      <img
        src={image}
        className="object-cover rounded-[30px] w-full h-[300px] md:w-[250px]"
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black  rounded-bl-[28px] rounded-br-[28px] translate-y-0 group-hover:translate-y-[300px] z-10 transition ease-in-out duration-500 group-hover:bg-transparent overflow-hidden">
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
        <img src={icon} width="80" alt="" />
      </div>
      <a href="watching.html" className="inset-0 absolute z-50"></a>
    </div>
  );
}
