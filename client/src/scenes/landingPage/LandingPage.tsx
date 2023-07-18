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
import { Link } from "react-router-dom";
import CourseCard from "../../components/courseCard/CourseCard";
import FieldsCards from "../../components/fieldsCards/FieldsCards";
import NavBar from "../../components/navBar/NavBar";
import RatingSection from "../../components/RatingSection/RatingSection";
import StatsContainer from "../../components/statsContainer/StatsContainer";
import { categories } from "../../components/topCategoryCarousel/categoriesData";
import TopCategoryCarousel from "../../components/topCategoryCarousel/TopCategoryCarousel";
import courses from "../../components/courseCard/courses";
import Footer from "../../components/Footer/Footer";
import InstructorCarousel from "../../components/instructorCarousel/InstructorCarousel";
import SponsorsCarousel from "../../components/SponsorsCarousel/SponsorsCarousel";
import { sponsorsData } from "../../components/SponsorsCarousel/SponsorsData";
import { FaCheckCircle } from "react-icons/fa";
import TestemonialsCard from "../../components/testmonialsCard/TestemonialsCard";
import BlogCarousel from "../../components/blogCarousel/BlogCarousel";
import { blogData } from "../../components/blogCarousel/blogData";
import StatsContainer2 from "../../components/statsContainer2/StatsContainer2";

