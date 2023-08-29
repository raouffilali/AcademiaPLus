import React from "react";
import QuizRow from "../QuizRow/QuizRow";

interface Quiz {
  id: number;
  thumbnail: string;
  title: string;
  numQuestions: number;
  timeToFinish: string;
}

interface QuizesSectionProps {
  quizzes: Quiz[];
}

const QuizesSection: React.FC<QuizesSectionProps> = ({ quizzes }) => {
  return (
    <div>
      {quizzes.map((quiz) => (
        <QuizRow key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizesSection;
