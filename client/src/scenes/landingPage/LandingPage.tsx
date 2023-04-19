import React, { useState,useEffect } from "react";
import { NavBar } from "../../components";
import FieldsCards from "../../components/fieldsCards/FieldsCards";
import CourseCard from "../../components/courseCard/CourseCard";
import { HiArrowSmRight } from "react-icons/hi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import courses from "../../components/courseCard/courses";
import Instructor from "../../components/instructor/Instructor";
import { instructors } from "../../components/instructor/instructors";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel"; 

type Tab = "popular" | "trending" | "new";
function LandingPage() {
  const [activeTab, setActiveTab] = useState("popular");
  // State to track the active tab
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    // Update the active tab state when a tab is clicked
  };
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const coursesPerPage = 4; // Number of courses to display per page

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //instructors slide
    const [startIndex, setStartIndex] = useState(0);

    const handleNextButtonClick = () => {
      setStartIndex((prevIndex) => prevIndex + 4);
    };

    const handlePrevButtonClick = () => {
      setStartIndex((prevIndex) => prevIndex - 4);
    };
  // useEffect(() => {
  //   // Use setInterval to automatically slide instructors every 3 seconds
  //   const interval = setInterval(() => {
  //     setStartIndex((prevIndex) =>
  //       prevIndex + 4 >= instructors.length ? 0 : prevIndex + 4
  //     );
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="bg-white overflow-hidden flex flex-col items-start relative pb-[755px]">
      <div className="px-[12px] py-0   items-start">
        <NavBar />
      </div>
      <div className=" w-full py-[18px] pr-[80px] pl-[80px] items-start ">
        <div className="mt-[196px] mr-[185px]">
          <button className="text-white absolute  top-[480px] bg-yelloPal rounded-full px-8 py-1 ">
            {" "}
            Try a demo
          </button>

          <p className=" font-Lato text-[42px] font-extrabold text-gray-800 flex absolute  left-20  top-[115px] ">
            Lets
            <br />
            E-learning
            <br />
            at your home
            <br />
            <br />
          </p>
          <p
            className={
              "h-[200px] w-[426px] font-Lato text-[16px] font-normal text-gray-500 flex items-center relative"
            }
          >
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it English.It is a long established
            fact that a reader will be distracted by the readab
            <br />
          </p>
          <div>
            <button className="border-[1px] flex items-center absolute left-[250px] top-[480px] text-yelloPal border-solid border-yelloPal rounded-full px-8 py-1   ">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-[8px] h-[8px] bg-DarkBluePal mt-[40px]  ml-[507px]  mr-[8px] rounded-full" />
        <div className="w-[8px] h-[8px] bg-gray-300 -mt-[8px] ml-[520px]  mr-[8px] rounded-full" />
        <img
          alt="presentation section picture"
          className="w-[604px] h-[567px] absolute inset-y-0 right-0 "
          src="./public/assets/sectionPic.png"
        />
        <p className=" mt-24 font-Lato text-[28px] font-extrabold text-gray-800">
          Academic Field
        </p>
        <FieldsCards />
        <p className=" mt-24 font-Lato text-[28px] font-extrabold text-gray-800">
          General Courses
        </p>
        <p className=" font-lato text-gray-500 text-[20px] flex">
          Choose from 10000 online video courses with new additions published
          every month
        </p>
        <div className="flex flex-start mb-[17px] mt-[17px] pl-[7px] font-Lato text-[20px] leading-normal cursor-pointer ">
          <p
            className={`mr-[46px] font-Lato ${
              activeTab === "popular"
                ? "border-b-2 border-black "
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("popular")}
          >
            Popular
          </p>
          <p
            className={`text-gray-500 mr-[46px] ${
              activeTab === "trending"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("trending")}
          >
            Trending
          </p>
          <p
            className={`mr-[640px] ${
              activeTab === "new"
                ? "border-b-2 border-black text-black "
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("new")}
          >
            New
          </p>
          <a href="/">
            <p className="flex items-center text-blueLink text-[18px]">
              Explore more <HiArrowSmRight className="mr-[3px]" />
            </p>
          </a>
        </div>
        <div>
          <hr className="border-gray-200 h-[0px] w-full mb-2 mt-0" />
          {activeTab === "popular" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Popular" tab */}
              {/* Display courses for current page */}
              <BsFillArrowLeftCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handlePrevClick}
              />
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
                  />
                ))}
              <BsFillArrowRightCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          )}
          {activeTab === "trending" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Trending" tab */}
              {/* Card 1*/}
              <BsFillArrowLeftCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handlePrevClick}
              />
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
                  />
                ))}
              <BsFillArrowRightCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          )}
          {activeTab === "new" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Trending" tab */}
              {/* Card 1*/}
              <BsFillArrowLeftCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handlePrevClick}
              />
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
                  />
                ))}
              <BsFillArrowRightCircleFill
                size={30}
                className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          )}
        </div>
        {/* instructors */}
        <div className="flex justify-center space-y-5">
          <p className=" mt-20 mb-10 font-Lato text-[28px] font-extrabold text-gray-800">
            Instructors
          </p>
        </div>
        <div className="flex justify-between space-x-2 pt-2 pb-5 flex-start " >
        
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          selectedItem={startIndex}
          onChange={(index) => setStartIndex(index)}
          showArrows={true} // Hide default carousel arrows
          showIndicators={true} // Hide default carousel indicators
          centerMode={true} // Enable center mode to show only one instructor in focus
          centerSlidePercentage={33.3} // Set percentage width for center slide
          swipeable={true} 
        >
          {instructors.map((instructor, index) => (
            <Instructor
              key={index}
              rating={instructor.rating}
              name={instructor.name}
              job={instructor.job}
              avatarSrc={instructor.avatarSrc}
            />
          ))}
        </Carousel>
        
      </div>
     
     
      </div>
    </div>
  );
}

export default LandingPage;