import React from "react";
interface CourseCardProps {
  courseName: string;
  instructor: string;
  rating: number;
  views: number;
  category: string;
  price: string;
}

function CourseCard({
  courseName,
  instructor,
  rating,
  views,
  category,
  price,
}: CourseCardProps) {
  const courseThumbnailSrc = "./public/assets/course-thumbnail.jpg";
  return (
    <div className="w-[280px] bg-white rounded-3xl  shadow-xl dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-3xl w-full h-28"
          src={courseThumbnailSrc}
          alt="courseThumbnail"
        />
      </a>
      <div className="p-1">
        <a href="#">
          <h5 className="ml-2 mt-2 mb-1 text-lg font-medium tracking-tight text-gray-900">
            {courseName}
          </h5>
        </a>
        <p className="ml-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
          {instructor}
        </p>
         {/* Category of the course */}
         <div className="px-2">
          <span className="bg-blue-100 text-blueLink text-xs px-2 py-1 rounded-md">
            {category}
          </span>{" "}
          
        </div>
        <div className="flex justify-between items-center px-2 mb-0">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 mr-1 ${
                    index < rating ? "opacity-100" : "opacity-30"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            {/* Average rating */}
            <span className="text-gray-500 ml-1">{rating}</span>{" "}
            {/* Number of views */}
            <span className="text-gray-500 ml-2">•</span>
            <span className="text-gray-500 ml-2">{views}K views</span>{" "}
            {/* Pricing information */}
          </div>
          <div className="text-black font-medium">{price}</div>{" "}
        </div>
       
      </div>
    </div>
  );
}

export default CourseCard;
