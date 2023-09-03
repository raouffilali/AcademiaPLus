import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navBar/NavBar";
import PathPage from "../../components/PathPage/PathPage";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

import CustomCard from "../../components/CustomCard/CustomCard";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import VirtualLabSection from "../../components/VirtualLabSection/VirtualLabSection";

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
  const [selectedYear, setSelectedYear] = useState("السنة الأولى");
  const [selectedSubject, setSelectedSubject] = useState("الرياضيات");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleYearChange = (year: React.SetStateAction<string>) => {
    setSelectedYear(year);
    setSelectedSubject("");
  };

  const handleSubjectChange = (subject: React.SetStateAction<string>) => {
    setSelectedSubject(subject);
    setMenuOpen(false);
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.body.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);
  useEffect(() => {
    const player = new Plyr("video");

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="font-tajawal">
      <Navbar />
      <PathPage />
      <div style={{ fontFamily: "Tajawal", fontWeight: 700 }}>
        <div className="text-center ">
          <div className="w-full mt-5 top-14 pb-2 lg:h-[680px] bg-slate-50 bg-[url(assets/bg/academic_bg.png)]">
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
            <div className="space-y-6 lg:mx-[80px] mt-3">
              <div className="w-2/3 mx-auto rounded-2xl border-2 border-dashed border-emerald-500 relative">
                <video
                  controls
                  poster="/assets/academicfield/primaryThumbnai.jpeg"
                  className="w-full h-full rounded-2xl"
                >
                  <source src="/path/to/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-500 text-white rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12l-6-4v8l6-4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/subscription">
              <button className="border-2 mt-5  border-white rounded-2xl text-xl text-white font-bold p-4 px-16 hover:bg-emerald-500 bg-gradient-to-r from-emerald-600 to bg-emerald-300">
                اشترك الان
              </button>
            </Link>
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
              <div className="flex justify-between w-full lg:mx-[80px] bg-gray-50 border border-emerald-500 rounded-xl">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`py-2 md:px-12 hover:bg-emerald-500 rounded-s-xl rounded-e-xl duration-500 hover:text-white ${
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
              <div className="relative inline-block" ref={menuRef}>
                <button
                  className="flex items-center justify-between w-48 p-2 bg-white border-2 border-emerald-500 rounded-xl cursor-pointer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  <span className="mr-4 text-emerald-500">
                    {selectedSubject ? selectedSubject : "المادة"}
                  </span>
                  <svg
                    className={`w-5 h-5 text-emerald-500 fill-current transform transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 8l4 4 4-4z" />
                  </svg>
                </button>
                {isMenuOpen && (
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
        <div className="grid grid-cols-1  gap-7 md:grid-cols-3 lg:mx-[80px] ">
          <Link
            to={`/pdf-summaries?year=${selectedYear}&subject=${selectedSubject}`}
          >
            <CustomCard
              imageSrc="/assets/academicfield/molakhasat.jpg"
              title="الملخصات المكتوبة"
              rating="4.5"
              description="Enter a description for الملخصات المكتوبة."
              year={selectedYear}
              subject={selectedSubject}
            />
          </Link>
          <Link
            to={`/video-summaries?year=${selectedYear}&subject=${selectedSubject}`}
          >
            <CustomCard
              imageSrc="/assets/academicfield/videoCourse.jpg"
              title="ملخصات بالفيديو"
              rating="4.0"
              description="Enter a description for ملخصات بالفيديو."
              year={selectedYear}
              subject={selectedSubject}
            />
          </Link>
          <Link
            to={`/educational-courses?year=${selectedYear}&subject=${selectedSubject}`}
          >
            <CustomCard
              imageSrc="/assets/academicfield/dawra.png"
              title="الدورات التعليمية"
              rating="5.0"
              description="Enter a description for الدورات التعليمية."
              year={selectedYear}
              subject={selectedSubject}
            />
          </Link>

          {/* Card for "مجموعة المراجعة" */}
          <Link
            to={`/group-chat?year=${selectedYear}&subject=${selectedSubject}`}
          >
          <CustomCard
            imageSrc="/assets/academicfield/revision.jpg"
            title="مجموعة المراجعة"
            rating="4.7"
            description="Enter a description for مجموعة المراجعة."
            year={selectedYear}
            subject={selectedSubject}
          /></Link>
           <Link
            to={`/games?year=${selectedYear}&subject=${selectedSubject}`}
          >
          <CustomCard
            imageSrc="/assets/academicfield/games.jpg"
            title="الألعاب التعليمية"
            rating="4.8"
            description="Enter a description for الألعاب التعليمية."
            year={selectedYear}
            subject={selectedSubject}
          /></Link>

          <Link
            to={`/exams?year=${selectedYear}&subject=${selectedSubject}`}
          >
            <CustomCard
              imageSrc="/assets/academicfield/exams.jpg"
              title="فروض و امتحانات"
              rating="4.2"
              description="Enter a description for فروض و امتحانات."
              year={selectedYear}
              subject={selectedSubject}
            />
          </Link>
        </div>
        <div className="mt-24 ">
          <VirtualLabSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrimarySchoolPage;
