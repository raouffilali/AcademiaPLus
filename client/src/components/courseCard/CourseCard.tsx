import { ImgHTMLAttributes } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import  "./CourseCard.css";

export interface CourseCardProps {
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;
  category: string;
  price: string;
  courseThumbnailSrc: string;
  instructorJob: string;
  numLessons: number;
  duration: string;
  progress?: number; // Make progress optional
  isLearningCourses?: boolean; // Add a new prop to indicate learning page
}

function CourseCard({
  courseName,
  instructor,
  instructorAvtr,
  rating,
  views,
  category,
  price,
  courseThumbnailSrc,
  instructorJob,
  numLessons,
  duration,
  progress,
  isLearningCourses = false,
}: CourseCardProps) {
  const navigate = useNavigate();
  function truncateText(text: string, maxLines: number) {
    const words = text.split(' ');
    const truncated = words.slice(0,4).join(' ');
    if (words.length > maxLines) {
      return `${truncated} ..`;
    }
    return truncated;
  }
  

  const handleCourseClick = () => {
    console.log("Navigating to CourseDetails with data:", {
      courseName,
      instructor,
      rating,
      views,
      category,
      price,
      courseThumbnailSrc,
      instructorJob,
      numLessons,
      duration,
    });
    // navigate(
    //   `/courseDetails/${encodeURIComponent(courseName.replace(/\s/g, "-"))}`,
      navigate(
        `/courseDetails`,
      // {
      //   state: {
      //     courseName,
      //     instructor,
      //     instructorAvtr,
      //     rating,
      //     views,
      //     category,
      //     price,
      //     courseThumbnailSrc,
      //     instructorJob,
      //     numLessons,
      //     duration,
      //   },
      // }
    );
  };

  return (
    
    <div
    
      className="w-full hover:bg-cyan-950 hover:text-white h-full space-y-3 p-3 bg-white rounded-lg duration-500 shadow-sm border border-gray-200 dark:border-gray-200"
      onClick={handleCourseClick}
    >
      <div className="relative">
        <img
          className="rounded-lg  md:h-48"
          src={courseThumbnailSrc}
          alt="courseThumbnail"
        />
      {/* Conditionally render price if not on the learning courses page */}
      {!isLearningCourses && (
          <div className="absolute bottom-2 right-4 text-white rounded-xl p-2 w-36 bg-red-500 text-center font-bold text-xl">
            {price} Da
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

        {/* Category of the course */}
        <div className="px-2">
          <span className="bg-blue-100 text-blueLink text-xs px-2 py-1 rounded-md">
            {category}
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
          <button className="rounded-full lg:border-2 border-2 text-sm lg:text-lg m-2 border-bluePal px-8 lg:px-8 lg:p-1.5 p-1 hover:bg-bluePal hover:text-white text-bluePal font-bold">
            BUY NOW
          </button>
        )}
      </div>
      </div>
    </div>
  );
}

export default CourseCard;
