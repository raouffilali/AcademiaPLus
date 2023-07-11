import { ImgHTMLAttributes } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface CourseCardProps {
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;
  category: string;
  price: string;
  courseThumbnailSrc: string;
  instructorJob: string;
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
}: CourseCardProps) {
  const navigate = useNavigate();

  const handleCourseClick = (courseName: string) => {
    navigate(`/course-details/${courseName}`);
  };

  return (
    <div
      className="w-full hover:bg-cyan-950 hover:text-white h-full space-y-5 p-5 bg-white rounded-lg hover:border-cyan-950 duration-500 shadow-sm border border-gray-200 dark:border-gray-200"
      onClick={() => handleCourseClick(`${courseName}`)}
    >
      <div className="relative">
        <Link to="">
          <img
            className="rounded-lg h-48"
            src={courseThumbnailSrc}
            alt="courseThumbnail"
          />
        </Link>
        <div className="absolute bottom-2 right-4 text-white rounded-xl p-2 w-36  bg-red-500 text-center font-bold text-xl">
          {price} Da
        </div>
      </div>

      <div className="p-1">
        <Link to="" className="absolute flex items-center ml-2 mb-2">
          <img
            className="w-12 h-12 rounded-full inline-block"
            src={instructorAvtr}
            alt="instructorAvatar"
          />
          <div className="ml-2">
            <p className="mb-0 font-medium text-gray-800 dark:text-gray-800 hover:text-white">
              {instructor}
            </p>
            <p className="text-gray-500 text-sm">{instructorJob}</p>
          </div>
        </Link>
        <h5 className="ml-2 mt-14 text-lg font-medium tracking-tight text-gray-900">
          {courseName}
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
        <button className="rounded-full border-4 m-2 border-bluePal px-8 p-2 hover:bg-bluePal hover:text-white text-bluePal font-bold">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
