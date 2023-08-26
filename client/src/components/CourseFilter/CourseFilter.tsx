import React from "react";

const CourseFilter = () => {
  return (
    <div className=" flex items-center space-x-4 p-4 mb-4">
      <input
        type="text"
        placeholder="Search Your Courses"
        className="border rounded w-2/3 text-sm p-2"
        // Add onChange handler
      />

      <select
        id="status"
        className="border rounded bg-white text-gray-500 w-1/3 text-sm p-2"
        // Add onChange handler
      >
        <option value="date created">Date Created</option>
        <option value="neweset">Neweset</option>
        <option value="high rated">High Rated</option>
        <option value="low rated">Low Rated</option>
        <option value="high earned">high Earned</option>
      </select>
    </div>
  );
};

export default CourseFilter;
