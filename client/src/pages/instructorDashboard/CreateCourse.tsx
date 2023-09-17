import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar } from "../../constants";
import {
  BasicInfo,
  CoursesMedia,
  Curriculum,
  Settings,
} from "./AccountSettings/CreateCourseWizard";

const CreateCourse: React.FC = () => {
  const [role, setRole] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const userRole = decodedToken.role;
        setRole(userRole);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error decoding or extracting token:", error);
      }
    } else {
      console.error("Token not found in localStorage");
    }
  }, []);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <BasicInfo onNext={handleNextPage} />;
      case 2:
        return (
          <CoursesMedia
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
          />
        );
      case 3:
        return (
          <Curriculum onNext={handleNextPage} onPrevious={handlePreviousPage} />
        );
      case 4:
        return <Settings onPrevious={handlePreviousPage} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-gray-50 pb-4 mb-6 items-center justify-center ">
        <div>
          {!isAuthenticated && <NavBar isTeacher={false} />}
          {role === "Student" && <NavBar isTeacher={false} />}
          {role === "Instractor" && <NavBar isTeacher={true} />}
        </div>
        <div className="w-full h-full   text-white bg-DarkBluePal mt-4 shadow">
          <div className="flex flex-col space-y-4  md:flex-row container py-8 ">
            <div className=" flex-1 space-y-4">
              <p className=" text-4xl font-medium">Add New Course</p>
              <p className="text-sm font-medium">
                Just fill the form and create your courses.
              </p>
            </div>
            <div className="space-x-2">
              <Link to="/instructor-dashboard">
                <button className="text-gray-800 bg-white rounded p-2 text-sm font-medium">
                  Back to Dashboard
                </button>
              </Link>
              <button className="rounded bg-black p-2 text-sm font-medium ">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-8">
          <div className="lg:flex lg:space-x-6">
            <div className="flex-grow mt-8">
              {renderPage()}
              <div className="flex container justify-between mt-4">
                {currentPage > 1 && (
                  <button
                    onClick={handlePreviousPage}
                    className="bg-gray-400 hover:bg-DarkBluePal text-white px-4 py-2 rounded-md"
                  >
                    Previous
                  </button>
                )}
                {currentPage < 4 && (
                  <button
                    type="submit"
                    onClick={handleNextPage}
                    className="bg-DarkBluePal hover:bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateCourse;
