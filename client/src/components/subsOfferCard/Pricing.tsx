import React, { useState } from "react";
interface PricingProps {
  displayMonthly: boolean;
}
export const Pricing: React.FC<PricingProps> = ({ displayMonthly }) => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 scroll-smooth">
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {/* Monthly Plan */}
        <div className={`flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-3xl shadow-lg sm:items-center ${displayMonthly ? "hover:shadow" : ""}`}>
          <div className="text-center">
            <div className="text-lg font-semibold">Start</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">Free</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">Free courses provided</div>
              <div className="text-gray-700">Free account</div>
              <div className="text-gray-700">Free access to exams and courses</div>
            </div>
          </div>
          <div>
            <a
              href="#checkout"
              className={`scroll-smooth inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                displayMonthly ? "bg-emerald-500 hover:bg-emerald-600" : "bg-emerald-500 hover:bg-emerald-600"
              } focus:shadow-outline focus:outline-none`}
            >
              {displayMonthly ? "Start for free" : "Subscribe to Start"}
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              {displayMonthly
                ? "All you need to do to access our free content is sign up"
                : "Unlock exclusive benefits with Start membership."}
            </p>
          </div>
        </div>

        {/* Most Popular (Annual) */}
        <div className={`relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-3xl shadow-2xl sm:items-center ${!displayMonthly ? "hover:shadow" : ""} border-emerald-500`}>
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-yellow-500 uppercase rounded-3xl">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Gold</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">700DA</div>
              <div className="text-gray-700">/ {displayMonthly ? "mo" : "yr"}</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">
                Get access to some of exclusive tools in our{" "}
                <span className="font-bold">ACADEMIA-PLUS</span>{" "}
              </div>
              <div className="text-gray-700">Get access to all Exams, Courses, Live Stream, and more </div>
              {displayMonthly ? (
                <div className="text-gray-700">
                  <span className="font-bold">1</span>-Free Coupons monthly for different general courses{" "}
                </div>
              ) : (
                <div className="text-gray-700">
                  <span className="font-bold">12</span>-Free Coupons annually for different general courses{" "}
                </div>
              )}
            </div>
          </div>
          <div>
            <a
              href="#checkout"
              className={`inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                !displayMonthly ? "bg-yellow-500 hover:bg-yellow-400" : "bg-yellow-500 hover:bg-yellow-400"
              } focus:shadow-outline focus:outline-none`}
            >
              {displayMonthly ? "Subscribe to Gold" : "Subscribe to Gold"}
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              {displayMonthly
                ? "Unlock exclusive benefits with Gold membership."
                : "Unlock exclusive benefits with Gold membership (Annual Plan)."}
            </p>
          </div>
        </div>

        {/* Annual Plan */}
        <div className={`flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-3xl shadow-lg sm:items-center ${!displayMonthly ? "hover:shadow" : ""}`}>
          <div className="text-center">
            <div className="text-lg font-semibold">Diamond</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">2000DA</div>
              <div className="text-gray-700">/ {displayMonthly ? "mo" : "yr"}</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">
                {" "}
                Get access All exclusive tools in our{" "}
                <span className="font-bold">ACADEMIA-PLUS</span>{" "}
              </div>
              <div className="text-gray-700">Get access to all Exams, Courses, Live Stream, and LAB</div>
              <div className="text-gray-700">
                {displayMonthly ? (
                  <span className="font-bold">Up to 4</span>
                ) : (
                  <span className="font-bold">Up to 48</span>
                )}{" "}
                -Free Coupons {displayMonthly ? "monthly" : "annually"} for different general courses{" "}
              </div>
              <div className="text-gray-700">24/7 Support</div>
            </div>
          </div>
          <div>
            <a
              href="#checkout"
              className={`inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${
                !displayMonthly ? "bg-emerald-500 hover:bg-emerald-600" : "bg-emerald-500 hover:bg-emerald-600"
              } focus:shadow-outline focus:outline-none`}
            >
              {displayMonthly ? "Subscribe to Diamond" : "Subscribe to Diamond "}
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              {displayMonthly
                ? "Take advantage of our most comprehensive offering with Diamond."
                : "Take advantage of our most comprehensive offering with Diamond (Annual Plan)."}
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};
