// VideoSummariesPage.tsx
// VideoSummariesPage.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import CourseContent from "../../../components/CourseContent/CourseContent";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";
import VideoSummariesDetailsSection from "../../../components/VideoSummariesDetailsSection/VideoSummariesDetailsSection";
import { NavBar } from "../../../constants";


const VideoSummaries: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedYear = queryParams.get("year");
  const selectedSubject = queryParams.get("subject");

  // Mock data for video summaries based on the selected year and subject
  const videoSummariesData = [
    {
      id: 1,
      subject: selectedSubject,
      year: selectedYear,
      studentEnrolled: 500,
      numLessons: 10,
      duration: "2 hours",
      rating: 4.5,
      
    },
    // Add more data for different video summaries
  ];

  // Find the selected video summary based on year and subject
  const selectedVideoSummary = videoSummariesData.find(
    (summary) => summary.subject === selectedSubject && summary.year === selectedYear
  );

  if (!selectedVideoSummary) {
    return <div>Video Summary not found</div>;
  }
  return (
    <div>
      <NavBar />
      <div className="lg:mx-[80px] text-right  mx-[12px] mt-16 space-y-10">
        <h2
          className="text-2xl"
          style={{ fontFamily: "Tajawal", fontWeight: 600 }}
        >ملخصات الفيديو
        </h2>
{/*          
      <div className="lg:flex lg:space-x-10 md:space-x-8 justify-between">
        <div className="mt-0 ml-0">
        <VideoSummariesDetailsSection courseName={""} instructor={""} rating={0} views={0} price={""}       
      />
        </div>
      </div> */}
      
      <div className="mr-0 mt-0 flex-1">
        <VideoPlayer /> {/* Display video player */}
        <div className="mt-6 space-y-4">
          <p className="text-emerald-500 underline underline-offset-[23px]">
            محتويات الدورة
          </p>
          <hr className="my-0.5" />
          <CourseContent />
          {/* Display course content */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default VideoSummaries;
