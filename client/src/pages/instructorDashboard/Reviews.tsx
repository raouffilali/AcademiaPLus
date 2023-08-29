import React, { useState } from "react";
import { FaDownload, FaComment, FaFlag } from "react-icons/fa";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

import { reviewsData } from "../../data/reviews";

interface Review {
  id: number;
  studentAvatar: string;
  username: string;
  rating: number;
  course: string;
  comment: string;
}

const Reviews = () => {
  const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviewsData);

  // Filter and sort state
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedRating, setSelectedRating] = useState("0");
  const [sortBy, setSortBy] = useState("newest");

  // Implement filtering and sorting logic based on selectedCourse, selectedRating, and sortBy

  // Export to CSV function
  const exportToCSV = () => {
    // Implement CSV export logic
  };

  return (
    <div className="bg-white shadow rounded-md mb-6 ">
      <div className="lg:flex p-4">
        <div className="flex-1">
          <p className="text-lg font-medium">Reviews</p>
          <p className="text-gray-500 text-sm">
            You have full control to manage your own account setting.
          </p>
        </div>
        <button
          onClick={exportToCSV}
          className=" text-sm font-medium px-4 border-2 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded-lg "
        >
          <FaDownload /> Export to CSV...
        </button>
      </div>
      <hr className="py-2" />
      <div className=" flex justify-between text-sm text-gray-500 my-2 p-4 ">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="mr-2 bg-white border rounded border-gray-300 p-2 w-2/3"
        >
          {/* Render course options */}
          <option value="All">All</option>
          {reviewsData.map((review) => (
            <option key={review.id} value={review.course}>
              {review.course}
            </option>
          ))}
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="mr-2 bg-white border rounded border-gray-300 p-2 w-1/3"
        >
          {/* Render rating options */}
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <select
          className="w-1/3 bg-white border rounded border-gray-300 p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      <hr />

      <div>
        {filteredReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
