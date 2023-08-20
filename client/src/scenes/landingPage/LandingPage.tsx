import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import RatingSection from "../../components/RatingSection/RatingSection";
import SponsorsCarousel from "../../components/SponsorsCarousel/SponsorsCarousel";
import { sponsorsData } from "../../components/SponsorsCarousel/SponsorsData";
import BlogCarousel from "../../components/blogCarousel/BlogCarousel";
import { blogData } from "../../components/blogCarousel/blogData";
import CourseCard from "../../components/courseCard/CourseCard";
import courses from "../../components/courseCard/courses";
import FieldsCards from "../../components/fieldsCards/FieldsCards";
import InstructorCarousel from "../../components/instructorCarousel/InstructorCarousel";
import NavBar from "../../components/navBar/NavBar";
import StatsContainer from "../../components/statsContainer/StatsContainer";
import StatsContainer2 from "../../components/statsContainer2/StatsContainer2";
import TestemonialsCard from "../../components/testmonialsCard/TestemonialsCard";
import TopCategoryCarousel from "../../components/topCategoryCarousel/TopCategoryCarousel";
import { categories } from "../../components/topCategoryCarousel/categoriesData";

function LandingPage() {
  return (
    <div>
      <div className="w-full top-14 h-[920px] bg-gradient-to-l from-blue-300 to-indigo-300]">
        <NavBar />
        <div>
          <div className="text-gray-900 mx-[80px]">
            <div className="flex justify-between flex-row space-x-10">
              <div className="space-y-8 mt-36 ">
                <h2 className="text-gray-600 text-lg">
                  The Leader in Online Virtual interactive Learning
                </h2>
                <p className=" font-extrabold text-[44px]">
                  Interactive & Accessible Online Courses For All
                </p>
                <h2 className="text-gray-600 text-lg">
                  Own your future learning new skills online
                </h2>
                <div className="space-x-4 justify-start ">
                  <Link to="/SubscriptionPackagesPage">
                    <button className="bg-redPal  hover:bg-lightredPal  hover:text-gray-900 text-white font-medium py-2 px-16 rounded-2xl">
                      Try a Demo
                    </button>
                  </Link>
                  <Link to="/About">
                    <button className=" border-redPal border-2 hover:border-lightredPal hover:bg-lightredPal hover:text-gray-800 text-redPal font-medium py-2 px-16 rounded-2xl">
                      Learn more
                    </button>
                  </Link>
                </div>
                <h2 className="text-gray-600 text-lg ">
                  Trusted by over 15K Users <br /> worldwide since 2022
                </h2>
              </div>
              <div className="  mt-48">
                <img src="assets/object.png" className="" />
              </div>
            </div>
            <RatingSection />

            <div className=" mt-60 pb-44">
              <StatsContainer />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-36 mx-[80px] ">
        <div className=" flex space-x-32">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">Academic category</p>
            <p className="font-bold text-4xl ">Academic Feilds</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
        </div>

        <FieldsCards />
      </div>
      <div className=" mt-36 mx-[80px] mb-24 ">
        <div className=" flex space-x-32">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">Favourite Course</p>
            <p className="font-bold text-4xl ">Top Category</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>

          <Link to="/CategoryPage">
            <button className="flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-2 border-bluePal px-3 py-2 rounded-3xl">
              <span className="mr-2">All</span>
              Categories
            </button>
          </Link>
        </div>
        <TopCategoryCarousel categories={categories} />
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage:
            "url(/assets/bg/course-bg.png), url(/assets/bg/landingbanner2.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-24 mx-[80px] mb-24">
          <div className="flex space-x-32">
            <div className="space-y-6">
              <p className="text-redPal font-medium text-lg">What’s New</p>
              <p className="font-bold text-4xl">Featured Courses</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum gravida maecenas augue elementum et
                neque. Suspendisse imperdiet.
              </p>
            </div>
            <Link to="/AllCourses">
              <button className="flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-2 border-bluePal px-4 py-2 rounded-3xl">
                <span className="mr-2">All</span>
                Courses
              </button>
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7">
            {courses.slice(0, 6).map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                instructor={course.instructor}
                rating={course.rating}
                views={course.views}
                category={course.category}
                price={course.price.toString()} courseThumbnailSrc={course.courseThumbnailSrc} instructorAvtr={course.instructorAvtr} instructorJob={course.instructorJob} numLessons={0} duration={""}              />
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-20 mx-[80px] ">
        <div className="space-y-6">
          <p className="text-redPal font-medium text-lg">What’s New</p>
          <p className="font-bold text-4xl ">
            Master the skills to drive your career
          </p>
          <p className="text-gray-500 w-2/3">
            Get certified, master modern tech skills, and level up your career —
            whether you’re starting out or a seasoned pro. 95% of eLearning
            learners report our hands-on content directly helped their careers.
          </p>
        </div>
        <div className="flex space-x-24">
          <div className="grid grid-cols-2 gap-6" style={{ flex: "1" }}>
            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-1.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Stay motivated with engaging instructors
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-2.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Keep up with the latest in cloud
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-3.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Get certified 100+ certification courses
              </p>
            </div>

            <div className="bg-white w-[280px] p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-4.svg" alt="" />
              <p className="text-gray-500 text-sm p-3">
                Build skills your way, from labs to courses
              </p>
            </div>
          </div>

          <img src="assets/join.png" className="md:w-96" alt="" />
        </div>
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage: " url(/assets/bg/banner-bg.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-20 mx-[80px] mb-24">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-lg">TOP News</p>
            <p className="font-bold text-4xl">Virtual Interactive Learning</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>

            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/your-video-id"
              title="Video"
              className="rounded-2xl"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="mt-24 space-y-5 ">
            <p className="font-bold text-4xl text-center">
              Featured Instructor
            </p>
            <p className="text-center text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida <br /> maecenas augue elementum
              et neque. Suspendisse imperdiet.
            </p>
            <InstructorCarousel />
          </div>
        </div>
        <div className="mt-36 mb-24 space-y-5 ">
          <p className="text-redPal font-medium text-lg text-center ">
            Trusted By
          </p>
          <p className="font-bold text-4xl text-center">
            500+ Leading Universities And Companies
          </p>
          <SponsorsCarousel sponsors={sponsorsData} />
        </div>
        <div
          className="w-full top-14 h-full pb-4 bg-cover"
          style={{
            backgroundImage: " url(/assets/bg/landingbanner2.png)",
            backgroundRepeat: "no-repeat, repeat-y",
            backgroundSize: "auto, cover",
          }}
        >
          <div className="mx-[80px] mb-24 pt-16 ">
            <div className="flex justify-between  ">
              <img className="h-96" src="assets/share.png" alt="" />
              <div className="space-y-5  ">
                <p className="font-bold text-4xl">
                  Want to share your knowledge? Join us a Mentor
                </p>
                <p className=" text-gray-500">
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </p>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-lg  ml-2 ">
                    Top rated Instructors
                  </span>
                </div>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-lg  ml-2 ">
                    Best Courses
                  </span>
                </div>

                <Link to="/BecomeaTeacherPage">
                  <button className=" mt-10 items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 border-bluePal px-8 py-2 rounded-3xl">
                    <span className="mr-2">Become</span>a Mentor
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full text-center h-[410px] mb-60 bg-cover"
          style={{
            backgroundImage: " url(/assets/testemo.jpg)",
          }}
        >
          <TestemonialsCard />
        </div>
        <div className="grid grid-cols-2 space-x-6 mb-20   mx-[80px]">
          <div className=" bg-red-100 p-4 rounded-3xl flex ">
            <div className=" space-y-2">
              <p className="text-xl font-bold">Become An Instructor</p>
              <p className=" text-gray-800 font-light">
                Top instructors from around the world teach millions of students
                on Mentoring.
              </p>
            </div>
            <img className="h-44" src="assets/become-02.png" alt="" />
          </div>
          <div className=" bg-amber-200  p-4 rounded-3xl flex ">
            <div className="space-y-2">
              <p className="text-xl font-bold">Transform Access To Education</p>
              <p className=" text-gray-800 font-light">
                Create an account to receive our newsletter, course
                recommendations and promotions.
              </p>
            </div>
            <img className="h-44" src="assets/become-01.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="w-full top-14 h-full pb-4 bg-cover"
        style={{
          backgroundImage: "url(/assets/bg/banner-bg.png)",
          backgroundRepeat: "no-repeat, repeat-y",
          backgroundSize: "auto, cover",
        }}
      >
        <div className="pt-24 mx-[80px] space-y-4 mb-24">
          <p className="text-center text-3xl font-bold ">Latest Blogs</p>
          <p className="text-gray-500 text-sm text-center px-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
          <BlogCarousel blogs={blogData} />
        </div>
        <div className="mx-[90px] my-36 ">
          <StatsContainer2 apiUrl={""} />
        </div>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}

export default LandingPage;
