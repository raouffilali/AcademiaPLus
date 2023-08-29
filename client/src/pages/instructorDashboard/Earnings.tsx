import { LuShoppingBag } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { GrLineChart } from "react-icons/gr";
import BestSellingCourses from "../../components/BestSellingCourses/BestSellingCourses";
import EarningsChart from "../../components/EarningsChart/EarningsChart";
import { bestSellingCoursesData } from "../../data/bestSellingCoursesData";
import { earningsData } from "../../data/cartData";

function Earnings() {
  // functions to handle remove and edit logic
  function handleRemoveCourse(id: number): void {
    throw new Error("Function not implemented.");
  }

  function handleEditCourse(id: number): void {
    throw new Error("Function not implemented.");
  }
  const totalEarnings = 321001;
  const payoutUpdatePercentage = 32;

  return (
    <div className="mb-6 space-y-6  ">
      <div className="bg-white shadow rounded-md mb-6 p-4">
        <p className="text-lg font-medium">Earnings</p>
        <p className="text-gray-500 text-sm">
          You have full control to manage your own account setting
        </p>
      </div>
      <div className=" bg-white shadow rounded-md mb-6 p-4">
        <div>
          <EarningsChart data={earningsData} />
        </div>
        <div className="py-4">
          <div className="ml-0 flex w-10 h-8 rounded bg-emerald-100 text-white ">
            <FaShoppingCart className="text-md text-emerald-500" />
          </div>
          <p className="text-lg font-medium">DA {totalEarnings}</p>
          <p className="text-gray-500 text-sm">Your total earnings</p>
          <hr className="border-2 " />
          <GrLineChart className="text-white text-xl ml-0" />
          <p className="mr-2 bg-emerald-500 rounded text-center my-2 text-white  ">
            {" "}
            {payoutUpdatePercentage}%
          </p>
          <p className="text-sm text-gray-500">
            Update your payout method in settings.
          </p>
        </div>
      </div>

      <div className="w-ful ">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center">
          {/* Revenue Card */}
          <div className="bg-white p-6 rounded-lg shadow flex-1">
            <div className="flex items-center">
              <div className="ml-0 flex w-8 h-6 rounded bg-emerald-100 text-white ">
                <FiFolder className="text-xs text-emerald-500" />
              </div>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">
              DA 467.34
            </p>
            <p className="text-gray-500 text-sm ">Earning this month</p>
            <div className="relative  py-4 w-full">
              <div className="absolute bg-emerald-600 rounded h-0.5 w-2/3"></div>
              <div className="absolute left-1/2 rounded bg-gray-300 h-0.5 w-1/3"></div>
            </div>
          </div>

          {/* Students Enrollments Card */}
          <div className="bg-white p-6 rounded-lg shadow flex-1">
            <div className="flex items-center">
              <div className="ml-0 flex w-8 h-6 rounded bg-red-100 text-white ">
                <LuShoppingBag className="text-xs text-redPal" />
              </div>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">
              DA 12,000
            </p>
            <p className="text-gray-500 text-sm">Account Balance </p>
            <div className="relative  py-4 w-full">
              <div className="absolute bg-red-600 rounded h-0.5 w-2/3"></div>
              <div className="absolute left-1/2 rounded bg-gray-300 h-0.5 w-1/3"></div>
            </div>
          </div>

          {/* Courses Rating Card */}
          <div className="bg-white p-6 rounded-lg shadow flex-1">
            <div className="flex items-center">
              <div className="ml-0 flex w-8 h-6 rounded bg-orange-100 text-white ">
                <LiaTelegramPlane className="text-md text-orange-500" />
              </div>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">
              {" "}
              DA 10,800
            </p>
            <p className="text-gray-500 text-sm">Life Time Sales</p>
            <div className="relative  py-4 w-full">
              <div className="absolute bg-orange-400 rounded h-0.5 w-2/3"></div>
              <div className="absolute left-1/2 rounded bg-gray-300 h-0.5 w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
      <BestSellingCourses
        courses={bestSellingCoursesData}
        onRemoveCourse={handleRemoveCourse}
        onEditCourse={handleEditCourse}
      />
    </div>
  );
}

export default Earnings;
