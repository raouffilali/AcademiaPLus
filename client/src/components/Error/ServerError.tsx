import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../constants';

function ServerError() {
    return (
        <>
          <div className="bg-gradient-to-r from-amber-50 to-blue-50 min-h-screen">
            <div className="p-24 flex flex-col space-y-4 items-center">
              <img src={images.Logo} alt="" className="h-8" />
              <img src="assets/error.png" alt="" className="h-56" />
              <p className="text-3xl text-redPal font-medium">Oops! 500 Internal Server Error</p>
              <p className=" text-center items-center font-medium text-2xl text-gray-700 ">
              We are working on fixing the problem. We back soon
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

export default ServerError