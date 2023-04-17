
import React, { useState } from 'react';
import { NavBar } from "../../components";
import FieldsCards from "../../components/fieldsCards/FieldsCards";
import CourseCard from '../../components/courseCard/CourseCard';
import {HiArrowSmRight} from "react-icons/hi";
type Tab = 'popular' | 'trending' | 'new'; 
function LandingPage() {
  const course = {
    courseName: "Course Name",
    instructor: "Dr.Flen",
    rating: "4.0",
    views: "1k",
    category: "Category",
    price: "1700DA"
  };
  const [activeTab, setActiveTab] = useState('popular'); // State to track the active tab

  const handleTabClick = (tab:Tab) => {
    setActiveTab(tab);
     // Update the active tab state when a tab is clicked
  };
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
        <p className=" mt-24 font-Lato text-[32px] font-extrabold text-gray-800">Academic Field</p> 
        <FieldsCards/>
        <p className=" mt-24 font-Lato text-[32px] font-extrabold text-gray-800">General Courses</p>
        <p className=" font-lato text-gray-500 text-[20px] flex">
        Choose from 10000 online video courses with new
        additions published every month
        </p>
        <div className="flex flex-start mb-[17px] mt-[17px] pl-[7px] font-Lato text-[20px] leading-normal cursor-pointer ">
        <p className={`mr-[46px] font-Lato ${activeTab === 'popular' ? 'border-b-2 border-black ' : 'text-gray-500'}`}
          onClick={() => handleTabClick('popular')}>Popular</p>
        <p className={`text-gray-500 mr-[46px] ${
            activeTab === 'trending' ? 'border-b-2 border-black text-black' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('trending')}>Trending</p>
        <p className={`mr-[640px] ${activeTab === 'new' ?  'border-b-2 border-black text-black ': 'text-gray-500'}`}
          onClick={() => handleTabClick('new')}>New</p>
        <a href="/"><p className="flex items-center text-blueLink text-[18px]">Explore more <HiArrowSmRight className="mr-[3px]"/></p></a>
        </div>
        <div>
        <hr className="border-gray-200 h-[0px] w-full mb-2 mt-0" /> 
        {activeTab === 'popular' && (
          <div className="flex justify-between space-x-2  pt-2 pb-5 flex-start">
            {/* content for "Popular" tab */}
           {/* Card 1 */}
           <CourseCard
        courseName={course.courseName}
        instructor={course.instructor}
        rating={parseFloat(course.rating)}
        views={parseInt(course.views)}
        category={course.category}
        price={course.price}
      />
            
            {/* Card 2*/}
            <CourseCard
        courseName={course.courseName}
        instructor={course.instructor}
        rating={parseFloat(course.rating)}
        views={parseInt(course.views)}
        category={course.category}
        price={course.price}
      />
            {/* Card 3 */}
            <CourseCard
        courseName={course.courseName}
        instructor={course.instructor}
        rating={parseFloat(course.rating)}
        views={parseInt(course.views)}
        category={course.category}
        price={course.price}
      />
            {/* Card 4 */}
            <CourseCard
        courseName={course.courseName}
        instructor={course.instructor}
        rating={parseFloat(course.rating)}
        views={parseInt(course.views)}
        category={course.category}
        price={course.price}
      />

          </div>
        )}
        {activeTab === 'trending' && (
          <div>
            {/* content for "Trending" tab */}
            <p>Content for Trending tab</p>
          </div>
        )}
        {activeTab === 'new' && (
          <div>
            {/*content for "New" tab */}
            <p>Content for New tab</p>
          </div>
        )}
      </div>
        
      
      </div>
    </div>
  );
}

export default LandingPage;
