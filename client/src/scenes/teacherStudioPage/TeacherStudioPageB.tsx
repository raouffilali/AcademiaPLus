import React from "react";
import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./TeacherStudioPage.css";
import { FaAngleDown } from "react-icons/fa";
import SideBar from "../../components/sideBar/SideBar";
type Tab = "All videos" | "Recent";
function TeacherStudioPageB() {
  const [activeTab, setActiveTab] = useState("All videos");
  // State to track the active tab
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    // Update the active tab state when a tab is clicked
  };
  return (
    <>
      {/* //replace it with the navbar after loggin */}
      {/* <NavBar /> */}
      <div className="flex justify-between">
        <SideBar />
        <div className="ml-[20px] mr-[80px]">
          <div className="flex justify-between space-x-[760px] mt-10">
            <p className="font-bold  text-gray-800 text-[25px] ">My Studio</p>
            <button className="  text-white rounded-full hover:bg-DarkBluePal bg-lightBluePal px-6 py-1 ">
              + Add new lesson
            </button>
          </div>
          <div className="flex flex-start mb-[17px] mt-[17px]  font-Lato text-[15px] leading-normal cursor-pointer ">
            <p
              className={`mr-[46px] font-Lato ${
                activeTab === "All videos"
                  ? "border-b-2 border-black "
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("All videos")}
            >
              All videos
            </p>
            <p
              className={`text-gray-500 mr-[46px] ${
                activeTab === "Recent"
                  ? "border-b-2 border-red-500 text-red-500"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Recent")}
            >
              Recent
            </p>
          </div>
          <div>
            {activeTab === "All vidoes" && (
              <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
                {/* content for "All videos" tab */}
                {/* Display courses for current page */}
                <p>no content for All videos</p>
              </div>
            )}
            {activeTab === "Recent" && (
              <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
                {/* content for "Recent" tab */}
                <p>no content for Recent</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherStudioPageB;
