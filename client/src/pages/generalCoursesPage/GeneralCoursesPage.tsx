import React, { useState } from "react";
import { Footer, NavBar } from "../../components";
import UrgentNews from "../../components/urgenNews/UrgentNews";
import HzCard from "../../components/ForGeneralCourses Components/HzCard";
import RelatedSkils from "../../components/ForGeneralCourses Components/RelatedSkils";
import Categories from "../../components/ForGeneralCourses Components/categories";
import courses from "../../components/courseCard/courses";
import "./GeneralCoursesPage.css";
import SectionContent from "../../components/ForGeneralCourses Components/SectionContent";
import SectionContentSLideBar from "../../components/ForGeneralCourses Components/SectionContentSLideBar";

function GeneralCoursesPage() {
  var relatedSkillsvar = [
    "design",
    "development",
    "marketing",
    "management",
    "photography",
    "music",
    "business",
    "health & fitness",
    "it & software",
    "office productivity",
  ];
  var categoriesVar = [
    "design",
    "development",
    "marketing",
    "management",
    "photography",
    "music",
    "business",
    "health & fitness",
    "it & software",
    "office productivity",
    "personal development",
    "teaching & academics",
  ];
  var academicVar = [
    "Primary School",
    "Middle School",
    "High School",
    "University",
  ];
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const coursesPerPage = 6; // Number of courses to display per page

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
  return (
    <>
      <UrgentNews />
      <NavBar />
      <div className=" mt-10 lg:ml-[80px] lg:mr-[80px] md:mx-auto sm:mx-auto mb-40">
        <div className="flex flex-warp">
          {/* aside section */}
          <div className="w-1/5 p-6">
            <div className="text-lg text-gray-600 underline  mb-10">
              <a href="/">ALL Courses</a>
            </div>

            <div className=" font-bold text-lg mb-4">
              <h1>Categories</h1> <hr className="bg-dark" />
            </div>
            {categoriesVar.map((cat, index) => (
              <Categories key={index} cName={cat} />
            ))}

            {/* Academic Field  */}
            <div className=" mt-10 font-bold text-lg mb-4">
              <h1>Brows Academic</h1> <hr className="bg-dark" />
            </div>
            {academicVar.map((cat, index) => (
              <Categories key={index} cName={cat} />
            ))}
          </div>
          {/* main section */}
          <div className="w-4/5 p-6">
            <div
              className="w-full h-72 bg-slate-400 rounded-3xl shadow-lg  "
              style={{
                background: "url('../../../public/assets/cover.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: " center center",
              }}
            >
              <div className="flex flex-col justify-center items-start h-full p-8">
                <h1 className="text-4xl font-bold text-white">
                  General Courses
                </h1>
                <h3 className="text-lg text-white mt-2 mb-20 sm:mb-12">
                  Find what fascinates you as you explore these Graphic Design
                  classes.
                </h3>
                <div className="">
                  <button className=" bg-goldPal hover:bg-lightYelloPal text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center">
                    <span>Join us fo FREE!</span>
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-gray-200 my-4 rounded-md" />
            <div className="mt-6 flex flex-wrap justify-start gap-1 items-start p-3 space-x-4  ">
              <h3 className="mt-1 text-md font-medium">Relted skills</h3>

              {relatedSkillsvar.map((skill, index) => (
                <RelatedSkils key={index} bName={skill} />
              ))}
            </div>
            <HzCard />
            <br />
            <SectionContentSLideBar
              secTitle="Featured"
              titelText="Graphic Design"
            />
            <SectionContent secTitle="Trendng" titelText="Graphic Design" />
            <SectionContent secTitle="Popular" titelText="Graphic Design" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GeneralCoursesPage;
