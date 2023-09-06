import { useEffect, useState } from "react";
import { NavBar } from "../../constants";
import { useParams, useLocation } from "react-router-dom";
import PathPage from "../../components/PathPage/PathPage";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import EnrollCourse from "../../components/EnrollCourse/EnrollCourse";
import CourseContentCard from "../../components/CourseContentCard/CourseContentCard";
import CommentForm from "../../components/CommentForm/CommentForm";

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
    description,
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
   // Define and set initial value for numLessons
  //  const [duration, setDuration] = useState("");
  
  // const [numLessons, setNumLessons] = useState(0); 

  useEffect(() => {
    fetch(`your-backend-endpoint/courses/${courseName}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.videos);
        setResources(data.resources);
        setStudentsEnrolled(data.studentsEnrolled);
        // setDuration(data.duration);
        setLevel(data.level);
        // setNumLessons(data.numLessons); // Set the value of numLessons from the response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [courseName]);
  return (
    <div>
      <NavBar
        isAuthenticated={false}
        isTeacher={false}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <PathPage />
      <div className="bg-gray-100   ">
        <div
          className=" justify-start items-start  relative mt-6 w-full  h-[300px]  "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url('/assets/coursedeta.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="lg:flex md:flex md:mx-[80px] lg:mx-[80px] mx-[12px] space-x-5">
            <div className=" items-start  pt-10  lg:w-4/5 ml-0   ">
              <div className="">
                <CourseDetail
                  instructorAvtr={instructorAvtr}
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
              <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg   items-start border border-neutral-200 mt-24">
                <div className="pl-6 mt-6 mb-6 justify-between space-y-4 ">
                  <p className="font-bold text-DarkBluePal">Overview</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Course Description
                  </p>
                  <p className="font-light text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                    {courseDesc}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    What you will learn
                  </p>
                  <p className="font-light text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellendus qui inventore nam, itaque fugiat quos deser
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    Requirements
                  </p>
                  <p className="text-sm font-light ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facilis error dolores est atque voluptate sint? Sequi eius officiis voluptas a .
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg items-start border border-neutral-200 ">
                <div className="pl-6 mt-6 mb-6 justify-between space-y-4 ">
                  <p className="font-bold text-DarkBluePal">Course Content</p>
                  <CourseContentCard />
                </div>
              </div>
              <div className="bg-white rounded-lg items-start border border-neutral-200 ">
                <div className="pl-6 mt-6 mb-6 justify-between space-y-4 ">
                  <CommentForm />
                </div>
              </div>
              </div>
            </div>

            <div className="mt-10  lg:w-2/6 md:2/6 mr-0 ">
              <EnrollCourse
                discount="100% Off"
                price={price}
                videoUrl="https://www.youtube.com/embed/6qLq7xkodA8&list=PLtS8Ubq2bIlUWixdH_1Q2yzZh8QJSBVmT"
                onAddToCart={function (): void {
                  throw new Error("Function not implemented.");
                } } onAddToWishlist={function (): void {
                  throw new Error("Function not implemented.");
                } }              />
              {/* Elements below EnrollCourse */}
              <div className="space-y-6 mt-6 flex-col mb-10">
                <div className="bg-white rounded-lg  border border-neutral-200">
                  <div className="list-disc pl-6 mt-6 mb-6 justify-between space-y-4 font-light text-sm">
                    <p className="font-bold text-gray-800 text-lg">Includes</p>
                    <img
                      src="/assets/import.svg"
                      className="  mr-2 float-left h-5"
                    />
                    <p>{`${videos} hours on-demand video`}</p>
                    <img
                      src="/assets/play.svg"
                      className="mr-2  float-left h-5"
                    />
                    <p>{`${resources} downloadable resources`}</p>
                    <img
                      src="/assets/key.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>Full lifetime access</p>
                    <img
                      src="/assets/mobile.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>Access on mobile and TV</p>
                    <img
                      src="/assets/cloud.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>Assignments</p>
                    <img
                      src="/assets/teacher.svg"
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
                      src="/assets/users.svg"
                      className="  mr-2 float-left h-5"
                    />
                    <p>{`Enrolled: ${studentsEnrolled}`}</p>
                    <hr />
                    <img
                      src="/assets/duration.svg"
                      className="mr-2  float-left h-5"
                    />
                    <p>{`Duration: ${duration} `}</p>
                    <hr />
                    <img
                      src="/assets/chapter.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>{`Chapters:${numLessons}`}</p>
                    <hr />
                    <img
                      src="/assets/video.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>{`Videos:${videos}`}</p>
                    <hr />
                    <img
                      src="/assets/level.svg"
                      className="mr-2 float-left h-5"
                    />
                    <p>{`Level:${level}`}</p>
                  </div>
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
