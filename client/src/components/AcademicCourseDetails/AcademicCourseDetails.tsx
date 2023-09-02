import React from "react";
import { useParams } from "react-router-dom";
import { courses_year1_arabic } from "../../data/primarySchoolCourses/courses_year1_arabic";
import { courses_year1_math } from "../../data/primarySchoolCourses/courses_year1_math";



interface AcademicCourseDetailsProps {
  // Define the props you need for the details page
  // These should match the properties of your course data
  // Example:
  courseName: string;
  instructor: string;
  instructorAvtr: string;
  rating: number;
  views: number;
  price: string;
  courseThumbnailSrc: string;
  instructorJob: string;
}

const AcademicCourseDetails: React.FC<AcademicCourseDetailsProps> = ({
  courseName,
  instructor,
  instructorAvtr,
  rating,
  views,
  price,
  courseThumbnailSrc,
  instructorJob,
}) => {
  return (
    <div>
      {/* Display course details */}
      <h2>{courseName}</h2>
      <p>Instructor: {instructor}</p>
      <p>Rating: {rating}</p>
      {/* Add other course details here */}
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
      />
    </div>
  );
};

export default AcademicCourseDetailsPage;
