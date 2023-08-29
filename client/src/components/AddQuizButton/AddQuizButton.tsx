import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import AddQuizPage from "../AddQuizPage/AddQuizPage";
import "./AddQuizButton.css"

const AddQuizButton = () => {
  const [showAddQuizPage, setShowAddQuizPage] = useState(false);

  const toggleQuizVisibility = () => {
    setShowAddQuizPage(!showAddQuizPage);
  };

  return (
    <div>
       <div>
        {showAddQuizPage && (
          <div className="blur-overlay" onClick={toggleQuizVisibility} />
        )}
      </div>
      <button  onClick={toggleQuizVisibility}className="text-sm bg-bluePal p-1 px-3 text-white font-medium hover:bg-redPal rounded">
        Add New Quiz
      </button>
      {showAddQuizPage && (
            <div className="popup bg-white p-4 w-1/3 rounded-lg">
              <button
                className=" text-white close-button rounded-md px-2"
                onClick={toggleQuizVisibility}
              >
                x
              </button>
              <AddQuizPage onClose={() => setShowAddQuizPage(false)} />
            </div>
          )}
      
    </div>
  );
};

export default AddQuizButton;
