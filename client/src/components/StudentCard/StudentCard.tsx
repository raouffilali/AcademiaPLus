// StudentCard.tsx
import React from "react";
import { FaComment, FaEnvelope, FaMapMarker, FaUser } from "react-icons/fa";

interface StudentCardProps {
  student: {
    id: number;
    avatar: string;
    username: string;
    location: string;
    dateEnrolled: string;
    progress: number;
  };
  viewType: "grid" | "list"; // Specify the prop type
}

const StudentCard: React.FC<StudentCardProps> = ({ student, viewType }) => {
  return (
    <div
      className={`bg-white shadow rounded border-b p-2 ${
        viewType === "grid" ? "w-60" : ""
      }`}
    >
      {viewType === "grid" ? (
        <div className="flex flex-col ">
          <img
            src={student.avatar}
            alt={`${student.username} Avatar`}
            className="h-14 w-14 rounded-full mb-2"
          />
          <p className="text-gray-800 items-center text-center font-medium mb-2">
            {student.username}
          </p>
          <div className="text-gray-500 text-sm">
            <FaMapMarker className="mr-1 inline" />
            {student.location}
          </div>
          <div className="text-gray-500 text-sm my-2">
            <button className="border border-gray-800 rounded hover:bg-gray-800 hover:text-white  p-1">
              <FaEnvelope className="mr-1 inline" />
              Message
            </button>
          </div>
          <hr className="py-1 mt-2" />
          <p className="text-xs ml-0 text-gray-500 font-mono my-2 ">
            Date Enrolled:{" "}
            <span className="text-gray-900">{student.dateEnrolled}</span>{" "}
          </p>
          <p className="text-xs ml-0 text-gray-500 font-mono">
            Progress:{" "}
            <span className="text-green-500">{student.progress}%</span>{" "}
          </p>
        </div>
      ) : (
        // Table structure for "list" view
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-gray-800  text-sm">
                <th className="text-left py-2 lg:px-4 px-6">Name</th>
                <th className="text-left py-2 px-4">Enrolled</th>
                <th className="text-left py-2 px-4">Progress</th>
                <th className="text-left py-2 px-4">Q/A</th>
                <th className="text-left py-2 px-4">Location</th>
                <th className="text-left py-2 px-4">Message</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-500 text-xs">
                <td className=" flex py-2 px-4">
                  {" "}
                  <img
                    src={student.avatar}
                    alt={`${student.username} Avatar`}
                    className="h-10 w-10 rounded-full ml-0 mb-2"
                  />
                  <span className="text-sm font-medium text-black">
                    {student.username}
                  </span>
                </td>
                <td className="py-2 px-4">{student.dateEnrolled}</td>
                <td className="py-2 px-4">{student.progress}%</td>
                <td className="py-2 px-4">
                  <FaComment className="inline" /> 10
                </td>
                <td className="py-2 px-4">{student.location}</td>
                <td className="py-2 px-4">
                  <div className="text-gray-500 text-sm my-2">
                    <button className="border border-gray-800 rounded hover:bg-gray-800 hover:text-white  p-1">
                      <FaEnvelope className="mr-1 inline" />
                      Message
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
