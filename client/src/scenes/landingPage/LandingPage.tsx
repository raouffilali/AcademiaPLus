// import React, { useState, useEffect } from "react";
// import { Footer, NavBar } from "../../components";
// import FieldsCards from "../../components/fieldsCards/FieldsCards";
// import CourseCard from "../../components/courseCard/CourseCard";
// import { HiArrowSmRight } from "react-icons/hi";
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
// } from "react-icons/bs";
// import courses from "../../components/courseCard/courses";
// import Instructor from "../../components/instructor/Instructor";
// import { instructors } from "../../components/instructor/instructors";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { Testimonials } from "../../components/testmonialsCard/Testemonials";
// import TestemonialsCard from "../../components/testmonialsCard/TestemonialsCard";
// import StatsContainer from "../../components/statsContainer/StatsContainer";
// type Tab = "popular" | "trending" | "new";
// function LandingPage() {
//   const [activeTab, setActiveTab] = useState("popular");
//   // State to track the active tab
//   const handleTabClick = (tab: Tab) => {
//     setActiveTab(tab);
//     // Update the active tab state when a tab is clicked
//   };
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const coursesPerPage = 4; // Number of courses to display per page

//   const handlePrevClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentPage < Math.ceil(courses.length / coursesPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };
//   //instructors slide
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNextButtonClick = () => {
//     setStartIndex((prevIndex) => prevIndex + 4);
//   };

//   const handlePrevButtonClick = () => {
//     setStartIndex((prevIndex) => prevIndex - 4);
//   };

//   return (
//     <div className="bg-white overflow-hidden flex flex-col items-start relative ">
//       <div className="  items-start">
//         <NavBar />
//       </div>
//       <div className=" w-full py-[18px] pr-[80px] pl-[80px] items-start ">
//         <div className="bg-gray-500 w-full">
//         <p className=" font-Lato text-[42px] font-extrabold text-gray-800 flex absolute  left-20  top-[115px] ">
//           Lets
//           <br />
//           E-learning
//           <br />
//           at your home
//         </p>
//         <div className="mt-[196px] mr-[185px]">
//           <button className="text-white absolute  shadow-md top-[480px] bg-ligh-redPal hover:bg-redPal rounded-full px-8 py-1 ">
//             {" "}
//             Try a demo
//           </button>
//           <p
//             className={
//               "h-[200px] w-[426px] font-Lato text-[16px] font-normal text-gray-500 flex items-center relative"
//             }
//           >
//             the readable content of a page when looking at its layout. The point
//             of using Lorem Ipsum is that it English.It is a long established
//             fact that a reader will be distracted by the readab
//             <br />
//           </p>
//           <div>
//             <button className="border-[1px] flex items-center absolute left-[250px] top-[480px] hover:bg-redPal hover:text-white text-redPal border-solid border-redPal rounded-full px-8 py-1   ">
//               Learn more
//             </button>
//           </div>

//           <div className="w-[8px] h-[8px] bg-DarkBluePal mt-[40px]  ml-[507px]  mr-[8px] rounded-full" />
//           <div className="w-[8px] h-[8px] bg-gray-300 -mt-[8px] ml-[520px]  mr-[8px] rounded-full" />
//           <img
//             alt="presentation section picture"
//             className="w-[620px] h-[480px] absolute inset-y-0 top-12 right-10 "
//             src="/assets/presPic.gif"
//           />
//         </div>
//         </div>
//         <p className=" mt-32 mb-6 font-Lato text-[28px] font-extrabold text-gray-800">
//           Academic Field
//         </p>
//         <FieldsCards />
//         <p className=" mt-24 font-Lato text-[28px] font-extrabold text-gray-800">
//           General Courses
//         </p>
//         <p className=" font-lato text-gray-500 text-[20px] flex">
//           Choose from 10000 online video courses with new additions published
//           every month
//         </p>
//         <div className="flex flex-start mb-[17px] mt-[17px] pl-[7px] font-Lato text-[20px] leading-normal cursor-pointer ">
//           <p
//             className={`mr-[46px] font-Lato ${
//               activeTab === "popular"
//                 ? "border-b-2 border-black "
//                 : "text-gray-500"
//             }`}
//             onClick={() => handleTabClick("popular")}
//           >
//             Popular
//           </p>
//           <p
//             className={`text-gray-500 mr-[46px] ${
//               activeTab === "trending"
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500"
//             }`}
//             onClick={() => handleTabClick("trending")}
//           >
//             Trending
//           </p>
//           <p
//             className={`mr-[640px] ${
//               activeTab === "new"
//                 ? "border-b-2 border-black text-black "
//                 : "text-gray-500"
//             }`}
//             onClick={() => handleTabClick("new")}
//           >
//             New
//           </p>
//           <a href="/">
//             <p className="flex items-center text-blueLink text-[18px]">
//               Explore more <HiArrowSmRight className="mr-[3px]" />
//             </p>
//           </a>
//         </div>
//         <div>
//           <hr className="border-gray-200 h-[0px] w-full mb-2 mt-0" />
//           {activeTab === "popular" && (
//             <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
//               {/* content for "Popular" tab */}
//               {/* Display courses for current page */}
//               <BsFillArrowLeftCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handlePrevClick}
//               />
//               {courses
//                 .slice(
//                   (currentPage - 1) * coursesPerPage,
//                   currentPage * coursesPerPage
//                 )
//                 .map((course, index) => (
//                   <CourseCard
//                     key={index}
//                     courseName={course.courseName}
//                     instructor={course.instructor}
//                     rating={course.rating}
//                     views={course.views}
//                     category={course.category}
//                     price={course.price.toString()}
//                   />
//                 ))}
//               <BsFillArrowRightCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handleNextClick}
//               />
//             </div>
//           )}
//           {activeTab === "trending" && (
//             <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
//               {/* content for "Trending" tab */}
//               {/* Card 1*/}
//               <BsFillArrowLeftCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handlePrevClick}
//               />
//               {courses
//                 .slice(
//                   (currentPage - 1) * coursesPerPage,
//                   currentPage * coursesPerPage
//                 )
//                 .map((course, index) => (
//                   <CourseCard
//                     key={index}
//                     courseName={course.courseName}
//                     instructor={course.instructor}
//                     rating={course.rating}
//                     views={course.views}
//                     category={course.category}
//                     price={course.price.toString()}
//                   />
//                 ))}
//               <BsFillArrowRightCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handleNextClick}
//               />
//             </div>
//           )}
//           {activeTab === "new" && (
//             <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
//               {/* content for "Trending" tab */}
//               {/* Card 1*/}
//               <BsFillArrowLeftCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handlePrevClick}
//               />
//               {courses
//                 .slice(
//                   (currentPage - 1) * coursesPerPage,
//                   currentPage * coursesPerPage
//                 )
//                 .map((course, index) => (
//                   <CourseCard
//                     key={index}
//                     courseName={course.courseName}
//                     instructor={course.instructor}
//                     rating={course.rating}
//                     views={course.views}
//                     category={course.category}
//                     price={course.price.toString()}
//                   />
//                 ))}
//               <BsFillArrowRightCircleFill
//                 size={30}
//                 className=" mt-[120px]  text-darkBluePLusPal cursor-pointer"
//                 onClick={handleNextClick}
//               />
//             </div>
//           )}
//         </div>
//         {/* instructors */}
//         <div className="flex justify-center space-y-2 ">
//           <p className=" mt-20 font-Lato text-[28px] font-extrabold text-gray-800">
//             Instructors
//           </p>
//         </div>
//         <div className="pt-2 ">
//           <Carousel
//             showStatus={false}
//             showThumbs={false}
//             infiniteLoop={true}
//             autoPlay={true}
//             interval={3000}
//             transitionTime={500}
//             selectedItem={startIndex}
//             onChange={(index) => setStartIndex(index)}
//             showArrows={false} // Hide default carousel arrows
//             showIndicators={true} // Hide default carousel indicators
//             centerMode={true} // Enable center mode to show only one instructor in focus
//             centerSlidePercentage={25} // Set percentage width for center slide
//             swipeable={true}
//           >
//             {instructors.map((instructor, index) => (
//               <Instructor
//                 key={index}
//                 rating={instructor.rating}
//                 name={instructor.name}
//                 job={instructor.job}
//                 avatarSrc={instructor.avatarSrc}
//               />
//             ))}
//           </Carousel>
//           <div className="flex  space-x-32">
//             <div className="mt-36 mb-36 flex flex-col ">
//               <p className="font-extrabold text-4xl text-gray-800 ">
//                 Become an instructor
//               </p>
//               <p className="mt-3 text-gray-400">
//                 Are you interested to be a part of our community? You can be a{" "}
//                 <br /> part of our community by signing up as an instructor or{" "}
//                 <br /> organization.
//               </p>
//               <div>
//                 <button className="mt-10 rounded-lg hover:bg-redPal text-white bg-ligh-redPal px-5 p-2 mr-5 shadow-md">
//                   Become an Instructor
//                 </button>
//                 <button className="mt-10 rounded-lg text-redPal border border-redPal bg-white px-12 p-2 hover:bg-redPal hover:text-white">
//                   Learn more
//                 </button>
//               </div>
//             </div>
//             <div className="col-12 col-lg-6 mt-10 ">
//               <div className=" position-relative mt-12 w-[340px] h-[420px]">
//                 <img
//                   className=" z-10 w-full h-full rounded-tl-[50px] rounded-br-[50px]"
//                   src="./public/assets/becomeInstructor.jpg"
//                   alt=""
//                 />
//                 <img
//                   className=" relative -right-[240px] -top-[500px] "
//                   src="./public/assets/circle.png"
//                   alt="Circle"
//                 />
//               </div>
//             </div>
//           </div>

//           <TestemonialsCard />

//           <p className="font-Lato mb-2 mt-10 text-[28px] font-extrabold text-gray-800">
//             Why We Are Different From Others?
//           </p>
//           <p className="mt-3 text-gray-400">
//             We have highly professional mentors around the globe. We havegreat
//             features <br /> than any other platform.
//           </p>

//           <div className="mt-10"></div>
//           <StatsContainer />
//         </div>
//         <div className="mt-32"></div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default LandingPage;
import { sizeHeight } from "@mui/system";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import RatingSection from "../../components/RatingSection/RatingSection";
import StatsContainer from "../../components/statsContainer/StatsContainer";

function LandingPage() {
  return (
    <div>
      <div className="w-full top-14 h-[920px] bg-[url(/assets/bg/landingbanner.png)]">
        <NavBar />
        <div>
          <div className="text-gray-900 mx-[80px]">
            <div className="flex justify-between flex-row space-x-10">
              <div className="space-y-8 mt-36 ">
                <h2 className="text-gray-600 text-lg">
                  The Leader in Online Virtual interactive Learning
                </h2>
                <p className=" font-extrabold text-[44px]">
                  Interactive & Accessible Online Courses For All
                </p>
                <h2 className="text-gray-600 text-lg">
                  Own your future learning new skills online
                </h2>
                <div className="flex space-x-4 justify-start ">
                  <button className="bg-redPal  hover:bg-lightredPal  hover:text-gray-900 text-white font-medium py-2 px-16 rounded-2xl">
                    Try a Demo
                  </button>
                  <button className=" border-redPal border-2 hover:border-lightredPal hover:bg-lightredPal hover:text-gray-800 text-redPal font-medium py-2 px-16 rounded-2xl">
                    Learn more
                  </button>
                </div>
                <h2 className="text-gray-600 text-lg ">
                  Trusted by over 15K Users <br /> worldwide since 2022
                </h2>
              </div>
              <div className="  mt-48">
                <img src="assets/object.png" className="" />
              </div>
            </div>
            <RatingSection />
            <div className=" absolute mt-44 pb-44">
              <StatsContainer />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-36 mx-[80px] pb-80 flex space-x-32 ">
        <div className="space-y-6">
          <p className="text-redPal font-medium text-lg">Favourite Course</p>
          <p className="font-bold text-4xl ">Top Category</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div>
          <button className="flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 border-bluePal px-4 py-2 rounded-3xl">
            <span className="mr-2">All</span>
            Categories
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
