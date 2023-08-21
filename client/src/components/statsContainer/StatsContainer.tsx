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
  // When fetching from API
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

  const [classesCount, setClassesCount] = useState(0);
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [certifiedCoursesCount, setCertifiedCoursesCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);

  useEffect(() => {
    if (statistics) {
      let currentCount = 0;
      const increment = Math.ceil(statistics.classes / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statistics.classes) {
          clearInterval(timer);
          setClassesCount(statistics.classes);
        } else {
          setClassesCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statistics]);

  useEffect(() => {
    if (statistics) {
      let currentCount = 0;
      const increment = Math.ceil(statistics.instructors / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statistics.instructors) {
          clearInterval(timer);
          setInstructorsCount(statistics.instructors);
        } else {
          setInstructorsCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statistics]);

  useEffect(() => {
    if (statistics) {
      let currentCount = 0;
      const increment = Math.ceil(statistics.classes / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statistics.classes) {
          clearInterval(timer);
          setCertifiedCoursesCount(statistics.classes);
        } else {
          setCertifiedCoursesCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statistics]);

  useEffect(() => {
    if (statistics) {
      let currentCount = 0;
      const increment = Math.ceil(statistics.members / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statistics.members) {
          clearInterval(timer);
          setMembersCount(statistics.members);
        } else {
          setMembersCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statistics]);

  const formatNumberWithK = (number:any) => {
    if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K+`;
    } else {
      return `${number}+`;
    }
  };

  return (
    <div className="lg:flex space-y-4 lg:space-x-10 text-sm">
      <div className="bg-white w-[235px] h-[130px] border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/pencil-icon.svg" alt="" className="w-18 h-16" />
        <div>
          <p className="text-xl text-gray-800 font-bold">
            {formatNumberWithK(classesCount)}
          </p>
          <h3 className="text-gray-600">Online Courses</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/cources-icon.svg" alt="" className="w-18 h-16" />
        <div>
          <p className="text-xl text-gray-800 font-bold">
            {formatNumberWithK(instructorsCount)}
          </p>
          <h3 className="text-gray-600">Expert Tutors</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/certificate-icon.svg" alt="" className="w-18 h-16" />
        <div>
          <p className="text-xl text-gray-800 font-bold">
            {formatNumberWithK(certifiedCoursesCount)}
          </p>
          <h3 className="text-gray-600">Certified Courses</h3>
        </div>
      </div>
      <div className="bg-white w-[235px] h-[130px] border flex rounded-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
        <img src="assets/gratuate-icon.svg" alt="" className="w-18 h-16" />
        <div>
          <p className="text-xl text-gray-800 font-bold">
            {formatNumberWithK(membersCount)}
          </p>
          <h3 className="text-gray-600">Online Students</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;
