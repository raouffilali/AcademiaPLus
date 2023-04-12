import React from "react";

function PackageCard() {
  return (
    // first div just a text and description
    <>
      {/* // first div just a text and description */}
      <div className=" container  p-6 flex flex-col justify-start items-center mx-auto mt-10 mb-20">
        <h3>
          <span className=" text-lightYelloPal text-xl font-medium">
            Subscription{" "}
          </span>{" "}
          <span className="text-[#565454] text-xl font-medium">Plans</span>
        </h3>
        <p className="text-[#B4ACAC] text-lg  ">
          Choose a plan that works for you .{" "}
        </p>

        {/* // second div is the cards */}
        <div className=" mt-14 w-[800px] h-[800px] p-20 bg-[#E8F1F0] "></div>

        {/* text of why we are diffrent */}
        <h1 className="  mt-5 text-[#565454] text-2xl font-extrabold ">
          Why We Are Different From Others?
        </h1>
        <div className=" w-[370px]">
          {" "}
          <p className="text-[#857474] p-2">
            We have highly professional mentors around the globe. We have great
            features than any other platform.
          </p>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
