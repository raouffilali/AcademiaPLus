import { useState } from "react";
import { Footer, NavBar } from "../../constants";
import { useParams, useLocation } from "react-router-dom";
import PathPage from "../../components/PathPage/PathPage";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import EnrollCourse from "../../components/EnrollCourse/EnrollCourse";
import CourseContentCard from "../../components/CourseContentCard/CourseContentCard";

function CourseDetails() {
  const { courseName } = useParams<{ courseName: string }>();
  const decodedCourseName = courseName || "";

  const location = useLocation();
  const {
    courseName: selectedCourseName,
    instructor,
    instructorAvtr,
    rating,
    views,
    category,
    price,
    courseThumbnailSrc,
    instructorJob,
    numLessons,
    duration,
    courseDesc: initialCourseDesc, // Rename it to avoid confusion with the local state
  } = location.state || {};

  const [courseDesc, setCourseDesc] = useState(initialCourseDesc || "");
  const [videos, setVideos] = useState(views || 0);
  const [resources, setResources] = useState(0); // Update this value as needed
  const [studentsEnrolled, setStudentsEnrolled] = useState(0); // Update this value as needed

  const [level, setLevel] = useState(""); // Update this value as needed

  const items = ["Home", "Courses", "All Courses", courseName];
  return (
    <div>
      <NavBar />
      <PathPage />
      <div className="bg-gray-100  ">
        <div
          className="flex justify-start items-start relative mt-6 w-full h-[265px]  "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url('/assets/coursedeta.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className=" items-start absolute top-10 space-x-24 ">
            <div className="ml-[80px]">
              <CourseDetail
                instructorAvatar={instructorAvtr}
                instructor={instructor}
                speciality={instructorJob}
                category={category}
                courseName={decodedCourseName}
                description={courseDesc} // Pass the actual course description as a prop
                numRatings={15}
                rating={rating}
                numLessons={numLessons}
                studentsEnrolled={32}
                duration={duration}
              />
            </div>
            {/* Elements below CourseDetail */}
            <div className="bg-white rounded-lg w-full absolute items-start border border-neutral-200 mt-24">
              <div className="pl-6 mt-6 mb-6 justify-between space-y-4 ">
                <p className="font-bold text-DarkBluePal">Overview</p>
                <p className="text-sm font-semibold text-gray-800">
                  Course Description
                </p>
                <p className="font-light text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                  {courseDesc}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  What you will learn
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Requirements
                </p>
              </div>

              <div className="bg-white rounded-lg w-full absolute items-start border border-neutral-200 mt-12">
                <div className="pl-6 mt-6 mb-6 justify-between space-y-4 ">
                  <p className="font-bold text-DarkBluePal">Course Content</p>
                  <CourseContentCard />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-10 right-[80px]">
            <EnrollCourse
              discount="100% Off"
              price={price}
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              onAddToCart={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            {/* Elements below EnrollCourse */}
            <div className="space-y-6 mt-6 flex-col mb-10">
              <div className="bg-white rounded-lg  border border-neutral-200">
                <div className="list-disc pl-6 mt-6 mb-6 justify-between space-y-4 font-light text-sm">
                  <p className="font-bold text-gray-800 text-lg">Includes</p>
                  <img
                    src="assets/import.svg"
                    className="  mr-2 float-left h-5"
                  />
                  <p>{`${videos} hours on-demand video`}</p>
                  <img src="assets/play.svg" className="mr-2  float-left h-5" />
                  <p>{`${resources} downloadable resources`}</p>
                  <img src="assets/key.svg" className="mr-2 float-left h-5" />
                  <p>Full lifetime access</p>
                  <img
                    src="assets/mobile.svg"
                    className="mr-2 float-left h-5"
                  />
                  <p>Access on mobile and TV</p>
                  <img src="assets/cloud.svg" className="mr-2 float-left h-5" />
                  <p>Assignments</p>
                  <img
                    src="assets/teacher.svg"
                    className="mr-2 float-left h-5"
                  />
                  <p>Certificate of Completion</p>
                </div>
              </div>
              <div className="bg-white rounded-lg  border border-neutral-200">
                <div className="list-disc pl-6 mt-6 mb-6 justify-between space-y-2 font-light text-sm">
                  <p className="font-bold text-gray-800 text-lg mb-4">
                    Includes
                  </p>
                  <img
                    src="assets/users.svg"
                    className="  mr-2 float-left h-5"
                  />
                  <p>{`Enrolled: ${studentsEnrolled}`}</p>
                  <hr />
                  <img
                    src="assets/duration.svg"
                    className="mr-2  float-left h-5"
                  />
                  <p>{`Duration: ${duration} `}</p>
                  <hr />
                  <img
                    src="assets/chapter.svg"
                    className="mr-2 float-left h-5"
                  />
                  <p>{`Chapters:${numLessons}`}</p>
                  <hr />
                  <img src="assets/video.svg" className="mr-2 float-left h-5" />
                  <p>{`Videos:${videos}`}</p>
                  <hr />
                  <img src="assets/level.svg" className="mr-2 float-left h-5" />
                  <p>{`Level:${level}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
