
//This is just an example of dataStats before using realTime data from database or Our own API
import React, { useState, useEffect } from "react";
import { FaUser, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import data from "./data.json";

const StatsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    classes: 0,
    instructors: 0,
    members: 0,
    totalRating: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setStatistics(data);
      setIsLoading(false);
    }, 2000);
  }, []);
  //when fetching from API 
  // useEffect(() => {
  //   fetch("https://your-api.com/stats")
  //     .then(response => response.json())
  //     .then(data => {
  //       setStatistics(data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div className="flex justify-between space-x-10 flex-start bg-white rounded-lg shadow-lg p-6 w-96 md:w-full">
      {/* <h2 className="text-2xl font-bold mb-4">Statistics</h2> */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <CircularProgressbar value={0} />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightBluePal rounded-full flex items-center justify-center">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-gray-800 font-bold">Classes</h3>
                <p className="text-gray-500">{statistics.classes} Total</p>
              </div>
            </div>
            
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightBluePal rounded-full flex items-center justify-center">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-gray-800 font-bold">Instructors</h3>
                <p className="text-gray-500">{statistics.instructors} Total</p>
              </div>
            </div>
            
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightBluePal rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl text-gray-800 font-bold">Members</h3>
                <p className="text-gray-500">{statistics.members} Total</p>
              </div>
            </div>
            
          </div>
          <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-lightBluePal rounded-full flex items-center justify-center">
          <IoMdStar className="text-white text-2xl" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl text-gray-800 font-bold">Total Rating</h3>
          <div className="h-32 w-32 text-gray-500 flex items-center">
            <CircularProgressbar
              value={statistics.totalRating}
              text={`${statistics.totalRating}`}
              strokeWidth={10}
              maxValue={5}
              styles={{
                path: {
                  stroke: "#037498",
                },
                text: {
                  fill: "#037498",
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
              }}
            />
            <span className="ml-2">out of 5</span>
          </div>
        </div>
      </div>
    </>
  )}
</div>
);
};

export default StatsContainer;
