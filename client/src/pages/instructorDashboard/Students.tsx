import React, { useState } from "react";
import { FaDownload, FaEnvelope, FaTh, FaList } from "react-icons/fa";
import StudentCard from "../../components/StudentCard/StudentCard";
import { studentsData } from "../../data/studentsData";



const Students = () => {
  const [currentViewType, setCurrentViewType] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  // Default view type is "grid"

  const filteredStudents = studentsData.filter((student) =>
    student.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    // Implement CSV export logic
  };

  return (
    <div className="bg-white shadow rounded-md mb-6">
      <div className="flex p-4">
        <div className="flex-1">
          <p className="text-lg font-medium">Students</p>
          <p className="text-gray-500 text-sm">
            Search and manage your students here.
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1 border rounded border-gray-300 text-sm w-40"
          />
          <button
            onClick={exportToCSV}
            className="ml-2 text-sm font-medium px-4 border-2 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded-lg"
          >
            <FaDownload /> Export to CSV...
          </button>
        </div>
        <div className="flex items-center ml-4 space-x-2">
          <button
            className={`text-xl ${currentViewType === "grid" ? "text-blue-500" : "text-gray-400"} hover:text-blue-500 focus:outline-none`}
            onClick={() => setCurrentViewType("grid")}
          >
            <FaTh />
          </button>
          <button
            className={`text-xl ${currentViewType === "list" ? "text-blue-500" : "text-gray-400"} hover:text-blue-500 focus:outline-none`}
            onClick={() => setCurrentViewType("list")}
          >
            <FaList />
          </button>
        </div>
      </div>
      <hr className="py-2" />
      <div className={`${currentViewType === "grid" ? "grid grid-cols-2 gap-4 p-4" : "px-4 py-2"}`}>
      {filteredStudents.map((student) => (
  <StudentCard key={student.id} student={student} viewType={currentViewType} />
))}
      </div>
    </div>
  );
};

export default Students;
