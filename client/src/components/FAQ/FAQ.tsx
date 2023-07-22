import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Question 1",
      answer: "Answer to question 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "Question 3",
        answer: "Answer to question 3 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Question 4",
        answer: "Answer to question 4 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Question 5",
        answer: "Answer to question 5 goes here. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    // Add more FAQs here
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col mt-12 lg:flex-row lg:justify-center items-center lg:space-x-20  mx-[80px]">
     

      {/* FAQ Content */}
      <div className="max-w-xl lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
           
            onClick={() => handleToggle(index)}
          >
            <h3  className={`mb-6 cursor-pointer p-3 rounded-lg ${
              activeIndex === index ? "bg-emerald-500 text-white duration-300" : "bg-white text-gray-600"
            }`}>{faq.question}</h3>
            <hr />
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
       {/* Image */}
       <img
        src="/assets/FAQ.png"
        alt="FAQ Illustration"
        className="w-full max-w-md lg:w-1/2"
      />
    </div>
  );
};

export default FAQ;
