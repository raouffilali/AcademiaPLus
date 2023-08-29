import React from "react";
import QuizResultCard from "../../components/QuizResultCard/QuizResultCard";
import QuizResultsTable from "../../components/QuizResultsTable/QuizResultsTable";
import { studentsQuizResults } from "../../data/studentsQuizResults";

const QuizResults: React.FC = () => {
  return (
    <>
      <div className=" bg-white shadow ">
        <p className="p-4 font-medium text-lg text-gray-800">
          Result - React Basic Quiz
        </p>
        <hr />
        <div className="w-full  space-y-6 ">
          <div className="flex p-4 flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center ">
            <QuizResultCard title="Participate" value="27" />
            <QuizResultCard title="Scores" value="82" />
            <QuizResultCard title="Average Time" value="00:00:42" />
          </div>
          <hr />
        </div>
        <QuizResultsTable students={studentsQuizResults} />
      </div>
    </>
  );
};

export default QuizResults;
