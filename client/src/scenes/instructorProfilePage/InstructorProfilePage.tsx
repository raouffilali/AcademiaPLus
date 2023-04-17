import React from "react";
import YouTubeFrame from "../../components/YoutubeFrame/YoutubeFRame";
import { Footer, NavBar } from "../../components";
import VideoPage from "../../components/YoutubeFrame/YoutubeFRame";
import CourseCard from "../../components/courseCard/CourseCard";
import courses from "../../components/courseCard/courses";

function InstructorProfilePage() {
  return (
    <>
      <NavBar />
      <YouTubeFrame />
      <div className="container mx-auto mt-4 mb-10 flex justify-center space-x-2 pt-2 pb-5 flex-start flex-wrap gap-5">
        {/* content for "Popular" tab */}
        {courses.map((course, index) => (
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
      <Footer/>
      </>

  );
}

export default InstructorProfilePage;
