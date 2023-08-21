import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavBar } from "../../constants";
import CourseCard from "../../components/courseCard/CourseCard";
import courses from "../../components/courseCard/courses";
import PathPage from "../../components/PathPage/PathPage";
import { cartItems } from "../cartPage/cartItems";
function WishList() {
  const [nmItems, setnmItems] = useState(0);
  return (
    <div>
      <NavBar />
      <PathPage />
      <div className="mt-5 flex flex-wrap justify-between items-center bg-gray-50">
        <div className=" mt-20 ml-[80px] mr-[80px] bg-white rounded-lg border border-neutral-200 h-full mb-10 pb-5 w-full ">
          <p className=" m-6 font-medium text-gray-800 text-lg">{`Your Wishlist (${nmItems} items)`}</p>
          <hr />
          {nmItems > 0 ? (
            // Display courses
            <div className="m-6">
              {/* Code to render the list of courses */}
              <div className="">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="m-5 border-solid border border-gray-200 rounded-md p-5 my-5 flex flex-col md:items-center lg-items-center md:flex-row" // Updated to use flex-col for mobile and flex-row for larger screens
                >
                  {/* Cart card content with desired layout */}
                  <div className="relative mb-4 md:mb-0 md:mr-5">
                    <Link to="/CourseDetails">
                      <img
                        className="rounded-lg w-full md:h-36"
                        src={course.courseThumbnailSrc}
                        alt="courseThumbnail"
                      />
                    </Link>
                    <div className="absolute bottom-2 right-4 text-white rounded-xl p-2 w-24 bg-red-500 text-center font-bold text-lg">
                      {course.price} Da
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium">{course.courseName}</h3>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                    <div className="lg:absolute md:absolute flex items-center space-x-1"> {/* Use flex and items-center to align the rating and views */}
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          className={`text-goldPal ${
                            index < course.rating ? "opacity-100" : "opacity-30"
                          }`}
                        />
                      ))}
                      <span className="text-gray-500">{course.rating}</span>
                      <span className="text-gray-500">• {course.views}K views</span>
                    </div>
                    {/* Add other course details here... */}
                  </div>
                  <button className="border border-redPal text-redPal hover:text-white hover:bg-redPal py-2 px-3 mt-4 md:mt-0 md:ml-4"> {/* Adjusted the height and padding */}
                    Remove
                  </button>
                </div>
              ))}
              <hr />
            </div>
            </div>
          ) : (
            // Display image
            <div className="flex flex-col flex-wrap space-y-5 justify-center  mt-2 ">
              <img
                src="/assets/searchingCart2.gif"
                alt="No courses in wishlist"
                className="w-96 h-96"
              />
              <p className="text-center font-medium text-gray-800 text-lg ">
                No Item Found, Add courses to your wishlist!
              </p>
              <Link to="/AllCourses">
                <button
                  className="middle  bg-lightBluePal hover:bg-redPal w-52 none center mr-3 rounded-lg  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blueWhitePLusPal transition-all hover:shadow-lg hover:shadow-darkBluePLusPal focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Browse Courses
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishList;
