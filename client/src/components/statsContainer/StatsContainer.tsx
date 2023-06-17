//This is just an example of dataStats before using realTime data from database or Our own API
import React, { useState, useEffect } from "react";

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
    }, 10);
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
    <div className=" flex space-x-10 text-sm">
      <div className="bg-white w-[235px] h-[120px] border flex  rounded-2xl  transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/pencil-icon.svg" alt="" className="w-18 h-16" />
        <div>
        <p className=" text-xl text-gray-800 font-bold">{statistics.classes}K</p>
        <h3 className="text-gray-600">Online Courses</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex  rounded-2xl  transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/cources-icon.svg" alt="" className="w-18 h-16" />
        <div>
        <p className=" text-xl text-gray-800 font-bold">{statistics.instructors}+</p>
        <h3 className="text-gray-600">Expert Tutors</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex   rounded-2xl  transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/certificate-icon.svg" alt="" className="w-18 h-16" />
        <div>
        <p className=" text-xl text-gray-800 font-bold">{statistics.classes}K+</p>
        <h3 className="text-gray-600">Ceritified Courses</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex  rounded-2xl  transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/gratuate-icon.svg" alt="" className="w-18 h-16" />
        <div>
        <p className=" text-xl text-gray-800 font-bold">{statistics.members}K+</p>
        <h3 className="text-gray-600">Online Students</h3>
        </div>
      </div>
      
    </div>
  );
};

export default StatsContainer;
