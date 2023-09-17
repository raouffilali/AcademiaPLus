import React from "react";
import { Link } from "react-router-dom"; // Make sure to import the Link component if you're using React Router.

const EmailConfirmationInstructor = () => {
  return (
    <div className="flex justify-center items-center ">
      {" "}
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://i.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.webp"
          alt="email confirmed"
        />
        <h1 className="text-3xl font-bold mb-6 text-black">
          Email Confirmed Successfully 🎉
        </h1>
        <p className="text-gray-600 mb-8">
          Your email has been verified. You can now proceed to login.
        </p>
        <Link
          to="/instructor-login" // Make sure to replace with the correct login page route.
          className="bg-goldPal text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-700 focus:outline-none"
        >
          Login to your account
        </Link>
      </div>
    </div>
  );
};

export default EmailConfirmationInstructor;
