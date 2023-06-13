import { getGenre } from "../../service/data-types";

const Genres = ({ name }: getGenre) => {
  return (
    <h1 className="border cursor-pointer border-indigo-500 hover:bg-indigo-500 transition-all py-2 px-4 rounded-3xl inline-flex">
      {name}
    </h1>
  );
};

export default Genres;
