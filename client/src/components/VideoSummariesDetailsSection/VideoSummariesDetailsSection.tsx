// VideoSummariesDetailsSection.tsx

import React from "react";
import { VideoSummariesDetailsProps } from "../../constants/interfaces";

const VideoSummariesDetailsSection: React.FC<VideoSummariesDetailsProps> = ({
  courseName,
  instructor,
  rating,
  views,
  price,
  // Add other props specific to video summaries
}) => {
  return (
    <div className="space-y-6 flex-col mb-10">
      <div className="shadow text-gray-600 border rounded p-2 space-y-4">
        <div className="flex  items-center space-x-2">
          <p className="flex-1">Course Name: {courseName}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="flex-1">Instructor: {instructor}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="flex-1">Rating: {rating}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="flex-1">Views: {views}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="flex-1">Price: {price}</p>
        </div>
        {/* Add other details specific to video summaries */}
      </div>
    </div>
  );
};

export default VideoSummariesDetailsSection;
