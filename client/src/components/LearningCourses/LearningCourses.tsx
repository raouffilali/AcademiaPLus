import React from "react";
import CourseCard from "../courseCard/CourseCard";

interface LearningCoursesProps {
  learningCourses: CourseWithProgress[];
}

interface CourseWithProgress {
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
    progress:number;
}

const LearningCourses: React.FC<LearningCoursesProps> = ({ learningCourses }) => {
  return (
    <div className="container mb-6 lg:w-[780px]">
      {/* Display learning courses with progress */}
      <div className=" container mt-4 grid grid-cols-1  md:grid-cols-3 gap-5">
            {learningCourses.slice(0, 6).map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                instructor={course.instructor}
                rating={course.rating}
                views={course.views}
                category={course.category}
                price={course.price.toString()}
                courseThumbnailSrc={course.courseThumbnailSrc}
                instructorAvtr={course.instructorAvtr}
                instructorJob={course.instructorJob}
                numLessons={0}
                duration={""}
                progress={course.progress}
                isLearningCourses={true} // Pass the prop here
              />
            ))}
          </div>
    </div>
  );
};

export default LearningCourses;
