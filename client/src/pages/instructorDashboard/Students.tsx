import React, { useState } from "react";
import { FaDownload, FaEnvelope, FaTh, FaList } from "react-icons/fa";
import Pagination from "../../components/Pagination/Pagination";
import StudentCard from "../../components/StudentCard/StudentCard";
import { studentsData } from "../../data/studentsData";

const Students = () => {
  const [currentViewType, setCurrentViewType] = useState<"grid" | "list">(
    "grid"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const filteredStudents = studentsData.filter((student) =>
    student.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = () => {
    // Implement CSV export logic
  };

  const indexOfLastStudent = currentPage * itemsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - itemsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);


  return (
    <div className="mb-6 space-y-6 ">
      <div className=" bg-white shadow rounded-md   p-4">
        <div className="flex">
          <div className="ml-0">
            {" "}
            <p className="text-lg font-medium">Students</p>
            <p className="text-gray-500 text-sm">
              Search and manage your students here.
            </p>
          </div>
          <div className="flex items-center mr-0 space-x-2">
            <button
              className={`text-xl ${
                currentViewType === "grid" ? "text-redPal" : "text-gray-400"
              } hover:text-redPal focus:outline-none`}
              onClick={() => setCurrentViewType("grid")}
            >
              <FaTh />
            </button>
            <button
              className={`text-xl ${
                currentViewType === "list" ? "text-redPal" : "text-gray-400"
              } hover:text-redPal focus:outline-none`}
              onClick={() => setCurrentViewType("list")}
            >
              <FaList />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded border-gray-300 text-sm ml-0 lg:w-4/5"
        />
        <button
          onClick={exportToCSV}
          className="ml-2 text-sm font-medium px-4 border-2 lg:w-1/5 text-bluePal hover:text-white hover:bg-bluePal border-bluePal rounded"
        >
          <FaDownload /> Export to CSV...
        </button>
      </div>
      <hr className="py-2" />
      <div
        className={`${
          currentViewType === "grid"
            ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 "
            : " py-2"
        }`}
      >
        {currentStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            viewType={currentViewType}
          />
        ))}
      </div>
      <Pagination
        totalItems={filteredStudents.length}
        itemsPerPage={itemsPerPage}
        // currentPage={currentPage}
        // onPageChange={paginate}
      />
    </div>
  );
};

export default Students;
