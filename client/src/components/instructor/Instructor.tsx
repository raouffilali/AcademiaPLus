import React from "react";
import { FaStar, FaUsers } from "react-icons/fa";

interface InstructorProps {
  rating: number;
  name: string;
  job: string;
  avatarSrc: string;
  studentsEnrolled: number;
}

function Instructor({
  name,
  job,
  avatarSrc,
  rating,
  studentsEnrolled,
}: InstructorProps) {
  return (
    <div className="bg-gray-50 w-60 rounded-xl border border-gray-200 shadow-sm items-start text-center">
      <img
        src={avatarSrc}
        className="mx-auto h-56 rounded-t-xl w-full"
        alt="Avatar"
      />
      <div className="space-y-2 p-6">
        <div className="flex flex-row space-x-2">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`text-goldPal mr-1 ${
                index < rating ? "opacity-100" : "opacity-30"
              }`}
            />
          ))}
          <span className="text-gray-500">({rating})</span>{" "}
        </div>

        <h5 className="mb-1 text-xl font-medium leading-tight">{name}</h5>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{job}</p>

        <p className="text-sm text-gray-500">
          <span className="">
            <FaUsers className="text-redPal inline-block mr-1" />
            {studentsEnrolled}
          </span>{" "}
          Students
        </p>
      </div>
    </div>
  );
}

export default Instructor;
