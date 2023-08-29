import React, { useState } from "react";
import { NavBar } from "../../components";
import CourseCard from "../../components/courseCard/CourseCard";
import PathPage from "../../components/PathPage/PathPage";
function WishList() {
  const [nmItems, setnmItems] = useState(0);
  return (
    <div>
      <NavBar />
      <PathPage />
      <div className="mt-5 flex flex-wrap justify-between items-center bg-gray-50">
        <div className=" mt-20 ml-[80px] mr-[80px] bg-white rounded-lg border border-neutral-200 h-full w-full ">
          <p className=" m-6 font-medium text-gray-800 text-lg">{`Your Wishlist (${nmItems} items)`}</p>
          <hr />
          {nmItems > 0 ? (
            // Display courses
            <div className="m-6">
              {/* Code to render the list of courses */}
            </div>
          ) : (
            // Display image
            <div className="mb-6">
              <img
                src="/assets/searchingCart2.gif"
                alt="No courses in wishlist"
                className="w-96 h-96"
              />
              <p className="text-center font-medium text-gray-800 text-lg ">No Item Found, Add courses to your wishlist!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishList;
