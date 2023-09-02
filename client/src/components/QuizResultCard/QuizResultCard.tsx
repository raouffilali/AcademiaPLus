import React from "react";
import { FiFile } from "react-icons/fi";
import { HiClock, HiUsers } from "react-icons/hi";

interface QuizResultCardProps {
  title: string;
  value: string;
}

const QuizResultCard: React.FC<QuizResultCardProps> = ({ title, value }) => {
  let icon;

  if (title === "Participate") {
    icon = <HiUsers className="text-2xl text-redPal" />;
  } else if (title === "Scores") {
    icon = <FiFile className="text-2xl text-green-500" />;
  } else {
    icon = <HiClock className="text-2xl text-purple-500" />;
  }
  return (
    <div className="flex-1 w-full bg-slate-100 p-4 py-6 space-y-8 rounded shadow">
      <p className="text-md font-semibold text-gray-700">{title}</p>
      <div className="flex">
      <p className="text-xl flex-1 font-semibold text-gray-700 mt-2">{value}</p>
      <span className="flex-1"> {icon}</span>
      </div>
     
    </div>
  );
};

export default QuizResultCard;
