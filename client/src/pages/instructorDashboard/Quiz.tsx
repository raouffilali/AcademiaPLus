import React from "react";
import AddQuizButton from "../../components/AddQuizButton/AddQuizButton";
import QuizesSection from "../../components/QuizesSection/QuizesSection";
import { quizzesData } from "../../data/quizzesData";



const Quiz = () => {
  return (
    <div className="bg-white rounded shadow h-full w-full">
      
      <div className="flex  p-4">
        <p className=" flex-1 font-semibold text-xl text-gray-800">Quiz</p>
        <AddQuizButton />
      </div>
      <div className="bg-slate-100">
        <div className=" p-4">
          {" "}
          <QuizesSection quizzes={quizzesData} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
