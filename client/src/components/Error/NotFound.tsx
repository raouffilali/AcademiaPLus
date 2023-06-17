import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen">
        <div className="p-24 flex flex-col space-y-4 items-center">
          <img src="assets/logo.svg" alt="" className="h-8" />
          <img src="assets/error-01.png" alt="" className="h-56" />
          <p className="text-3xl text-redPal font-medium">Oh No! Error 404</p>
          <p className=" text-center items-center font-medium text-2xl text-gray-700 ">
            This page you requested counld not found. May the force be with you!
          </p>

          <Link to="/">
            {" "}
            <button className="px-4 py-2 rounded-full text-white bg-redPal hover:bg-red-500">Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
