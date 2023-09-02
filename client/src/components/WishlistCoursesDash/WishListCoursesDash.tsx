import React from "react";
import { courses } from "../../constants";
import WishList from "../../pages/WishList/WishList";
import CourseCard from "../courseCard/CourseCard";

interface WishListCoursesProps {
  wishlistCourses: Course[];
}

interface Course {
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;
  category: string;
  price: number;
  courseThumbnailSrc: string;
  instructorJob: string;
  numLessons?: number; // Make optional
  duration?: string; // Make optional
}

const WishListCoursesDash: React.FC<WishListCoursesProps> = ({
  wishlistCourses,
}) => {
  return (
    <div className="container mb-6 lg:w-[780px]">
      {/* Display wishlist courses */}
      <div className="mt-4  grid grid-cols-1  md:grid-cols-3 gap-5">
        {wishlistCourses.slice(0, 6).map((course, index) => (
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
            numLessons={course.numLessons || 0} // Provide default value
            duration={course.duration || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default WishListCoursesDash;
