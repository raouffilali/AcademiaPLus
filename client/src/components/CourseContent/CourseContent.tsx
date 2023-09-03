import React, { useState } from "react";
import { FaVideo, FaAngleDown, FaAngleUp } from "react-icons/fa"; // Import the required icons
import "./CourseContent.css"; // Import CSS for animations

interface CourseChapter {
  title: string;
  lessons: string[];
}

const CourseContent: React.FC = () => {
  const chapters: CourseChapter[] = [
    {
      title: "المقدمة",
      lessons: ["الدرس 1: مقدمة الدورة", "الدرس 2: البدء"],
    },
    {
      title: "الفصل 1: أساسيات",
      lessons: ["الدرس 1: مقدمة في React", "الدرس 2: JSX", "الدرس 3: المكونات"],
    },
    {
      title: "الفصل 2: الحالة والخصائص",
      lessons: ["الدرس 1: الحالة في React", "الدرس 2: الخصائص في React"],
    },
    // Add more chapters and lessons here
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col mb-6">
      {/* Course Content */}
      <div className="w-full">
        {chapters.map((chapter, index) => (
          <div className="" key={index} onClick={() => handleToggle(index)}>
            <div
              className={`mb-6 cursor-pointer p-3 border rounded-lg ${
                activeIndex === index ? "bg-emerald-500 text-white duration-300" : "bg-gray-50 text-gray-600"
              }`}
            >
            <div className="flex items-center justify-between">
                {activeIndex === index ? (
                  <FaAngleUp className="text-emerald-500 ml-2" />
                ) : (
                  <FaAngleDown className="text-emerald-500 ml-2" />
                )}
                <h3>{chapter.title}</h3>
              </div>
            </div>
            <div
              className={`chapter-lessons text-gray-500 text-sm space-y-3 mb-4   ${
                activeIndex === index ? "open" : ""
              }`}
            >
              {chapter.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex border-b py-1 items-center">
                  <FaVideo className="ml-2 text-emerald-500" />
                  <p>{lesson}</p>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
