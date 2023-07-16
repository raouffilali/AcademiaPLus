import React, { useState } from "react";
import Navbar from "../../components/navBar/NavBar";
import PathPage from "../../components/PathPage/PathPage";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Link } from "react-router-dom";

const subjects = [
  "الرياضيات",
  "العربية",
  "الفرنسية",
  "العلوم التكنولوجية",
  "التربية المدنية",
  "التربية الاسلامية",
  "تاريخ و جغرافيا",
  "الانجليزية",
];

const years = [
  "السنة الخامسة",
  "السنة الرابعة",
  "السنة الثالثة",
  "السنة الثانية",
  "السنة الأولى",
];

function PrimarySchoolPage() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleYearChange = (year: React.SetStateAction<string>) => {
    setSelectedYear(year);
    setSelectedSubject("");
  };

  const handleSubjectChange = (subject: React.SetStateAction<string>) => {
    setSelectedSubject(subject);
  };

  return (
    <div>
      <Navbar />
      <PathPage />
      <div className="text-center">
        <div className="w-full mt-5 top-14 h-[680px] bg-gray-50">
          <p
            className="pt-16 font-medium text-3xl text-emerald-500"
            style={{ fontFamily: "Tajawal", fontWeight: 700 }}
          >
            المرحلة الابتدائية
          </p>
          <p
            className="text-gray-500 font-light"
            style={{ fontFamily: "Amiri" }}
          >
            برامج الجيل الثاني
          </p>
          <div className="space-y-6 mx-[80px] mt-3">
            <iframe
              
              height="415"
              src="https://www.youtube.com/embed/your-video-id"
              title="Video"
              className="w-2/3  rounded-2xl"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <button className="border-2 border-white rounded-2xl text-xl text-white font-bold p-2 px-16 bg-gradient-to-r from-emerald-600 to bg-emerald-300">
              اشترك الان
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="">
          <p
            className="pt-16 text-center font-medium text-3xl text-emerald-500"
            style={{ fontFamily: "Tajawal", fontWeight: 700 }}
          >
            المحاور الدراسية للمرحلة الابتدائية
          </p>
          <div className="flex justify-center my-8">
            <div className="flex justify-between w-full mx-[80px] bg-gray-50 border border-emerald-500   rounded-xl">
              {years.map((year) => (
                <button
                  key={year}
                  className={`py-2 md:px-12 hover:bg-emerald-500 rounded-s-xl rounded-e-xl  duration-500 hover:text-white ${
                    selectedYear === year ? "bg-emerald-500 text-white" : ""
                  }`}
                  style={{ fontFamily: "Tajawal", fontWeight: 600 }}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 text-center">
            <div className="relative inline-block">
              <button
                className="flex items-center justify-between w-48 p-2 bg-white border-2 border-emerald-500 rounded-xl cursor-pointer"
                onClick={() =>
                  setSelectedSubject(selectedSubject === "" ? subjects[0] : "")
                }
              >
                <span className="mr-4 text-emerald-500">
                  {selectedSubject || "المادة"}
                </span>
                <svg
                  className={`w-5 h-5 text-emerald-500 fill-current transform transition-transform ${
                    selectedSubject ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 8l4 4 4-4z" />
                </svg>
              </button>
              {selectedSubject && (
                <div className="z-10 absolute w-48 mt-2 bg-white border border-emerald-500 rounded-md shadow-lg">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-500 hover:text-white"
                      onClick={() => handleSubjectChange(subject)}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 mx-[80px]">
        {/* Card 2 */}
        <Link to="/card2">
          <CustomCard
            imageSrc="/assets/academicfield/molakhasat.jpg"
            title="الملخصات المكتوبة"
            rating="4.5"
            description="Enter a description for الملخصات المكتوبة."
            year={selectedYear}
          />
        </Link>

        {/* Card 3 */}
        <Link to="/card3">
          <CustomCard
            imageSrc="/assets/academicfield/videoCourse.jpg"
            title="ملخصات بالفيديو"
            rating="4.0"
            description="Enter a description for ملخصات بالفيديو."
            year={selectedYear}
          />
        </Link>
         {/* Card 1 */}
        <Link to="/card1">
          <CustomCard
            imageSrc="/assets/academicfield/dawra.png"
            title="الدورات التعليمية"
            rating="5.0"
            description="Enter a description for الدورات التعليمية."
            year={selectedYear}
          />
        </Link>
       

        {/* Card 4 */}
        <div className="col-span-1">
          <Link to="/card5">
            <CustomCard
              imageSrc="/assets/academicfield/games.jpg"
              title="الألعاب التعليمية"
              rating="4.8"
              description="Enter a description for الألعاب التعليمية."
              year={selectedYear}
            />
          </Link>
        </div>
        {/* Card 5 */}
        <div className="col-span-2 mb-5">
          <Link to="/card4">
            <CustomCard
              imageSrc="/assets/academicfield/exams.jpg"
              title="فروض و امتحانات"
              rating="4.2"
              description="Enter a description for فروض و امتحانات."
              year={selectedYear}
            />
          </Link>
        </div>

        
        
      </div>
    </div>
  );
}

export default PrimarySchoolPage;
