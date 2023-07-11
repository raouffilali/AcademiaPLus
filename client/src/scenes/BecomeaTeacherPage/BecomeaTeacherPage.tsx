import React from "react";
import NavBar from "../../components/navBar/NavBar";
import StatsContainer from "../../components/statsContainer/StatsContainer";
import { useState } from "react";
import { Footer } from "../../components";
import "./BecomeaTeacherPage.css";
import Form from "../../components/BecomeInstructorForm/Form";
import StatsContainer2 from "../../components/statsContainer2/StatsContainer2";

type Tab = "Plan" | "Record" | "Launch";

function BecomeaTeacherPage() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const [activeTab, setActiveTab] = useState("Plan");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <NavBar />
      <div>
        {isFormVisible && (
          <div className="blur-overlay" onClick={toggleFormVisibility} />
        )}
      </div>
      <div className=" flex flex-row mt-14 justify-between   ">
        <div className=" mx-[85px] flex flex-col">
          <p className="font-Lato text-[46px] mt-20  text-gray-800 font-bold">
            Come teach <br /> with us
          </p>
          <p className="text-gray-500">
            Become an instructor and change <br /> lives — including your own
          </p>
          <button
            className="mt-5 p-4 rounded-md text-white font-normal bg-blueLink hover:bg-DarkBluePal"
            onClick={toggleFormVisibility}
          >
            Get Started
          </button>
          {isFormVisible && (
            <div className="popup">
              <button
                className=" text-white close-button px-3"
                onClick={toggleFormVisibility}
              >
                x
              </button>
              <Form />
            </div>
          )}
        </div>
        <div className="">
          <img src="/assets/Teach.jpg" alt="" className="w-[620px] h-[435px]" />
        </div>
      </div>
      <div className="mx-[80px] bg-white text-gray-800 flex flex-col  relative  ">
        <p className="mt-20 flex justify-center items-center font-Lato text-[38px] font-bold">
          So many reasons to start
        </p>
        <div className=" mt-20 mb-20 flex justify-between w-full">
          <div className="justify-center items-center flex flex-col space-y-2 ">
            <img src="assets/instruct.png" alt="" className="h-18" />
            <p className=" font-extrabold">Teach your way</p>
            <p className="text-sm">
              Publish the course you want, in the way you <br /> want, and
              always have control of your own <br /> content.
            </p>
          </div>
          <div className="justify-center items-center flex flex-col space-y-2 ">
            <img src="assets/inspire.png" className="h-12 w-14" alt="" />
            <p className=" font-extrabold">Inspire learners</p>
            <p className="text-sm">
              Teach what you know and help learners explore <br /> their
              interests, gain new skills, and advance <br /> their careers.
            </p>
          </div>
          <div className="justify-center items-center flex flex-col space-y-2 ">
            <img src="assets/rewarded.png" className="h-12 w-14" alt="" />
            <p className=" font-extrabold">Get rewarded</p>
            <p className=" text-sm">
              Expand your professional network, build your <br /> expertise, and
              earn money on each paid <br /> enrollment.
            </p>
          </div>
        </div>

        <p className="mt-20 flex justify-center items-center font-Lato text-[38px] font-bold">
          How to begin
        </p>
        <div className="flex justify-center items-center space-x-12 mb-[10px] mt-[30px] pl-[7px] font-Lato font-bold text-[20px] leading-normal cursor-pointer ">
          <p
            className={` font-Lato ${
              activeTab === "Plan"
                ? "border-b-2 border-black "
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleTabClick("Plan")}
          >
            Plan Your Curriculum
          </p>
          <p
            className={`text-gray-500  ${
              activeTab === "Record"
                ? "border-b-2 border-red-500  text-red-500"
                : "text-gray-500  hover:text-red-500"
            }`}
            onClick={() => handleTabClick("Record")}
          >
            Record Your Video
          </p>
          <p
            className={` ${
              activeTab === "Launch"
                ? "border-b-2 border-green-600 text-green-600 "
                : "text-gray-500 hover:text-green-600"
            }`}
            onClick={() => handleTabClick("Launch")}
          >
            Launch Your Course
          </p>
        </div>
        <div className="mb-24 flex justify-center  ">
          {activeTab === "Plan" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Plan" tab */}
              <div className="flex flex-row justify-between items-center space-x-16 mt-20 ">
                <div className="flex flex-col  w-[350px] space-y-10 ">
                  <p>
                    You start with your passion and knowledge. Then choose a
                    promising topic with the help of our Marketplace Insights
                    tool. The way that you teach — what you bring to it — is up
                    to you.
                  </p>
                  <p className="font-bold text-lg">How we help you</p>
                  <p>
                    We offer plenty of resources on how to create your first
                    course. And, our instructor dashboard and curriculum pages
                    help keep you organized.
                  </p>
                </div>
                <div>
                  <img
                    className="w-[380px] h-[320px]"
                    src="/assets/teach.png"
                    alt="plan-pic"
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === "Record" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Record" tab */}
              <div className="flex flex-row justify-between space-x-16 items-center mt-20 ">
                <div className="flex flex-col  w-[350px] space-y-10 ">
                  <p>
                    Use basic tools like a smartphone or a DSLR camera. Add a
                    good microphone and you’re ready to start. If you don’t like
                    being on camera, just capture your screen. Either way, we
                    recommend two hours or more of video for a paid course.
                  </p>
                  <p className="font-bold text-lg">How we help you</p>
                  <p>
                    Our support team is available to help you throughout the
                    process and provide feedback on test videos.
                  </p>
                </div>
                <div>
                  <img
                    className="w-[280px] h-[380px]"
                    src="/assets/record.png"
                    alt="record-pic"
                  />
                </div>
              </div>
            </div>
          )}
          {activeTab === "Launch" && (
            <div className="flex justify-between space-x-4 pt-2 pb-5 flex-start">
              {/* content for "Launch" tab */}
              <div className="flex flex-row justify-between items-center space-x-16 mt-20 ">
                <div className="flex flex-col  w-[350px] space-y-10 ">
                  <p>
                    Gather your first ratings and reviews by promoting your
                    course through social media and your professional networks.
                    Your course will be discoverable in our marketplace where
                    you earn revenue from each paid enrollment.
                  </p>
                  <p className="font-bold text-lg">How we help you</p>
                  <p>
                    Our custom coupon tool lets you offer enrollment incentives
                    while our global promotions drive traffic to courses.
                    There’s even more opportunity for courses chosen for Udemy
                    Business.
                  </p>
                </div>
                <div>
                  <img
                    className="w-[350px] h-[320px]"
                    src="/assets/Launch.png"
                    alt="Launch-pic"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-20 mb-40 flex flex-col justify-center items-center">
          <p className=" mb-3 font-Lato text-[38px] font-bold">
            You won’t have to do it alone
          </p>
          <p className="w-[580px] items-center justify-center">
            Our{" "}
            <span className="font-bold text-lg">Instructor Support Team</span>{" "}
            is here to answer your questions and review your test video, while
            our <span className="font-bold text-lg">Teaching Center </span>{" "}
            gives you plenty of resources to help you through the process. Plus,
            get the support of experienced instructors in our{" "}
            <span className="font-bold text-lg">online community</span>.
          </p>
        </div>
      </div>
      <div className="mx-[80px]"><StatsContainer2 apiUrl={""} /></div>
      
      <div className=" bg-[url('assets/bg/banner-bg.png')] w-full h-[320px]">
        <div className="mt-20 mb-40 flex flex-col justify-center items-center">
          <p className=" mt-20 font-Lato text-[38px] font-bold">
            Become an instructor today
          </p>
          <p className="text-gray-800  text-[20px]">
            Join one of the world’s largest online learning <br /> marketplaces.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BecomeaTeacherPage;
