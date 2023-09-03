import React, { useState } from "react";
import {
  FaBook,
  FaClock,
  FaEye,
  FaHeart,
  FaMoneyBillAlt,
  FaShare,
  FaShoppingCart,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AcademicCourseDetailsProps } from "../../constants/interfaces";
import { courses_year1_arabic } from "../../data/primarySchool/courses_year1_arabic";
import { courses_year1_math } from "../../data/primarySchool/courses_year1_math";
import { courses_year1_tech } from "../../data/primarySchool/courses_year1_tech";
import AcademicCourseDetailsSection from "../AcademicCourseDetailsSection/AcademicCourseDetailsSection";
import CourseContent from "../CourseContent/CourseContent";
import CourseContentCard from "../CourseContentCard/CourseContentCard";
import NavBar from "../navBar/NavBar";
import PathPage from "../PathPage/PathPage";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const AcademicCourseDetails: React.FC<AcademicCourseDetailsProps> = ({
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
  subject,
}) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleContentExpansion = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <div>
      <NavBar />
      <div className="lg:mx-[80px] text-right  mx-[12px] mt-16 space-y-10">
        <h2
          className="text-2xl"
          style={{ fontFamily: "Tajawal", fontWeight: 600 }}
        >
          {courseName}
        </h2>
        <p className="text-sm text-gray-500">المادة: {subject} </p>
        <div className="lg:flex lg:space-x-10 md:space-x-8 justify-between">
          <div className="mt-0 ml-0">
            <AcademicCourseDetailsSection
              courseName={courseName}
              instructor={instructor}
              instructorAvtr={""}
              rating={rating}
              views={views}
              price={price}
              courseThumbnailSrc={""}
              instructorJob={instructorJob}
              numLessons={numLessons}
              duration={duration}
              subject={subject}
            />
          </div>

          <div className="mr-0 mt-0 flex-1">
            <VideoPlayer /> {/* Display video player */}
            <div className="mt-6 space-y-4">
              <p className="text-emerald-500 underline underline-offset-[23px]">
                محتويات الدورة
              </p>
              <hr className="my-0.5" />
              <CourseContent />
              {/* Display course content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AcademicCourseDetailsPage = () => {
  // Get the courseId from the route parameters
  const { courseId } = useParams();

  // Initialize an empty course variable
  let course;

  if (courseId) {
    const courseIdNumber = parseInt(courseId, 10);

    if (!isNaN(courseIdNumber)) {
      // Try to find the course in the math dataset
      course = courses_year1_math.find((c) => c.id === courseIdNumber);

      // If not found in the math dataset, try to find it in the Arabic dataset
      if (!course) {
        course = courses_year1_arabic.find((c) => c.id === courseIdNumber);
      }
      // If not found in the Arabic dataset, try to find it in the Tech dataset
      if (!course) {
        course = courses_year1_tech.find((c) => c.id === courseIdNumber);
      }

      if (!course) {
        // Handle cases where the course is not found
        return <div>Course not found</div>;
      }
    } else {
      // Handle cases where courseIdNumber is not a valid number
      return <div>Invalid course ID</div>;
    }
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  // Render the AcademicCourseDetails component with the selected course data
  return (
    <div>
      <AcademicCourseDetails
        courseName={course.title}
        instructor={course.instructor}
        instructorAvtr={course.instructorAvtr}
        rating={course.rating}
        views={course.views}
        price={course.price}
        courseThumbnailSrc={course.imageSrc}
        instructorJob={course.instructorJob}
        numLessons={0}
        duration={""}
        subject={course.subject}
      />
    </div>
  );
};

export default AcademicCourseDetailsPage;
