import React, { useState } from "react";

interface AddQuizPageProps {
  onClose: () => void;
}

const AddQuizPage: React.FC<AddQuizPageProps> = ({ onClose }) => {
  const [question, setQuestion] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [answerChoices, setAnswerChoices] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);

  const addAnswerChoice = () => {
    setAnswerChoices([...answerChoices, ""]);
    setCorrectAnswers([...correctAnswers, false]);
  };

  const handleAnswerChoiceChange = (index: number, value: string) => {
    const updatedChoices = [...answerChoices];
    updatedChoices[index] = value;
    setAnswerChoices(updatedChoices);
  };

  const handleCorrectAnswerChange = (index: number) => {
    const updatedCorrectAnswers = [...correctAnswers];
    updatedCorrectAnswers[index] = !updatedCorrectAnswers[index];
    setCorrectAnswers(updatedCorrectAnswers);
  };

  const handleSubmit = () => {
    // Logic to submit the quiz question
    // Clear form fields
    onClose();
  };

  return (
    <div>
      
      <div className="space-y-6 ">
        <p className="font-medium text-md">Add Quiz Question</p>
        <p className="font-medium text-md text-gray-600">General</p>
        <div>
          <label htmlFor="title" className=" font-medium text-md text-gray-600 mb-2 block">
            Write Quiz title
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded w-full focus:border-gray-500 focus:outline-none "
            type="text"
            placeholder="Quiz title"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title" className=" font-medium text-md text-gray-600 mb-2 block">
            Write your question{" "}
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded w-full focus:border-gray-500 focus:outline-none "
            type="text"
            placeholder="Quiz question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label className=" font-medium text-md text-gray-600 mb-2 block">Question Type </label>
          <select
            className=" bg-white text-sm py-2 px-4 border border-gray-200 rounded w-full focus:border-gray-500 focus:outline-none "
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="">Select Question Type</option>
            {/* Add question type options */}
          </select>
        </div>
        <p className="font-medium text-md text-gray-600">Answer</p>
        <button
          className=" text-red-500 text-sm border rounded p-1 hover:bg-red-500 hover:text-white"
          onClick={addAnswerChoice}
        >
          Add Answer Choice +
        </button>
        <div>
          {answerChoices.map((choice, index) => (
            <div key={index}>
              <div className="flex">
                <label className=" flex-1 text-sm mb-2 block">
                  Choice {index + 1}
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={correctAnswers[index]}
                    onChange={() => handleCorrectAnswerChange(index)}
                  />
                  <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Correct answer
                  </span>
                  <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <input
                className=" bg-white text-sm py-2 px-4 border border-gray-200 rounded w-full focus:border-gray-500 focus:outline-none "
                type="text"
                placeholder="Write the answer"
                value={choice}
                onChange={(e) =>
                  handleAnswerChoiceChange(index, e.target.value)
                }
              />
            </div>
          ))}
        </div>

        <div className=" flex space-x-2 text-white">
          {" "}
          <button
            className=" py-1 bg-redPal hover:bg-red-500 rounded flex-1"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="rounded bg-bluePal hover:bg-blue-500 flex-1"
            onClick={handleSubmit}
          >
            Add Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuizPage;
