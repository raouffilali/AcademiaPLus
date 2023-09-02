import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

interface Quiz {
  id: number;
  thumbnail: string;
  title: string;
  numQuestions: number;
  timeToFinish: string;
}

interface QuizRowProps {
  quiz: Quiz;
}

const QuizRow: React.FC<QuizRowProps> = ({ quiz }) => {
  const removeQuiz = () => {
    // Logic to remove quiz
  };

  const editQuiz = () => {
    // Logic to edit quiz
  };

  return (
    <div className="flex quiz-row border-b py-2">
      <img
        src={quiz.thumbnail}
        alt="Quiz Thumbnail"
        className="rounded ml-0 mr-4 h-14 w-20"
      />
      <div className="flex flex-col ml-0">
        <p className="text-sm font-semibold text-gray-800">{quiz.title}</p>
        <div className="flex space-x-2 text-sm text-gray-500">
          <p className="flex space-x-1">
            <TfiMenuAlt />
            <span>{quiz.numQuestions} Questions</span>
          </p>
          <p className="flex space-x-1">
            <IoMdTime /> <span>{quiz.timeToFinish}</span>
          </p>
          <p className="flex space-x-1 hover:text-redPal cursor-pointer">
            <LuFileSpreadsheet /> <span>Result</span>{" "}
          </p>
        </div>
      </div>

      <div className="space-x-2 mr-0">
        <button onClick={editQuiz}>
          <AiOutlineEdit className="text-gray-600" />
        </button>
        <button onClick={removeQuiz}>
          <RiDeleteBinLine className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default QuizRow;
