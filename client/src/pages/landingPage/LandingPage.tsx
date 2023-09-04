import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BlogCarousel,
  blogData,
  categories,
  CourseCard,
  courses,
  FieldsCards,
  Footer,
  InstructorCarousel,
  NavBar,
  RatingSection,
  ScrollToTopButton,
  SponsorsCarousel,
  sponsorsData,
  StatsContainer,
  StatsContainer2,

  TopCategoryCarousel,
  TestemonialsCard,
} from "../../constants";


function LandingPage() {
  return (
    <div>
      <div className="lg:w-full top-14 md:h-[920px] bg-gradient-to-r from-red-50 to-[#bedbfc]">
        <NavBar isAuthenticated={true}  isFixed={true} isTeacher={false} handleLogout={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <div>
          <ScrollToTopButton />
          <div className="text-gray-900 mx-[12px] lg:mx-[80px]">
            <div className="lg:flex justify-between flex-row space-x-4 lg:space-x-10">
              <div className="lg:space-y-8 space-y-4 mt-20 lg:mt-32 ">
                <h2 className="text-gray-600 lg:text-lg">
                  The Leader in Online Virtual interactive Learning
                </h2>
                <p className=" font-extrabold text-3xl lg:text-[44px]">
                  Interactive & Accessible Online Courses For All
                </p>
                <h2 className="text-gray-600 text-lg">
                  Own your future learning new skills online
                </h2>
                <div className=" lg:space-x-4 mt-6  space-y-2 lg:justify-start ">
                  <Link to="/subscription">
                    <button className="bg-redPal  lg:mb-0 mb-2 justify-center items-center hover:shadow-xl  text-white font-medium py-2 px-16 rounded-xl">
                      Try a Demo
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className=" justify-center items-center  border-redPal border-2  hover:bg-redPal hover:text-white text-redPal font-medium py-2 px-16 rounded-xl">
                      Learn more
                    </button>
                  </Link>
                </div>
                <h2 className="text-gray-600 text-lg ">
                  Trusted by over 15K Users <br /> worldwide since 2022
                </h2>
              </div>
              <div className="lg:mt-48 mt-6">
                <img src="assets/object.png" className="" />
              </div>
            </div>
            <RatingSection />

            <div className=" lg:mt-40 mt-12 pb-2 lg:pb-44">
              <StatsContainer />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:mt-36 mt-24 mx-[12px] lg:mx-[80px] ">
        <div className="space-y-6">
          <p className="text-redPal font-medium text-sm lg:text-lg">
            Academic category
          </p>
          <p className="font-bold text-3xl lg:text-4xl ">Academic Feilds</p>
          <p className="text-gray-500 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>

        <FieldsCards />
      </div>
      <div className="lg:mt-36 mt-24 mx-[12px] lg:mx-[80px]  mb-24 ">
        <div className=" lg:flex lg:space-x-32 ">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-sm lg:text-lg">
              Favourite Course
            </p>
            <p className="font-bold text-3xl lg:text-4xl ">Top Category</p>
            <p className="text-gray-500 text-sm lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>

          <Link to="/category">
            <button className="mt-2 lg:mt-0 flex items-center text-lightBluePal hover:text-white font-medium  hover:bg-bluePal border-4 border-bluePal px-3 lg:py-2 py-1 rounded-3xl">
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
        <div className="lg:pt-24 lg:mx-[80px] lg:mb-24 pt-8 mx-[12px] mb-8">
          <div className="lg:flex lg:space-x-32">
            <div className="space-y-6">
              <p className="text-redPal font-medium text-sm lg:text-lg">
                What’s New
              </p>
              <p className="font-bold text-3xl lg:text-4xl">Featured Courses</p>
              <p className="text-gray-500 text-sm lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                aenean accumsan bibendum gravida maecenas augue elementum et
                neque. Suspendisse imperdiet.
              </p>
            </div>
            <Link to="/allCourses">
              <button className="mt-2 lg:mt-0 flex items-center text-lightBluePal hover:text-white hover:bg-bluePal border-4 font-medium  border-bluePal py-1 px-4 lg:py-2 rounded-3xl">
                <span className="mr-2">All</span>
                Courses
              </button>
            </Link>
          </div>
          <div className="lg:mt-16 mt-8 grid grid-cols-1  md:grid-cols-3 gap-7">
            {courses.slice(0, 6).map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                instructor={course.instructor}
                rating={course.rating}
                views={course.views}
                category={course.category}
                price={course.price.toString()}
                courseThumbnailSrc={course.courseThumbnailSrc}
                instructorAvtr={course.instructorAvtr}
                instructorJob={course.instructorJob}
                numLessons={0}
                duration={""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" mt-20 mx-[12px] lg:mx-[80px] mb-20 ">
        <div className="space-y-6">
          <p className="text-redPal font-medium text-sm lg:text-lg">
            What’s New
          </p>
          <p className="font-bold text-3xl lg:text-4xl ">
            Master the skills to drive your career
          </p>
          <p className="text-gray-500 lg:text-lg text-sm lg:w-2/3">
            Get certified, master modern tech skills, and level up your career —
            whether you’re starting out or a seasoned pro. 95% of eLearning
            learners report our hands-on content directly helped their careers.
          </p>
        </div>
        <div className="lg:flex lg:space-x-24 space-y-4">
          <div className="grid lg:grid-cols-2 gap-6 mt-6" style={{ flex: "1" }}>
            <div className="bg-white  p-6  border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-1.svg" alt="" />
              <p className="text-gray-500 text-xs font-medium lg:text-sm p-3">
                Stay motivated with engaging instructors
              </p>
            </div>

            <div className="bg-white  p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-2.svg" alt="" />
              <p className="text-gray-500 text-xs font-medium lg:text-sm p-3">
                Keep up with the latest in cloud
              </p>
            </div>

            <div className="bg-white p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-3.svg" alt="" />
              <p className="text-gray-500 text-xs font-medium lg:text-sm p-3">
                Get certified 100+ certification courses
              </p>
            </div>

            <div className="bg-white p-6 border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 flex-grow">
              <img src="assets/icon/icon-4.svg" alt="" />
              <p className="text-gray-500 text-xs font-medium lg:text-sm p-3">
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
        <div className="lg:pt-24 lg:mx-[80px] lg:mb-24 pt-8 mx-[12px] mb-8">
          <div className="space-y-6">
            <p className="text-redPal font-medium text-sm lg:text-lg">
              TOP News
            </p>
            <p className="font-bold text-3xl lg:text-4xl">
              Virtual Interactive Learning
            </p>
            <p className="text-gray-500 text-sm lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>

            <iframe
              src="https://www.youtube.com/embed/fqh-tEoorqo"
              title="Video"
              className="rounded-2xl w-[245px] lg:w-[760px] lg:h-[415px]"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="mt-24 space-y-5 ">
            <p className="font-bold text-3xl lg:text-4xl text-center">
              Featured Instructor
            </p>
            <p className="text-center text-sm lg:text-lg text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida <br /> maecenas augue elementum
              et neque. Suspendisse imperdiet.
            </p>
            <InstructorCarousel />
          </div>
        </div>
        <div className="lg:pt-24 lg:mx-[80px] lg:mb-24 pt-8 mx-[12px] mb-8 space-y-5 ">
          <p className="text-redPal font-medium  text-sm lg:text-lg text-center ">
            Trusted By
          </p>
          <p className="font-bold text-3xl lg:text-4xl text-center">
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
          <div className="lg:pt-16 lg:mx-[80px] lg:mb-24 pt-8 mx-[12px] mb-8  ">
            <div className="lg:flex justify-between  ">
              <img className="lg:h-96" src="assets/share.png" alt="" />
              <div className="space-y-5  ">
                <p className="font-bold text-3xl lg:text-4xl">
                  Want to share your knowledge? Join us a Mentor
                </p>
                <p className=" text-gray-500 text-sm lg:text-lg">
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </p>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-sm lg:text-lg  ml-2 ">
                    Top rated Instructors
                  </span>
                </div>
                <div className="   ">
                  <FaCheckCircle
                    className=" inline-block text-redPal"
                    size={18}
                  />
                  <span className="font-medium  text-sm lg:text-lg  ml-2 ">
                    Best Courses
                  </span>
                </div>

                <Link to="/becomeaTeacher">
                  <button className=" lg:mt-10 mt-4 items-center text-lightBluePal hover:text-white hover:bg-bluePal lg:border-4 border-2 text-sm lg:text-lg border-bluePal lg:px-8 px-6 py-2 rounded-3xl">
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
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:space-x-6 space-y-6 mb-20 mx-[12px]  lg:mx-[80px]">
          <div className="lg:flex bg-red-100 p-4 rounded-3xl ">
            <div className=" space-y-2">
              <p className="text-xl font-bold">Become An Instructor</p>
              <p className=" text-gray-800 text-sm lg:text-base font-light">
                Top instructors from around the world teach millions of students
                on Mentoring.
              </p>
            </div>
            <img className="lg:h-44" src="assets/become-02.png" alt="" />
          </div>
          <div className=" bg-amber-200  p-4 rounded-3xl lg:flex ">
            <div className="space-y-2">
              <p className="text-xl font-bold">Transform Access To Education</p>
              <p className=" text-gray-800 text-sm lg:text-base font-light">
                Create an account to receive our newsletter, course
                recommendations and promotions.
              </p>
            </div>
            <img className="lg:h-44  " src="assets/become-01.png" alt="" />
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
        <div className="lg:pt-16 lg:mx-[80px] lg:mb-24 pt-6 mx-[12px] space-y-4 mb-8 ">
          <p className="text-center text-3xl font-bold ">Latest Blogs</p>
          <p className="text-gray-500 text-sm text-center  lg:px-44">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
          <BlogCarousel blogs={blogData} />
        </div>
        <div className="lg:mx-[90px] mx-[12px] lg:my-36 my-24 ">
          <StatsContainer2 apiUrl={""} />
        </div>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}

export default LandingPage;
