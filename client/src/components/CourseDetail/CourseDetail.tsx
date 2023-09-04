import React from "react";
import { FaStar } from "react-icons/fa";
import EnrollCourse from "../EnrollCourse/EnrollCourse";

interface CourseDetailProps {
  instructor: string;
  instructorAvtr: string;
  speciality: string;
  rating: number;
  numRatings: number;
  category: string;
  courseName: string;
  description: string;
  numLessons: number;
  duration: string;
  studentsEnrolled: number;
}

const CourseDetail: React.FC<CourseDetailProps> = ({
  instructor,
  instructorAvtr,
  speciality,
  rating,
  numRatings,
  category,
  courseName,
  description,
  numLessons,
  duration,
  studentsEnrolled,
}) => {
  return (
    <div className="flex flex-col space-y-4  text-white ">
      <div className="relative">
      <div className="flex  ">
        <div className="flex ml-0 ">
          <img
            src={instructorAvtr}
            alt="Instructor Avatar"
            className="w-12 h-12 mr-3 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold lg:text-base text-sm">{instructor}</h2>
            <p className=" text-sm font-normal capitalize">{speciality}</p>
          </div>
          {/* Rating */}
          <div className="flex">
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
            <span className="text-">{rating}</span>
            <span className="text-sm">({numRatings})</span>
          </div>
        </div>
        <div className="rounded-full text-center text-white lg:text-md  text-sm lg:py-1  lg:px-9 font-medium  hover:bg-yellow-600 bg-goldPal uppercase">
          {category}
        </div>
      </div>
      
        <p className=" lg:text-[32px]">{courseName}</p>
        <p className=" lg:text-[14px] font-light mb-8 text-sm lg:w-[630px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et, ipsum magni consequuntur aperiam architecto tempore numquam provident error soluta. {description}</p>

        <div className="absolute flex font-semibold space-x-4 text-sm ">
          <img src="/assets/lesson.svg" alt="lesson" />
          <span>{numLessons}+ Lesson</span>
          <img src="/assets/timer-icon.svg" alt="timer" />
          <span>{duration }9h30</span>
          <img src="/assets/people.svg" alt="people" />
          <span>{studentsEnrolled} Students Enrolled </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
