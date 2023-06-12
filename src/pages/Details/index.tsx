import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  return (
    <h1 className="font-semibold text-[22px] text-white mb-4">{params.id}</h1>
  );
};

export default Details;
