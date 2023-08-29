import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface Course {
  id: number;
  title: string;
  sales: number;
  amount: number;
  thumbnailUrl: string;
}

interface BestSellingCoursesProps {
  courses: Course[];
  onRemoveCourse: (id: number) => void;
  onEditCourse: (id: number) => void;
}

const BestSellingCourses: React.FC<BestSellingCoursesProps> = ({
  courses,
  onRemoveCourse,
  onEditCourse,
}) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="w-full  h-full bg-gray-50 rounded-b-lg shadow">
      <p className="text-sm p-4 rounded-t-lg bg-white font-semibold">
        Best Selling Courses
      </p>
      <hr className="py-4" />
      <div className="flex overflow-x-auto items-center text-sm">
        <table className="min-w-full">
          <thead>
           <tr className="text-gray-800">
              <th className="text-left py-2 lg:px-4 px-32">COURSES</th>
              <th className="text-left py-2 px-4 ">SALES</th>
              <th className="text-left py-2 px-4">AMOUNT</th>
        
            </tr></thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="py-2 text-gray-800 font-semibold flex items-center cursor-pointer hover:text-bluePal">
                  <img
                    src={course.thumbnailUrl}
                    alt={`${course.title} Thumbnail`}
                    className="h-14 w-24 rounded-md ml-4 mr-2"
                  />
                  {course.title}
                </td>
                <td className="py-2 px-4 text-gray-500">{course.sales}</td>
                <td className="py-2 px-4 text-gray-500">
                  ${course.amount.toFixed(2)}
                </td>
                <td className="py-2 px-4 relative">
                  <button
                    onClick={() =>
                      setExpandedMenuId(
                        (prevId) => (prevId === course.id ? null : course.id)
                      )
                    }
                    className="focus:outline-none"
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {expandedMenuId === course.id && (
                    <div
                      className="absolute top-0 right-0 left-4 mt-8 bg-white border  rounded-lg shadow-md"
                      style={{ transform: "translateX(-100%)" }}
                    >
                      <p className="text-gray-500 text-xs px-4 pt-2 font-mono">SETTINGS</p>
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
    </div>
  );
};

export default BestSellingCourses;