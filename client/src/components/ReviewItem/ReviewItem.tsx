import React from "react";
import { FaStar } from "react-icons/fa";
import { RiFlagLine } from "react-icons/ri";

interface ReviewItemProps {
  review: {
    studentAvatar: string;
    username: string;
    rating: number;
    course: string;
    comment: string;
  };
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="border-t p-4 mb-4">
      <div className="flex  mb-2 items-start">
        <div className="flex ml-0 items-start">
          <img
            src={review.studentAvatar}
            alt={`${review.username} Avatar`}
            className="h-14 w-14 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">{review.username}</p>
            <div className="flex items-center">
              {Array.from({ length: Math.floor(review.rating) }).map(
                (_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-500 text-xs font-light mr-1"
                  />
                )
              )}
            </div>
          </div>
        </div>
        <button title="Report Abuse">
          <RiFlagLine className="text-bluePal" />
        </button>
      </div>
      <div className="lg:pl-16">
        <p className="text-gray-800 font-medium text-sm  mb-2">
          {review.course}
        </p>
        <p className="text-gray-500 font-medium text-sm lg:w-[680px] mb-2">
          {review.comment}
        </p>
        <div className=" justify-between mt-2">
          <button className="border text-xs font-medium hover:text-white hover:bg-gray-700 text-gray-700 border-gray-700 rounded py-2 px-4">
            Respond
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
