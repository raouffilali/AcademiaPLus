import React, { useState } from "react";
import { Footer, NavBar } from "../../constants";
import CheckoutComp from "../../components/checkoutComponent/CheckoutComp";
import { Pricing } from "../../components/subsOfferCard/Pricing";
import FAQ from "../../components/FAQ/FAQ";
import { Testimonials } from "../../components/testmonialsCard/Testemonials";
import PathPage from "../../components/PathPage/PathPage";

function SubscriptionPackagesPage() {
  const [displayMonthly, setDisplayMonthly] = useState(true); // State for selected option
  const [selectedDuration, setSelectedDuration] = useState("Monthly");
  const handleDurationChange = (duration: React.SetStateAction<string>) => {
    setSelectedDuration(duration);
  };
  // const handleToggleChange = () => {
  //   setSelectedDuration((prevDuration) => {
  //     switch (prevDuration) {
  //       case "Monthly":
  //         return "Annual";
  //       case "Annual":
  //         return "Semesterly";
  //       case "Semesterly":
  //         return "Monthly";
  //       default:
  //         return "Monthly"; // Default to Monthly in case of unexpected value
  //     }
  //   });
  // };

  return (
    <>
      <NavBar
        isAuthenticated={false}
        isTeacher={false}
        handleLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <PathPage />
      <div className="w-full  top-14 h-full bg-slate-50 bg-[url(assets/bg/academic_bg.png)]">
        <div className=" container  p-6 flex flex-col justify-start items-center mx-auto mt-10">
          <h3>
            <span className="text-lightYelloPal text-4xl font-medium">
              Subscription{" "}
            </span>{" "}
            <span className="text-[#565454] text-4xl font-medium">Plans</span>
          </h3>
          <p className="text-[#B4ACAC] text-3xl  ">
            Choose a plan that works for you .{" "}
          </p>
          <div className="mt-16 max-w-xl md:mx-auto sm:text-center lg:max-w-2xl ">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Our Pricing
              </p>
            </div>
            <h2 className=" max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                    width="52"
                    height="24"
                  />
                  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Our Pricing
                      </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                      <span className="relative inline-block">
                        <svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                          <defs>
                            <pattern
                              id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                              x="0"
                              y="0"
                              width=".135"
                              height=".30"
                            >
                              <circle cx="1" cy="1" r=".7" />
                            </pattern>
                          </defs>
                          <rect
                            fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                            width="52"
                            height="24"
                          />
                        </svg>
                        <span className="relative">Transparent</span>
                      </span>{" "}
                      pricing. Pay as you want.
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      Choose the plan that best fits your needs and get started
                      today! If you have any questions or concerns, please don't
                      hesitate to contact us.
                    </p>
                  </div>
                </svg>
                <span className="relative">Transparent</span>
              </span>{" "}
              pricing. Pay as you want.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Choose the plan that best fits your needs and get started today!
              If you have any questions or concerns, please don't hesitate to
              contact us.
            </p>
          </div>
        </div>
        {/* Subscription Tabs */}
        <div className="flex items-center justify-center mt-4">
          <button
            className={`${
              selectedDuration === "Monthly"
                ? "bg-emerald-500 text-white"
                : "bg-white text-emerald-500"
            } text-lg font-medium px-6 py-2 rounded-l-md focus:outline-none`}
            onClick={() => handleDurationChange("Monthly")}
          >
            Monthly
          </button>
         
          <button
            className={`${
              selectedDuration === "Semesterly"
                ? "bg-emerald-500 text-white"
                : "bg-white text-emerald-500"
            } text-lg font-medium px-6 py-2 focus:outline-none`}
            onClick={() => handleDurationChange("Semesterly")}
          >
            Semesterly
          </button>
          <button
            className={`${
              selectedDuration === "Annual"
                ? "bg-emerald-500 text-white"
                : "bg-white text-emerald-500"
            } text-lg font-medium px-6 rounded-r-md py-2 focus:outline-none`}
            onClick={() => handleDurationChange("Annual")}
          >
            Annual
          </button>
        </div>
     
        <Pricing
          displayMonthly={selectedDuration === "Monthly"}
          selectedDuration={selectedDuration}
        />
      </div>
      {/* text of why we are different */}
      <h1 className="  mt-24 text-[#565454] text-center text-2xl font-extrabold ">
        Why We Are Different From Others?
      </h1>
      <div className="w-[370px] mb-5">
        {" "}
        <p className="text-[#857474] p-2">
          We have highly professional mentors around the globe. We have great
          features than any other platform.
        </p>
      </div>
      {/* Stats section */}
      <div className="mx-[80px]">
        <h1 className="  mt-10 text-[#565454] text-center text-2xl font-extrabold ">
          Platform Features
        </h1>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 ">
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img
              src="assets/icon/virtual-reality.png"
              className="h-14 w-14"
              alt=""
            />
            <h1 className="font-medium text-lg"> Virtual Learning</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img
              src="assets/icon/online-courses.png"
              className="h-14 w-14"
              alt=""
            />
            <h1 className="font-medium text-lg"> interactive online courses</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img
              src="assets/icon/online-learning.png"
              className="h-14 w-14"
              alt=""
            />
            <h1 className="font-medium text-lg"> Academic Fields</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img
              src="assets/icon/group-chat.png"
              className="h-14 w-14"
              alt=""
            />
            <h1 className="font-medium text-lg"> Community Groups</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img src="assets/icon/books.png" className="h-14 w-14" alt="" />
            <h1 className="font-medium text-lg"> 3D Book Store</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className=" space-y-2 text-center border border-gray-100 rounded-xl bg-white h-full w-full p-6 py-12">
            <img src="assets/icon/game.png" className="h-14 w-14" alt="" />
            <h1 className="font-medium text-lg"> Educational Games</h1>
            <p className="text-gray-600 font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 w-full">
        <h1 className="  mt-24 pt-10 text-[#565454] text-center text-2xl font-extrabold ">
          Testimonials
        </h1>
        <div className="grid  grid-col-1 md:grid-cols-3 mt-5 gap-8 py-8 mx-[80px]">
          {Testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4   rounded-xl">
              <img
                src={testimonial.imgURl}
                alt={testimonial.name}
                className="h-12 w-12 mx-auto rounded-full mb-2"
              />

              <h4 className="text-lg font-bold text-center ">
                {testimonial.name}
              </h4>
              <h2 className="text-gray-500 text-sm ml-auto text-center ">
                {testimonial.job}
              </h2>
              <div className="rounded-lg bg-gray-100 mt-2 p-2 ">
                <p className="text-sm text-black font-light italic mt-8 p-2">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 w-full  top-14 h-full bg-white  bg-[url(assets/bg/academic_bg.png)]">
        <CheckoutComp />
        {/* Add the FAQ section */}
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default SubscriptionPackagesPage;
