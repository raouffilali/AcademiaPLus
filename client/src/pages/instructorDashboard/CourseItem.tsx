import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

interface Course {
  id: number;
  title: string;
  students: number;
  rating: number;
  status: string;
  thumbnailUrl: string;
}

interface CourseItemProps {
  courses: Course[];
  onRemoveCourse: (id: number) => void;
  onEditCourse: (id: number) => void;
}

const CourseItem: React.FC<CourseItemProps> = ({
  courses,
  onRemoveCourse,
  onEditCourse,
}) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;

  const toggleMenu = (id: number) => {
    setExpandedMenuId((prevId) => (prevId === id ? null : id));
  };

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const displayedCourses = courses.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto bg-gray-50">
      <table className="min-w-full">
        <thead>
          <tr className="text-gray-800 text-sm ">
            <th className="text-left py-2 lg:px-4 px-32">Courses</th>
            <th className="text-left py-2 px-4">Students</th>
            <th className="text-left py-2 px-4">Rating</th>
            <th className="text-left py-2 px-4">Status</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <hr className="" />
        <tbody>
          {displayedCourses.map((course) => (
            <tr className="text-gray-500" key={course.id}>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <img
                    src={course.thumbnailUrl}
                    alt={`${course.title} Thumbnail`}
                    className="h-14 w-24 rounded-lg ml-0 mr-2"
                  />
                  <h3 className="text-sm text-gray-800 font-medium mb-2">
                    {course.title}
                  </h3>
                </div>
              </td>
              <td className="py-2 px-4 font-light text-sm">
                {course.students}
              </td>
              <td className="py-2 px-4 font-light text-sm">
                {Array.from({ length: Math.floor(course.rating) }).map(
                  (_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-500 text-xs font-light inline-block mr-1"
                    />
                  )
                )}
                ({course.rating})
              </td>
              <td className="py-2 px-4 text-sm">
                {course.status === "pending" ? (
                  <span className="bg-orange-500 text-white px-2 py-1 rounded">
                    {course.status}
                  </span>
                ) : course.status === "live" ? (
                  <span className="bg-green-500 text-white px-2 py-1 rounded">
                    {course.status}
                  </span>
                ) : (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded">
                    {course.status}
                  </span>
                )}
              </td>

              <td className="py-2 px-4 relative">
                <button
                  onClick={() => toggleMenu(course.id)}
                  className="focus:outline-none"
                >
                  <BsThreeDotsVertical />
                </button>
                {expandedMenuId === course.id && (
                  <div
                    className="absolute bg-white border rounded-lg p-4 text-sm shadow-md"
                    style={{ transform: "translateX(-100%)" }}
                  >
                    <p className="text-gray-500 text-xs px-4 pt-2 font-mono">
                      SETTINGS
                    </p>
                    <button
                      onClick={() => onEditCourse(course.id)}
                      className="block w-full px-4 py-2 text-gray-800 hover:text-bluePal hover:bg-slate-100 focus:outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onRemoveCourse(course.id)}
                      className="block w-full px-4 py-2 text-gray-800 hover:text-redPal hover:bg-slate-100 focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseItem;
