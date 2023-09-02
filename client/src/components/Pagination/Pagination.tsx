import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const generatePaginationControls = () => {
    const controls = [];

    // Always show the back arrow button
    controls.push(
      <button
        key="prev"
        className="px-4 py-2 border border-red-100 rounded-md text-red-400"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      controls.push(
        <button
          key={i}
          className={`px-4 py-2 border border-red-100 rounded-md ${
            i === currentPage ? "bg-red-400 text-white" : "text-red-400"
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    // Always show the forward arrow button
    controls.push(
      <button
        key="next"
        className="px-4 py-2 border border-red-100 rounded-md text-red-400"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    );

    return controls;
  };

  return (
    <div className="mt-4 flex justify-center">
      {/* Pagination controls */}
      <div className="flex mt-4 space-x-2">{generatePaginationControls()}</div>
    </div>
  );
};

export default Pagination;