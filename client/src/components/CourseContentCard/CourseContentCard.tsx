import React, { useState } from 'react';

// Course data
const courseData = [
  {
    title: 'Menu 1',
    lectures: [
      { title: 'Lecture 1', duration: '30 mins', preview: 'Preview of Lecture 1' },
      { title: 'Lecture 2', duration: '45 mins', preview: 'Preview of Lecture 2' },
      { title: 'Lecture 3', duration: '60 mins', preview: 'Preview of Lecture 3' },
    ],
  },
  {
    title: 'Menu 2',
    lectures: [
      { title: 'Lecture 1', duration: '30 mins', preview: 'Preview of Lecture 1' },
      { title: 'Lecture 2', duration: '45 mins', preview: 'Preview of Lecture 2' },
    ],
  },
  {
    title: 'Menu 3',
    lectures: [
      { title: 'Lecture 1', duration: '30 mins', preview: 'Preview ' },
      { title: 'Lecture 2', duration: '45 mins', preview: 'Preview ' },
      { title: 'Lecture 3', duration: '60 mins', preview: 'Preview ' },
      { title: 'Lecture 4', duration: '75 mins', preview: 'Preview ' },
    ],
  },
  {
    title: 'Menu 4',
    lectures: [
      { title: 'Lecture 1', duration: '30 mins', preview: 'Preview of Lecture 1' },
    ],
  },
];

const CourseContentCard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleChangeMenu = (index: number) => {
    setSelectedMenu(index);
  };

  return (
    <div className="p-4">
      <div className="space-y-4 font-semibold text-sm ">
        {courseData.map((menu, index) => (
          <div key={index}>
            <button
              className={`w-full flex justify-between items-center py-3 text-gray-800 px-4 rounded-sm focus:outline-none ${
                index === selectedMenu ? 'bg-blue-100 ' : 'bg-blue-50 '
              }`}
              onClick={() => handleChangeMenu(index)}
            >
              {menu.title}
              <svg
                className={`h-4 w-4  transform ${index === selectedMenu ? 'rotate-180' : ''}`}
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
              <div className="pl-4 mt-2">
                {menu.lectures.map((lecture, lectureIndex) => (
                  <div key={lectureIndex} className="">
                    <div className=" bg-gray-800 rounded-full " />
                    <div className='flex space-x-56 '>
                      <h4 className="font-medium">{lecture.title}</h4>
                      <p className="text-gray-500">{lecture.duration}</p>
                      <p className="text-gray-700">{lecture.preview}</p>
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
