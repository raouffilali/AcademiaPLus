import React from "react";

import BestSellingCourses from "../../components/BestSellingCourses/BestSellingCourses";
import EarningsChart from "../../components/EarningsChart/EarningsChart";
import OrdersChart from "../../components/ordersCart/OrdersCart";
import { earningsData, ordersData } from "../../data/cartData";
import { bestSellingCoursesData } from "../../data/bestSellingCoursesData";
interface DashboardProps {
  // You can pass any necessary props here if needed
}
const Dashboard: React.FC<DashboardProps> = () => {
  // Event handler for removing a course
  const handleRemoveCourse = (id: number) => {
    // Implement the logic to remove the course with the given id
    // Update the bestSellingCourses array accordingly
  };

  // Event handler for editing a course
  const handleEditCourse = (id: number) => {
    // Implement the logic to edit the course with the given id
    // You might navigate to an edit page or open a modal
  };
  return (
    <div className="space-y-6 ">
      <div className="w-ful ">
        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-6 justify-center">
          {/* Revenue Card */}
          <div className="bg-white w-full  p-6 rounded-lg shadow lg:flex-1">
            <div className="flex items-center">
              <p className="text-gray-600 text-xs font-medium ">REVENUE</p>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">
              DA 467.34
            </p>
            <p className="text-gray-500 text-sm ">
              Earning this month:{" "}
              <span className="text-white bg-emerald-500 p-0.5 rounded ">
                {" "}
                203.23
              </span>{" "}
            </p>
          </div>

          {/* Students Enrollments Card */}
          <div className="bg-white w-full  p-6 rounded-lg shadow flex-1">
            <div className="flex items-center">
              <p className="text-gray-600 text-xs font-medium">
                STUDENTS ENROLLMENTS
              </p>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">12,000</p>
            <p className="text-gray-500 text-sm">
              New this month:{" "}
              <span className="text-white bg-blue-500 p-0.5 rounded ">
                {" "}
                120+
              </span>
            </p>
          </div>

          {/* Courses Rating Card */}
          <div className="bg-white w-full p-6 rounded-lg shadow flex-1">
            <div className="flex items-center">
              <p className="text-gray-600 text-xs font-medium">
                COURSES RATING
              </p>
            </div>
            <p className="text-3xl text-gray-800 mt-6  font-semibold">4.80</p>
            <p className="text-gray-500 text-sm">
              Rating this month:{" "}
              <span className="text-white bg-orange-400 p-0.5 rounded ">
                {" "}
                10+
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Earnings Line Chart */}
      <div className="space-y-6 pb-6">
        <EarningsChart data={earningsData} />
        <OrdersChart data={ordersData} />
        {/* Best Selling Courses */}
        <BestSellingCourses
          courses={bestSellingCoursesData}
          onRemoveCourse={handleRemoveCourse}
          onEditCourse={handleEditCourse}
        />
      </div>
    </div>
  );
};

export default Dashboard;
