// VideoSummariesDetailsSection.tsx

import React from "react";
import { FaShoppingCart, FaShare } from "react-icons/fa";
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
          <FaShoppingCart className="ml-0 h-5" /> {/* أيقونة السلة للشراء */}
          <button className="text-white bg-emerald-500 rounded hover:bg-emerald-600 px-8 py-2">
            اشترك الآن
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <FaShare className="ml-0 h-5" /> {/* أيقونة المشاركة */}
          <p className="">مشاركة الدورة</p>
        </div>
      </div>
      
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
      <div className="rounded text-gray-600 bg-white shadow space-y-2 text-sm p-4 border">
        <img src="assets/key.svg" className="mr-2 float-left h-5" />
        <p>الوصول مدى الحياة</p>
        <img src="assets/mobile.svg" className="mr-2 float-left h-5" />
        <p>الوصول على الهاتف المحمول والتلفزيون</p>
        <img src="assets/cloud.svg" className="mr-2 float-left h-5" />
        <p>المهام</p>
        <img src="assets/teacher.svg" className="mr-2 float-left h-5" />
        <p>شهادة الإكمال</p>
      </div>
    </div>
  );
};

export default VideoSummariesDetailsSection;
