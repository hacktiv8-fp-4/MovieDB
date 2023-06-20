import { ReviewsResult } from "../../service/data-types";

const Reviews = ({ author, content }: ReviewsResult) => {
  return (
    <blockquote className="bg-neutral-800 p-4 rounded-xl my-5">
      <div className="">
        <p className="text-gray-300 ">
          <em>{content}</em>
        </p>
      </div>
      <footer className="mt-6">
        <div className="text-xl font-semibold text-gray-300">{author}</div>
      </footer>
    </blockquote>
  );
};

export default Reviews;
