import React, { useState, useEffect, useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Footer } from "../../constants";
import NavBar from "../../components/navBar/NavBar";
import PathPage from "../../components/PathPage/PathPage";
import { FaAngleDown, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import courses from "../../data/courses";
import CourseCard from "../../components/courseCard/CourseCard";
import latestCourses from "./latestCoursesData";
import UrgentNews from "../../components/urgenNews/UrgentNews";

interface Option {
  label: string;
  value: string;
}
interface Category {
  category: string;
  numCourses: number;
}

function AllCourses() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const [activePage, setActivePage] = useState(1);

  const handleCheckboxClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const goToPage = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
    setActivePage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const generatePaginationControls = () => {
    const controls = [];
  
    // Always show the back arrow button
    controls.push(
      <button
        key="prev"
        className="px-4 py-2 border border-red-100 rounded-md text-red-400"
        onClick={() => goToPage(activePage - 1)}
        disabled={activePage === 1}
      >
        <IoIosArrowBack />
      </button>
    );
  
    for (let i = 1; i <= totalPages; i++) {
      controls.push(
        <button
          key={i}
          className={`px-4 py-2 border border-red-100 rounded-md ${
            i === activePage ? "bg-red-400 text-white" : "text-red-400"
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
        onClick={() => goToPage(activePage + 1)}
        disabled={activePage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    );
  
    return controls;
  };
  

  const options: Option[] = [
    { label: "Trending", value: "trending" },
    { label: "Newly Published", value: "new" },
    { label: "Top Rated", value: "top" },
  ];
  const categories: Category[] = [
    { category: "Graphics & Design", numCourses: 10 },
    { category: "Fitness & Art", numCourses: 15 },
    { category: "Marketing", numCourses: 20 },
    { category: "IT & Software", numCourses: 8 },
    { category: "Business", numCourses: 16 },
    { category: "Video & Animation", numCourses: 13 },
    { category: "Programming & Tech", numCourses: 20 },
    { category: "Primary School", numCourses: 82 },
    { category: "Middle School", numCourses:75 },
    { category: "High Shool", numCourses: 124 },
  ];
  const instructors = [
    { instructor: "Sanaa Ardjane", numCourses: 22 },
    { instructor: "Raouf Filali", numCourses: 19 },
    { instructor: "Fertas Islam", numCourses: 7 },
    { instructor: "Dana Romaissa", numCourses: 32 },
  ];
  const prices = [
    { price: "All", numCourses: 22 },
    { price: "Paid", numCourses: 14 },
    { price: "Free", numCourses: 8 },
  ];

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as EventTarget & Element;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !target.classList.contains("dropdown")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleOptionClick = (value: Option) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      <UrgentNews />
      <NavBar />
      <PathPage />
      <div className="my-12 bg-neutral-50 h-full">
        <div>
          
        </div>
        <div className="py-16 mx-[80px] flex space-x-6  ">
          <div className="flex-none w-[78%] space-y-8 h-full ">
            <div className="flex">
              <p className=" w-1/3 text-md my-2 items-center ">
                Showing 1-9 of results
              </p>
              <div></div>
              <div className={`searchBar flex relative `}>
                <input
                  className="border border-gray-200 border-solid text-sm border-1 rounded-md w-44 text-gray-800 px-4 py-2 focus:outline-none"
                  type="text"
                  placeholder="Search course .."
                />
                <div className=" absolute top-1/2 transform -translate-y-1/2 right-3">
                  <FaSearch size={14} color="#F6697B" />
                </div>{" "}
              </div>
              <div
                className="course-filter   border border-gray-200 bg-white border-solid text-sm border-1 rounded-md w-44 text-gray-800 cursor-pointer py-2 focus:outline-none "
                ref={dropdownRef}
              >
                <div className="dropdown flex " onClick={toggleDropdown}>
                  <span>{selectedOption ? selectedOption.label : "None"}</span>
                  {isDropdownOpen ? (
                    <FaChevronUp size={10} />
                  ) : (
                    <FaChevronDown size={10} />
                  )}
                </div>
                {isDropdownOpen && (
                  <div className="absolute group-hover:md:block hover:md:block">
                    <div className="py-2">
                      <div
                        className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45 "
                      ></div>
                    </div>
                    <ul className="dropdown-options  bg-white rounded-sm p-5 ">
                      {options.map((option) => (
                        <li
                          key={option.value}
                          className={
                            option.value === selectedOption?.value
                              ? "selected"
                              : "text-sm hover:bg-blue-50 py-2 text-gray-600 my-1"
                          }
                          onClick={() => handleOptionClick(option)}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7">
              {courses
                .slice(
                  (currentPage - 1) * coursesPerPage,
                  currentPage * coursesPerPage
                )
                .map((course, index) => (
                  <CourseCard
                    key={index}
                    courseName={course.courseName}
                    instructor={course.instructor}
                    rating={course.rating}
                    views={course.views}
                    category={course.category}
                    price={course.price.toString()}
                    courseThumbnailSrc={course.courseThumbnailSrc}
                    instructorAvtr={course.instructorAvtr}
                    instructorJob={course.instructorJob}
                    numLessons={0}
                    duration={""}
                  />
                ))}
            </div>
            {/* pagination */}
            <div className="flex  mt-4 space-x-2">
              {generatePaginationControls()}
            </div>
          </div>
          <div className="flex-none w-[22%] space-y-8 ">
            <div className="flex justify-between  text-gray-800">
              <p className="text-xl font-medium flex ">
                <FiFilter /> Filters
              </p>
              <p className="text-sm font-medium">CLEAR</p>
            </div>
            <div className="border space-y-5 border-gray-200 rounded-lg bg-white px-4 py-2  h-full">
              <div className="flex md:space-x-8">
                <p className="text-md font-semibold">Courses categories </p>
                <FaChevronDown size={12} />
              </div>
              <div className=" pt-2 pb-4 ">
                {categories.map((category) => (
                  <div
                    key={category.category}
                    className=" items-center pt-2 pb-4 space-x-2 cursor-pointer"
                  >
                    <div
                      onClick={() => handleCheckboxClick(category.category)}
                    ></div>
                    <input
                      type="checkbox"
                      id={`checkbox-${category.category}`}
                      className="form-checkbox h-4 w-4  accent-red-500 checked:bg-red-500 focus:ring-red-500 duration-300"
                    />
                    <label
                      htmlFor={`checkbox-${category.category}`}
                      className="text-sm text-gray-500 "
                    >
                      {category.category} ({category.numCourses})
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border space-y-5 border-gray-200 rounded-lg bg-white px-4 py-2  h-full">
              <div className="flex md:space-x-24">
                <p className="text-md font-semibold">Instructors </p>
                <FaChevronDown size={12} />
              </div>
              <div className=" pt-2 pb-4 ">
                {instructors.map((instructor) => (
                  <div
                    key={instructor.instructor}
                    className=" items-center pt-2 pb-4 space-x-2 cursor-pointer"
                  >
                    <div
                      onClick={() => handleCheckboxClick(instructor.instructor)}
                    ></div>
                    <input
                      type="checkbox"
                      id={`checkbox-${instructor.instructor}`}
                      className="form-checkbox  h-4 w-4  accent-red-500 checked:bg-red-500 focus:ring-red-500 duration-300"
                    />
                    <label
                      htmlFor={`checkbox-${instructor.instructor}`}
                      className="text-sm text-gray-500 "
                    >
                      {instructor.instructor} ({instructor.numCourses})
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border space-y-5 border-gray-200 rounded-lg bg-white px-4 py-2 h-full">
              <div className="flex md:space-x-36">
                <p className="text-md font-semibold">Price </p>
                <FaChevronDown size={12} />
              </div>
              <div className="pt-2 pb-4">
                {prices.map((price) => (
                  <div
                    key={price.price}
                    className="items-center pt-2 pb-4 space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      id={`radio-${price.price}`}
                      name="priceRadioGroup" // Add the same name for radio inputs in the group
                      className="form-radio h-4 w-4 accent-red-500 checked:bg-red-500 focus:ring-red-500 duration-300"
                    />
                    <label
                      htmlFor={`radio-${price.price}`}
                      className="text-sm text-gray-500"
                    >
                      {price.price} ({price.numCourses})
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border space-y-5 border-gray-200 rounded-lg bg-white px-4 py-2 h-full">
              <p className="font-medium">Latest Courses</p>
              <div className="pt-2 pb-4">
                {latestCourses.slice(0, 5).map((course: any) => (
                  <div
                    key={course.id}
                    className="items-center flex pt-2 pb-4 space-x-4 cursor-pointer"
                  >
                    <img
                      src={course.thumbnail} // Replace with actual image path
                      alt={course.title}
                      className="h-16 w-16 rounded-md"
                    />
                    <div>
                      <p className="text-sm font-medium">{course.title}</p>
                      <p
                        className={
                          course.price === "Free"
                            ? "text-emerald-500"
                            : "text-red-500"
                        }
                      >
                        {course.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCourses;
