import React, { useEffect, useState } from 'react';

interface Instructor {
 imgUrl:string;
  id: number;
  name: string;
  role: string;
  rating: number;
  courses: number;
  lessons: number;
  duration: string;
  studentsEnrolled: number;
  experience: string;
  skills: string[];
  availableFor: string[];
}

const InstructorCard: React.FC = () => {
  const [instructor, setInstructor] = useState<Instructor | null>(null);

  useEffect(() => {
    // Fetch the instructor data from the backend API
    const fetchInstructorData = async () => {
      try {
        const response = await fetch('/api/instructor'); // Replace with your API endpoint
        const data = await response.json();
        setInstructor(data);
      } catch (error) {
        console.log('Error fetching instructor data:', error);
      }
    };

    fetchInstructorData();
  }, []);

  if (!instructor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={instructor.imgUrl} // Replace with the instructor's image URL from the data
            alt="Instructor"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            About the instructor
          </div>
          <h2 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900">{instructor.name}</h2>
          <p className="mt-2 text-gray-500">{instructor.role}</p>
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {/* Render the rating dynamically */}
              <span className="text-gray-600 ml-1">{instructor.rating.toFixed(1)} Instructor Rating</span>
            </div>
          </div>
          <div className="mt-4">
            {/* Render other instructor details dynamically */}
            <p className="text-gray-500">{instructor.courses} Courses</p>
            <p className="text-gray-500">{instructor.lessons}+ Lessons</p>
            <p className="text-gray-500">{instructor.duration}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">{instructor.studentsEnrolled} students enrolled</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">{instructor.experience}</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">Skills: {instructor.skills.join(', ')}</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-500">Available for:</p>
            <ol className="list-decimal list-inside text-gray-500">
              {instructor.availableFor.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
