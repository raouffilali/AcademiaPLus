import React from "react";
import EnrollCourse from "../EnrollCourse/EnrollCourse";

interface CourseDetailProps {
  instructor: string;
  instructorAvatar: string;
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
  instructorAvatar,
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
      <div className="flex space-x-40 ">
        <div className="flex space-x-3">
          <img
            src={instructorAvatar}
            alt="Instructor Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">{instructor}</h2>
            <p className=" text-sm font-normal capitalize">{speciality}</p>
          </div>
          {/* Rating */}
          <div className="flex">
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-buttons mr-1 ${
                    index < rating ? "opacity-100" : "opacity-30"
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <span className="text-">{rating}</span>
            <span className="text-sm">({numRatings})</span>
          </div>
        </div>
        <div className="rounded-full text-center text-white text-md p-2 w-40 text-[13px] hover:bg-buttonsHover bg-buttons uppercase">
          {category}
        </div>
      </div>
      
        <p className=" text-[32px]">{courseName}</p>
        <p className=" text-[14px] font-light mb-8 w-[630px]">{description}</p>

        <div className="absolute flex font-semibold space-x-4 text-sm ">
          <img src="/assets/lesson.svg" alt="lesson" />
          <span>{numLessons}+ Lesson</span>
          <img src="/assets/timer-icon.svg" alt="timer" />
          <span>{duration}</span>
          <img src="/assets/people.svg" alt="people" />
          <span>{studentsEnrolled} Students Enrolled </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
