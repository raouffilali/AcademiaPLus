import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import courses from "../../data/courses";
import CourseCard from "../courseCard/CourseCard";


interface SectionContentTYpe {
  secTitle: string;
  titelText: string;
}

function SectionContent({ secTitle, titelText }: SectionContentTYpe) {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const coursesPerPage = 6; // Number of courses to display per page

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <SectionTitle genreTitle={secTitle} typeText={titelText} />
      <div className=" flex flex-wrap lg:justify-evenly lg:gap-7 xl:items-end xl:justify-evenly xl:gap-7 lg:items-center mb-16   mt-14   sm:space-y-4  sm:justify-center sm:items-start sm:gap-[6px]">
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
      </div>
    </>
  );
}

export default SectionContent;
