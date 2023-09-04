import React, { useState } from "react";

// Course data
const courseData = [
  {
    title: "In which areas do you operate?",
    lectures: [
      {
        title: "Lecture1.1 Introduction to the User Experience Course",
        duration: "30 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.2 Exercise: Your first design challenge",
        duration: "45 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.3 How to solve the previous exercise",
        duration: "60 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.3 How to solve the previous exercise",
        duration: "75 mins",
        preview: "Preview ",
      },
    ],
  },
  {
    title: "The Brief",
    lectures: [
      {
        title: "Lecture1.1 Introduction to the User Experience Course",
        duration: "30 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.2 Exercise: Your first design challenge",
        duration: "45 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.3 How to solve the previous exercise",
        duration: "60 mins",
        preview: "Preview ",
      },
    ],
  },
  {
    title: "Wireframing Low Fidelity",
    lectures: [
      {
        title: "Lecture1.1 Introduction to the User Experience Course",
        duration: "30 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.2 Exercise: Your first design challenge",
        duration: "45 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.3 How to solve the previous exercise",
        duration: "60 mins",
        preview: "Preview ",
      },
      {
        title: "Lecture1.3 How to solve the previous exercise",
        duration: "75 mins",
        preview: "Preview ",
      },
    ],
  },
  {
    title: "Type, Color & Icon Introduction",
    lectures: [
      {
        title: "Lecture1.1 Introduction to the User Experience Course",
        duration: "30 mins",
        preview: "Preview ",
      },
    ],
  },
];

const CourseContentCard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleChangeMenu = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <div className="py-4 pr-4">
      <div className="space-y-4 font-semibold text-sm ">
        {courseData.map((menu, index) => (
          <div key={index}>
            <button
              className={`w-full flex justify-between items-center py-3 text-gray-800 px-4 rounded-sm focus:outline-none ${
                index === selectedMenu ? "bg-blue-100 " : "bg-blue-50 "
              }`}
              onClick={() => handleChangeMenu(index)}
            >
              {menu.title}
              <svg
                className={`h-4 w-4 mr-0  transform ${
                  index === selectedMenu ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {index === selectedMenu && (
              <div className=" mt-2">
                {menu.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="">
                    <div className=" bg-gray-800 rounded-full " />
                    <div className="flex justify-between border-b space-y-3 ">
                      <h4 className="font-light">
                        {" "}
                        <img
                          src="/assets/play.svg"
                          className="mr-2  float-left h-5"
                        />
                        {lecture.title}
                      </h4>
                      <p className="text-gray-800 underline font-light">
                        {lecture.preview}
                      </p>
                      <p className="text-gray-800  font-light">
                        {lecture.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentCard;
