// CommentForm.tsx

import React, { useState } from "react";

const CommentForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Form submitted with data:", { fullName, email, subject, comments });
    // You can add your logic to send data to a server or perform other actions here
  };

  return (
    <div className="container text-sm  pr-4">
      <h2 className="font-bold text-DarkBluePal text-lg mb-4">Post A Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
          
          <input
            type="text"
            id="fullName"
            placeholder="full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border  bg-gray-100 flex-1 p-2 rounded"
            required
          />
           <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border  bg-gray-100 flex-1 p-2 rounded"
            required
          />
        </div>
        
          
         
        
        
         
          <input
            type="text"
            placeholder="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border w-full bg-gray-100 p-2 rounded"
            required
          />
        
        
         
          <textarea
          placeholder="Your comment"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={4}
            className="border  bg-gray-100 w-full p-2 rounded"
            required
          ></textarea>
        
        <button
          type="submit"
          className="border-bluePal border-2  text-bluePal font-medium p-2 rounded-lg hover:bg-bluePal hover:text-white transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
