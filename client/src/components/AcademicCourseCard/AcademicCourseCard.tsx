import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface AcademicCourseCardProps {
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;

  price: string;
  courseThumbnailSrc: string;
  instructorJob: string;
  numLessons: number;
  duration: string;
  year: string; // Add year prop
  subject: string; // Add subject prop
  progress?: number; // Make progress optional
  isLearningCourses?: boolean; // Add a new prop to indicate learning page
}

const AcademicCourseCard: React.FC<AcademicCourseCardProps> = ({
  courseName,
  instructor,
  instructorAvtr,
  rating,
  views,

  price,
  courseThumbnailSrc,
  instructorJob,
  numLessons,
  duration,
  year, // Receive year prop
  subject, // Receive subject prop
  progress,
  isLearningCourses = false,
}) => {
  function truncateText(text: string, maxLines: number) {
    const words = text.split(" ");
    const truncated = words.slice(0, 4).join(" ");
    if (words.length > maxLines) {
      return `${truncated} ..`;
    }
    return truncated;
  }
  return (
    <div className="w-full hover:bg-greenish hover:text-white h-full space-y-3 p-3 bg-white rounded-lg duration-500 shadow-sm border border-gray-200 dark:border-gray-200">
      <div className=" bg-blue-100 rounded-lg relative">
        <img
          className="rounded-lg md:h-48"
          src={courseThumbnailSrc}
          alt="courseThumbnail"
        />
        {/* Conditionally render price if not on the learning courses page */}
        {!isLearningCourses && (
          <div className="absolute bottom-2 right-4 text-white rounded-xl p-2 w-36 bg-red-500 text-center font-bold text-xl">
            {price} دج
          </div>
        )}
      </div>

      <div className="p-1">
        <Link to="" className="absolute flex items-center ml-2 mb-2">
          <img
            className="w-12 h-12 rounded-full inline-block"
            src={instructorAvtr}
            alt="instructorAvatar"
          />
          <div className="ml-2">
            <p className="mb-0 font-medium text-gray-800 ">{instructor}</p>
            <p className="text-gray-500 text-sm">{instructorJob}</p>
          </div>
        </Link>
        <h5 className="ml-2 mt-14 text-lg font-medium tracking-tight text-gray-900 max-h-16">
          {truncateText(courseName, 2)}
        </h5>

        {/* year and subject of the course */}
        <div className="px-2">
          <span className="bg-blue-100 text-blueLink text-xs px-2 py-1 rounded-md">
            {year} {subject}
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between items-center mb-0">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`text-goldPal mr-1 ${
                    index < rating ? "opacity-100" : "opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Average rating */}
          <span className="text-gray-500">{rating}</span>
          {/* Number of views */}
          <span className="text-gray-500 ml-2">•</span>
          <span className="text-gray-500 ml-2">{views}K views</span>
          {/* Pricing information */}
        </div>

        <div className="">
          {/* Conditionally render progress bar or Buy Now button */}
          {isLearningCourses ? (
            <div className="w-full h-3 bg-gray-100 rounded-full">
              <div
                className="bg-emerald-500 ml-0 h-full text-center text-xs  leading-none  text-white rounded-full"
                style={{ width: `${progress || 0}%` }}
              >
                <span>{progress}% Complete</span>
              </div>
            </div>
          ) : (
            <button className="rounded-full lg:border-2 border-2 text-sm lg:text-lg m-2 border-emerald-500 px-8 lg:px-8 lg:p-1.5 p-1 hover:bg-emerald-500 hover:text-white text-emerald-500 font-bold">
              اشترك الان
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicCourseCard;
