import React, { useState } from "react";
interface CourseFilterProps {
  onFilter: (searchTerm: string) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [sortBy, setSortBy] = useState("date created"); // State for select input

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onFilter(newSearchTerm); // Call the onFilter prop with the new search term
  };


  const handleSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4 p-4 mb-4">
      <input
        type="text"
        placeholder="Search Your Courses"
        className="border rounded w-2/3 text-sm p-2"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <select
        id="status"
        className="border rounded bg-white text-gray-500 w-1/3 text-sm p-2"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="date created">Date Created</option>
        <option value="newest">Newest</option>
        <option value="high rated">High Rated</option>
        <option value="low rated">Low Rated</option>
        <option value="high earned">High Earned</option>
      </select>
    </div>
  );
};

export default CourseFilter;
