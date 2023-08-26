import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface Student {
    id: number;
    avatar: string;
    username: string;
    location: string;
    dateEnrolled: string;
    progress: number;
  }
  
  interface StudentCardProps {
    student: Student;
    viewType: "grid" | "list";
  }
  
  const StudentCard: React.FC<StudentCardProps> = ({ student, viewType }) => {
  return (
    <div
      className={`bg-gray-100 p-4 rounded-md shadow-md ${
        viewType === "grid" ? "flex flex-col justify-between" : "mb-4"
      }`}
    >
      <div className="flex items-center">
        <img
          src={student.avatar}
          alt={`${student.username} Avatar`}
          className="h-14 w-14 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">{student.username}</p>
          <p className="text-gray-500 text-sm">{student.location}</p>
          <p className="text-gray-500 text-sm">Enrolled on {student.dateEnrolled}</p>
          <p className="text-gray-500 text-sm">{student.progress}% Progress</p>
        </div>
      </div>
      <div className="flex mt-4">
        <button className="focus:outline-none">
          <FaEnvelope />
        </button>
        {/* Add more buttons and info for Q/A, message, etc. */}
      </div>
    </div>
  );
};

export default StudentCard;
