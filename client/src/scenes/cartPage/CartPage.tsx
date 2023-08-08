import React, { useState } from "react";
import { NavBar, Footer, EmptyCart } from "../../components/index";
import PathPage from "../../components/PathPage/PathPage";
import CourseCard, {
  CourseCardProps,
} from "../../components/courseCard/CourseCard";
import courses from "../../components/courseCard/courses";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { addToCart,cartItems } from "./cartItems";



function CartPage() {
  const [cartCourses, setCartCourses] = useState<CourseCardProps[]>([]);

  // Function to handle adding a course to the cart
  function addToCart(course: CourseCardProps) {
    setCartCourses((prevCartCourses) => [...prevCartCourses, course]);
  }
  // Function to calculate the total price of courses in the cart
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (const course of cartCourses) {
      totalPrice += Number(course.price); // Convert the price to a number using Number()
    }
    return totalPrice;
  }

  return (
    <>
      <NavBar />
      <PathPage />
      <div className="bg-gray-50 w-full">
        <div className="mx-[20px] md:mx-[80px] mt-5 pt-5 mb-8">
          {cartCourses.length === 0? (
            <EmptyCart />
          ) : (
            <div className="pt-10 bg-white border-solid border-2 rounded-xl border-grey shadow-md mt-2">
              <h1 className="ml-5 text-xl font-bold text-gray-800">Shopping Cart</h1>
              {cartItems.map((course, index) => (
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
              <div className="flex justify-between">
                <p className="ml-5 my-5 text-xl font-bold text-gray-800">Subtotal</p>
                <p className="mx-5  my-5 text-xl font-bold text-gray-800"> {calculateTotalPrice()} DA</p> 
              </div>
              <div className="flex flex-col md:flex-row p-5 space-y-4 md:space-y-0 md:space-x-4 justify-between">
                <button className="bg-redPal w-full p-3 text-white hover:bg-red-500 font-medium rounded-md">
                  Checkout
                </button>
                <button className="bg-white border p-3 hover:bg-red-500 hover:text-white border-red-500 text-redPal font-medium rounded-md w-full">
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
