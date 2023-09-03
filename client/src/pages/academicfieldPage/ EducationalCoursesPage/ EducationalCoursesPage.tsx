import React, { useState, useEffect } from "react";
import AcademicCourseCard from "../../../components/AcademicCourseCard/AcademicCourseCard";
import CustomCard from "../../../components/CustomCard/CustomCard";
import { NavBar } from "../../../constants";
import { courses_year1_arabic } from "../../../data/primarySchoolCourses/courses_year1_arabic";
import { Link, useLocation, useNavigate } from "react-router-dom";
// Import your course data here
import { courses_year1_math } from "../../../data/primarySchoolCourses/courses_year1_math";
import { courses_year1_tech } from "../../../data/primarySchoolCourses/courses_year1_tech";

// Add similar imports for other combinations of year and subject

interface Course {
  id: number;
  title: string;
  imageSrc: string;
  rating: number;
  year: string;
  subject: string;
  price: string;
  views:number;
  instructor:string;
  instructorAvtr:string;
  instructorJob:string;
  lab?:boolean;
}

function EducationalCoursesPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialYear = queryParams.get("year") || "السنة الأولى";
  const initialSubject = queryParams.get("subject") || "الرياضيات";

  const [selectedYear, setSelectedYear] = useState<string>(initialYear);
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const coursesPerPage: number = 6;
  const navigate = useNavigate();
// Define a function to find course data by ID
const findCourseDataById = (courseId: number) => {
  // Search for the course in all your course data arrays
  const allCourseData = [...courses_year1_math, ...courses_year1_arabic /* Add other course data arrays */];

  // Find the course with the matching ID
  const selectedCourse = allCourseData.find((course) => course.id === courseId);

  return selectedCourse;
};
  const handleCourseClick = (courseId: any) => {
    // Use courseId to find the selected course data
    const selectedCourse = findCourseDataById(courseId); // Implement this function
    navigate(`/course-details/${courseId}`, { state: { courseData: selectedCourse } });
  };
  const [lab, setLab] = useState(false);

  // Function to filter courses based on selectedYear and selectedSubject
 // Function to filter courses based on selectedYear, selectedSubject, and lab
const filterCourses = () => {
  // Logic to filter courses based on selectedYear, selectedSubject, and lab
  let filtered: Course[] = [];
  if (selectedYear === "السنة الأولى" && selectedSubject === "الرياضيات") {
    filtered = [...courses_year1_math, ...courses_year1_arabic];
  } else if (selectedYear === "السنة الأولى" && selectedSubject === "العربية") {
    filtered = courses_year1_arabic;
  } else if (selectedYear === "السنة الأولى" && selectedSubject === "العلوم التكنولوجية") {
    filtered = courses_year1_tech;
  }
  // Add similar conditions for other combinations of year and subject

  // Apply search query filter
  if (searchQuery !== "") {
    filtered = filtered.filter((course) => course.title.includes(searchQuery));
  }

  // Filter based on the lab property
  if (lab) {
    filtered = filtered.filter((course) => course.lab === true);
  }

  setFilteredCourses(filtered);
};
// Inside your component, you can toggle the lab filter based on user interactions
const handleLabFilterToggle = () => {
  setLab(!lab);
};

  useEffect(() => {
    filterCourses();
  }, [selectedYear, selectedSubject, searchQuery]);

  // Pagination logic
  const indexOfLastCourse: number = currentPage * coursesPerPage;
  const indexOfFirstCourse: number = indexOfLastCourse - coursesPerPage;
  const currentCourses: Course[] = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <NavBar />
      <div style={{ fontFamily: "Tajawal" }}>
        <div className="lg:hidden md:hidden sm:hidden">
          <video className="mt-6 h-64 w-full " autoPlay muted preload="auto">
            <source src="assets/videos/dawarat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-blue-50 p-4 bg-[url(assets/bg/academic_bg.png)] hidden sm:block mt-6">
          <div className="mx-[80px]">
            <img
              className=" h-72"
              src="assets/academicfield/dawra.png"
              alt=""
            />
            <p className="font-bold text-3xl text-gray-800 text-center  ">
              الدورات التعليمية
            </p>
          </div>
        </div>
        <div className="lg:mx-[80px] mx-[12px]">
          {/* Add search bar and filter options here */}
          <div className="w-full flex space-x-4 mt-6">
            <input
              type="text"
              placeholder="ابحث عن دورة..."
              className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Filter options for year and subject */}
            <select
              className="w-full py-2 px-4 bg-white mb-4 border border-gray-300 rounded-xl"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {/* Add options for other years */}
            </select>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 ">
            {currentCourses.map((course) => (
              <Link to={`/course-details/${course.id}`} onClick={() => handleCourseClick(course.id)}>
              <AcademicCourseCard
                key={course.id}
                courseName={course.title}
                instructor={course.instructor}
                instructorAvtr={course.instructorAvtr}
                rating={course.rating}
                views={0}
                price={course.price}
                courseThumbnailSrc={course.imageSrc}
                instructorJob={course.instructorJob}
                numLessons={0}
                duration={""}
                year={course.year}
                subject={course.subject}
                lab={course.lab}
              
              />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex mb-6 justify-center">
            {Array.from({
              length: Math.ceil(filteredCourses.length / coursesPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-2 py-2 px-4 rounded-full border border-emerald-500 hover:bg-emerald-500 hover:text-white ${
                  currentPage === index + 1 ? "bg-emerald-500 text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationalCoursesPage;
