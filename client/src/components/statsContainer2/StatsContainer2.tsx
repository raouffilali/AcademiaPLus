import React, { useEffect, useRef, useState } from "react";
import StudentsIcon from "/assets/icon/icon-07.svg";
import CoursesIcon from "/assets/lesson.svg";
import CountryIcon from "/assets/icon/icon-09.svg";

interface StatsContainer2Props {
  apiUrl: string;
}

interface StatsData {
  numberOfStudents: number;
  totalCourses: number;
  numberOfCountries: number;
}

const StatsContainer2: React.FC<StatsContainer2Props> = ({ apiUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [statsData, setStatsData] = useState<StatsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setStatsData(data);
      } catch (error) {
        console.error("Error fetching stats data:", error);
        // Set example data in case API is not available
        setStatsData({
          numberOfStudents: 250085,
          totalCourses: 1025,
          numberOfCountries: 127,
        });
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    if (statsData) {
      let currentCount = 0;
      const increment = Math.ceil(statsData.numberOfStudents / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statsData.numberOfStudents) {
          clearInterval(timer);
          setStudentsCount(statsData.numberOfStudents);
        } else {
          setStudentsCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statsData]);

  useEffect(() => {
    if (statsData) {
      let currentCount = 0;
      const increment = Math.ceil(statsData.totalCourses / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statsData.totalCourses) {
          clearInterval(timer);
          setCoursesCount(statsData.totalCourses);
        } else {
          setCoursesCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statsData]);

  useEffect(() => {
    if (statsData) {
      let currentCount = 0;
      const increment = Math.ceil(statsData.numberOfCountries / 100); // Increase count in 100 steps
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount > statsData.numberOfCountries) {
          clearInterval(timer);
          setCountriesCount(statsData.numberOfCountries);
        } else {
          setCountriesCount(currentCount);
        }
      }, 20); // Decreased interval for smoother animation

      return () => {
        clearInterval(timer);
      };
    }
  }, [statsData]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.pageYOffset + window.innerHeight >
          containerRef.current.offsetTop
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatNumberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

  return (
    <div
      ref={containerRef}
      className={`bg-gradient-to-r from-blue-200 to bg-blue-50  space-y-4 lg:flex  lg:items-center w-full p-6 rounded-lg  shadow-md ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="flex space-x-4">
      <div className="p-4 rounded-xl bg-white">
        <img src={StudentsIcon} alt="Students Icon" className="lg:h-16 h-22" />
      </div>
      <div>
        <h4 className="lg:text-5xl text-3xl font-medium">
          {formatNumberWithCommas(studentsCount)}
        </h4>
        <p className="text-xl text-gray-700">students enrolled</p>
      </div>
      </div>
      <div className="flex space-x-4">
      <div className="p-4 rounded-xl bg-white">
        <img src={CoursesIcon} alt="Courses Icon" className="lg:h-16 h-14" />
      </div>
      <div>
        <h4 className="lg:text-5xl text-3xl font-medium">
          {formatNumberWithCommas(coursesCount)}
        </h4>
        <p className="text-xl text-gray-700">total courses</p>
      </div>
      </div>
      <div className="flex ">
      <div className="p-4 rounded-xl bg-white">
        <img src={CountryIcon} alt="Country Icon" className="lg:h-16 h-14" />
      </div>
      <div>
        <h4 className="lg:text-5xl text-3xl font-medium">
          {formatNumberWithCommas(countriesCount)}
        </h4>
        <p className="text-xl text-gray-700">countries</p>
      </div>

      </div>
    </div>
  );
};

export default StatsContainer2;
