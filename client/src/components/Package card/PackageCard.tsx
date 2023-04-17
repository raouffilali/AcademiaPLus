import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../navBar/NavBar";
import { Pricing } from "../subsOfferCard/Pricing";
import SubscriptionCard from "../subsOfferCard/SubsOfferCard";

function PackageCard() {
  return (
    // first div just a text and description
    <>
      <NavBar />
      {/* // first div just a text and description */}
      <div className=" container  p-6 flex flex-col justify-start items-center mx-auto mt-10 mb-20">
        <h3>
          <span className=" text-lightYelloPal text-4xl font-medium">
            Subscription{" "}
          </span>{" "}
          <span className="text-[#565454] text-4xl font-medium">Plans</span>
        </h3>
        <p className="text-[#B4ACAC] text-3xl  ">
          Choose a plan that works for you .{" "}
        </p>

        {/* // second div is the cards */}
        <Pricing />

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
        {/* Stats section */}
        <img
          className="p-10"
          src="../../../assets/stats.png"
          alt="statistics"
        />
        <img
          className="p-10"
          src="../../../assets/stats2.png"
          alt="statistics"
        />
      </div>
      <Footer />
    </>
  );
}

export default PackageCard;
