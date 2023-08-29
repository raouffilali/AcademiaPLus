import { useState } from "react";
import CourseFilter from "../../components/CourseFilter/CourseFilter";
import Pagination from "../../components/Pagination/Pagination";
import { bestSellingCoursesData } from "../../data/bestSellingCoursesData";
import { instructorCourses } from "../../data/instructorCourses";
import CourseItem from "./CourseItem";

const Courses = ({}) => {
  const [filteredCourses, setFilteredCourses] = useState(instructorCourses);
  // Event handler for removing a course
  const handleRemoveCourse = (id: number) => {
    // Implement the logic to remove the course with the given id
    // Update the bestSellingCourses array accordingly
  };

  // Event handler for editing a course
  const handleEditCourse = (id: number) => {
    // Implement the logic to edit the course with the given id
    // You might navigate to an edit page or open a modal
  };
  // Placeholder data, you can replace this with actual courses data
  // Event handler for filtering courses
  const handleFilterCourses = (searchTerm: string) => {
    const filtered = instructorCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };
    

  return (
    <div className="bg-white shadow pb-4 mb-6">
      <h2 className="text-xl px-4 pt-4 font-semibold  ">Courses</h2>
      <p className="px-4 py-2 text-sm text-gray-500">
        Manage your courses and its update like live, draft and pending.
      </p>
      <hr className="py-2" />
      <CourseFilter onFilter={handleFilterCourses} />
      <div className="">
        <CourseItem
            courses={filteredCourses}
          onRemoveCourse={handleRemoveCourse}
          onEditCourse={handleEditCourse}
        />
      </div>
      <Pagination
        totalItems={instructorCourses.length} // Total number of courses
        itemsPerPage={6} // Number of courses per page
      />
    </div>
  );
};
export default Courses;
