import React, { useState, useEffect } from "react";
import { Footer, NavBar } from "../../components";
import PathPage from "../../components/PathPage/PathPage";
import categories from "./CategoriesData";

function CategoryPage() {
  const [selectedButton, setSelectedButton] = useState("Graphics & Design");
  const [contentVisible, setContentVisible] = useState(false);

  const handleButtonClick = (content:any) => {
    setSelectedButton(content);
  };

  const renderCategoryCards = () => {
    const filteredCategories = categories.filter(
      (category) => category.category === selectedButton
    );

    return filteredCategories.map((category, index) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5 p-1" key={index}>
        <div className="bg-white flex shadow-md rounded-lg overflow-hidden">
          <img
            src={category.thumbnail}
            className="h-24 m-4 w-24 object-cover"
          />
          <div className="flex space-x-4 ">
            <h3 className="text-sm text-gray-600 font-medium ">
              {category.title}
            </h3>
            <p className="text-white bg-red-400 w-8 h-8 text-sm flex items-center justify-center rounded-full">
              {category.numCourses}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    setContentVisible(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 5); 
  }, [selectedButton]);

  return (
    <>
      <NavBar />
      <PathPage />
      <div className="mt-5 flex flex-wrap justify-between items-center bg-gray-50">
        <div className="ml-[80px] mr-[80px]">
          <div className="flex flex-col space-y-6">
            <h1 className="font-bold text-4xl mt-16 text-gray-950">
              Browse Job By Categories
            </h1>
            <p className="text-gray-500">Browse Job By Categories</p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-2">
              <button
                className={`text-xl bg-gray-200 py-2 px-10 hover:bg-red-400 hover:text-white font-medium ${
                  selectedButton === "Graphics & Design"
                    ? "bg-red-400 text-white active-button"
                    : ""
                }`}
                onClick={() => handleButtonClick("Graphics & Design")}
              >
                Graphics & Design
              </button>
              <button
                className={`text-xl bg-gray-200 py-2 px-10 hover:bg-red-400 hover:text-white font-medium ${
                  selectedButton === "Programming & Tech"
                    ? "bg-red-400 text-white active-button"
                    : ""
                }`}
                onClick={() => handleButtonClick("Programming & Tech")}
              >
                Programming & Tech
              </button>
              <button
                className={`text-xl bg-gray-200 py-2 px-10 hover:bg-red-400 hover:text-white font-medium ${
                  selectedButton === "Digital Marketing"
                    ? "bg-red-400 text-white active-button"
                    : ""
                }`}
                onClick={() => handleButtonClick("Digital Marketing")}
              >
                Digital Marketing
              </button>
              <button
                className={`text-xl bg-gray-200 py-2 px-10 hover:bg-red-400 hover:text-white font-medium ${
                  selectedButton === "Video & Animation"
                    ? "bg-red-400 text-white active-button"
                    : ""
                }`}
                onClick={() => handleButtonClick("Video & Animation")}
              >
                Video & Animation
              </button>
            </div>
            {selectedButton && contentVisible && (
              <div className="flex flex-wrap">{renderCategoryCards()}</div>
            )}
          </div>
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