function LandingPage() {
  return (
    <div>
      <div className="w-full top-14 h-[920px] bg-gradient-to-r from-amber-100 to bg-greenish">
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
                <div className="space-x-4 justify-start ">
                  <Link to="/SubscriptionPackagesPage">
                    <button className="bg-redPal  hover:bg-lightredPal  hover:text-gray-900 text-white font-medium py-2 px-16 rounded-2xl">
                      Try a Demo
                    </button>
                  </Link>
                  <Link to="/About">
                    <button className=" border-redPal border-2 hover:border-lightredPal hover:bg-lightredPal hover:text-gray-800 text-redPal font-medium py-2 px-16 rounded-2xl">
                      Learn more
                    </button>
                  </Link>
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

            <div className=" mt-60 pb-44">
              <StatsContainer />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-36 mx-[80px] ">
        <div className=" flex space-x-32">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">Academic category</p>
            <p className="font-bold text-4xl ">Academic Feilds</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
        </div>

        <FieldsCards />
      </div>
      <div className=" mt-36 mx-[80px] mb-24 ">
        <div className=" flex space-x-32">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">Favourite Course</p>
            <p className="font-bold text-4xl ">Top Category</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>

          <Link to="/CategoryPage">
            <button className="flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 border-bluePal px-4 py-2 rounded-3xl">
              <span className="mr-2">All</span>
              Categories
            </button>
          </Link>
        </div>
        <TopCategoryCarousel categories={categories} />
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage:
            "url(/assets/bg/course-bg.png), url(/assets/bg/landingbanner2.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-24 mx-[80px] mb-24">
          <div className="flex space-x-32">
            <div className="space-y-6">
              <p className="text-redPal font-medium text-lg">What’s New</p>
              <p className="font-bold text-4xl">Featured Courses</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum gravida maecenas augue elementum et
                neque. Suspendisse imperdiet.
              </p>
            </div>
            <Link to="/AllCoursesPage">
              <button className="flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 border-bluePal px-4 py-2 rounded-3xl">
                <span className="mr-2">All</span>
                Courses
              </button>
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7">
            {courses.slice(0, 6).map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                instructor={course.instructor}
                rating={course.rating}
                views={course.views}
                category={course.category}
                price={course.price.toString()} courseThumbnailSrc={course.courseThumbnailSrc} instructorAvtr={course.instructorAvtr} instructorJob={course.instructorJob}              />
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-20 mx-[80px] ">
        <div className="space-y-6">
          <p className="text-redPal font-medium text-lg">What’s New</p>
          <p className="font-bold text-4xl ">
            Master the skills to drive your career
          </p>
          <p className="text-gray-500 w-2/3">
            Get certified, master modern tech skills, and level up your career —
            whether you’re starting out or a seasoned pro. 95% of eLearning
            learners report our hands-on content directly helped their careers.
          </p>
        </div>
        <div className="flex space-x-24">
          <div className="grid grid-cols-2 gap-6" style={{ flex: "1" }}>
            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-1.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Stay motivated with engaging instructors
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-2.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Keep up with the latest in cloud
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-3.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Get certified 100+ certification courses
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-4.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Build skills your way, from labs to courses
              </p>
            </div>
          </div>

          <img src="assets/join.png" className="md:w-96" alt="" />
        </div>
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage: " url(/assets/bg/banner-bg.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-20 mx-[80px] mb-24">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">TOP News</p>
            <p className="font-bold text-4xl">Virtual Interactive Learning</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
            
            <iframe
             width="760"
             height="515"
            src="https://www.youtube.com/embed/your-video-id"
            title="Video"
            className='rounded-2xl w-full mx-[0px]'
          
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          
          ></iframe>
          </div>
          <div className="mt-24 space-y-5 ">
            <p className="font-bold text-4xl text-center">
              Featured Instructor
            </p>
            <p className="text-center text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida <br /> maecenas augue elementum
              et neque. Suspendisse imperdiet.
            </p>
            <InstructorCarousel />
          </div>
        </div>
        <div className="mt-36 mb-24 space-y-5 ">
          <p className="text-redPal font-medium text-lg text-center ">
            Trusted By
          </p>
          <p className="font-bold text-4xl text-center">
            500+ Leading Universities And Companies
          </p>
          <SponsorsCarousel sponsors={sponsorsData} />
        </div>
        <div
          className="w-full top-14 h-full pb-4 bg-cover"
          style={{
            backgroundImage: " url(/assets/bg/landingbanner2.png)",
            backgroundRepeat: "no-repeat, repeat-y",
            backgroundSize: "auto, cover",
          }}
        >
          <div className="mx-[80px] mb-24 pt-16 ">
            <div className="flex justify-between  ">
              <img className="h-96" src="assets/share.png" alt="" />
              <div className="space-y-5  ">
                <p className="font-bold text-4xl">
                  Want to share your knowledge? Join us a Mentor
                </p>
                <p className=" text-gray-500">
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </p>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-lg  ml-2 ">
                    Top rated Instructors
                  </span>
                </div>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-lg  ml-2 ">
                    Best Courses
                  </span>
                </div>

                <Link to="/BecomeaTeacherPage">
                  <button className=" mt-10 items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 border-bluePal px-8 py-2 rounded-3xl">
                    <span className="mr-2">Become</span>a Mentor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full text-center h-[410px] mb-60 bg-cover"
          style={{
            backgroundImage: " url(/assets/testemo.jpg)",
          }}
        >
          <TestemonialsCard />
        </div>
        <div className="grid grid-cols-2 space-x-6 mb-20   mx-[80px]">
          <div className=" bg-red-100 p-4 rounded-3xl flex ">
            <div className=" space-y-2">
              <p className="text-xl font-bold">Become An Instructor</p>
              <p className=" text-gray-800 font-light">
                Top instructors from around the world teach millions of students
                on Mentoring.
              </p>
            </div>
            <img className="h-44" src="assets/become-02.png" alt="" />
          </div>
          <div className=" bg-amber-200  p-4 rounded-3xl flex ">
            <div className="space-y-2">
              <p className="text-xl font-bold">Transform Access To Education</p>
              <p className=" text-gray-800 font-light">
                Create an account to receive our newsletter, course
                recommendations and promotions.
              </p>
            </div>
            <img className="h-44" src="assets/become-01.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage: "url(/assets/bg/banner-bg.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-24 mx-[80px] space-y-4 mb-24">
          <p className="text-center text-3xl font-bold ">Latest Blogs</p>
          <p className="text-gray-500 text-sm text-center px-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
          <BlogCarousel blogs={blogData} />
        </div>
        <div className="mx-[90px] my-36 ">
          <StatsContainer2 apiUrl={""} />
        </div>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}

export default LandingPage;
