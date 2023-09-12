import React from "react";
import { Link } from "react-router-dom";
import UnderConstr from "../../components/Error/UnderConstr";
import { NavBar } from "../../constants";

function LabPage() {
  return (
    <div className="">
      <div className="lg:w-full xl:w-full 2xl:w-full top-14 md:h-[920px] bg-gradient-to-r from-gray-50 to-[#c8daf0]">
        <NavBar
          isAuthenticated={true}
          isFixed={false}
          isTeacher={false}
          isInsideVirtualLab={true}
          handleLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        
        <div className="mx-[12px] lg:mx-[80px]">
          <div className="lg:flex justify-between flex-row space-x-4 xl:mt-36  mt-20 lg:mt-18 lg:space-x-10">
            <div className="lg:space-y-6 xl:space-y-10 2xl:space-y-10 w-3/5 space-y-4">
              <h2 className="text-gray-500 lg:text-lg">
                The Leader in Online Virtual interactive Learning
              </h2>
              <p className=" font-extrabold text-DarkBluePal text-3xl">
                Elevating Education:Academia Virtual Labs Where Learning Comes
                to Life!
              </p>
              <h2 className="text-gray-500 text-lg">
                Own your future learning new skills online
              </h2>
              <div className=" lg:space-x-4  space-y-2 lg:space-y-0 xl:space-y-0 lg:justify-start ">
                <Link to="/subscription">
                  <button className="bg-darkBluePLusPal  lg:mb-0 mb-2 border-2 border-darkBluePLusPal  hover:shadow-xl  text-white font-medium py-2 px-10 rounded-xl">
                    Try for free
                  </button>
                </Link>
                <Link to="/about">
                  <button className="  border-darkBluePLusPal border-2  hover:bg-darkBluePLusPal hover:text-white text-darkBluePLusPal font-medium py-2 px-10 rounded-xl">
                    Get Pricing
                  </button>
                </Link>
              </div>
            </div>
            <div className=" w-4/5 h-full mt-0 ">
            <video className=" rounded-2xl  border-8 border-gray-300" autoPlay loop muted preload="auto">
            <source src="assets/videos/lab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
          </div>
        </div>
      </div>
      <UnderConstr/>
    </div>
  );
}

export default LabPage;
