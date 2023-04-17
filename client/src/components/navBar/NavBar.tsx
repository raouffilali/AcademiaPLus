import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";

const NavBar = () => {
  // State for toggling dropdown menus
  const [showCategories, setShowCategories] = React.useState(false);

  const [showLanguageMenu, setShowLanguageMenu] = React.useState(false);

  // Handler for toggling academic field categories dropdown
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // Handler for toggling language menu dropdown
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <nav className="flex items-center justify-between bg-white w-full h-[64px] py-2 px-8">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="./public/assets/logo.png"
          style={{ width: "80px", height: "80px" }}
          alt="Logo"
        />
        {/*Categories Dropdown */}
        <div className="relative ml-2">
          <button
            className="text-gray-800 hover:text-gray-600 focus:outline-none text-[15px]"
            onClick={toggleCategories}
          >
            Categories
            <svg
              className="w-4 h-4 ml-1 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fill="currentColor" d="M6 8l4 4 4-4z" />
            </svg>
          </button>
          {showCategories && (
            <ul className="absolute left-0 mt-2 py-2 bg-white text-gray-800 rounded-lg shadow-md">
              {/* Render academic field categories */}
              {/* Replace the placeholder data with your actual academic field categories */}
              <li className="px-4 py-2">Academic Field 1</li>
              <li className="px-4 py-2">Academic Field 2</li>
              <li className="px-4 py-2">Academic Field 3</li>
            </ul>
          )}
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex items-center">
        <div className="relative">
          <input
            className="bg-white border-solid  text-[15px] border-2 border-gray-300 rounded-[15px]   w-[521px] text-gray-800 px-4 py-2  focus:outline-none"
            type="text"
            placeholder="Search course .."
          />
          <div className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3">
            <FaSearch size={20} color="#b3b3b3" />
          </div>
        </div>
        {/* Become a Teacher Button */}
        <button className="ml-4 bg-lightBluePal  hover:bg-DarkBluePal  text-white text-[15px]  py-[6px] px-2 font-normal rounded-lg focus:outline-none">
          Become a Teacher
        </button>
        {/* Language Dropdown */}
        <div className="relative ml-4">
          <button
            className="text-gray-800 hover:text-gray-600 focus:outline-none text-[15px]"
            onClick={toggleLanguageMenu}
          >
            <svg className="w-5 h-5 inline ml-1 text-gray-800 ">
              <GrLanguage />
            </svg>
            EN
            <svg
              className="w-4 h-4 ml-1 inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fill="currentColor" d="M6 8l4 4 4-4z" />
            </svg>
          </button>
          {showLanguageMenu && (
            <ul className="absolute right-0 mt-2 py-2 bg-white text-gray-800  text-[15px]rounded-lg shadow-md">
              {/* Render language options */}
              <li className="px-4 py-2">English</li>
              <li className="px-4 py-2">Arabic</li>
              <li className="px-4 py-2">French</li>
            </ul>
          )}
        </div>
        {/* cart Icon */}
        <div className="ml-2 mr-2 text-gray-800  ">
          <RiShoppingCart2Line size={18} />
        </div>
        {/* Login Button */}
        <a
          href="#login"
          className=" text-[15px] mr-2 ml-2 text-lightYelloPal hover:text-yelloPal focus:outline-none"
        >
          Login
        </a>
        {/* Signup Button */}
        <button
          type="button"
          className=" text-[15px] focus:outline-none text-white bg-lightYelloPal hover:bg-yelloPal  focus:ring-yellow-300 font-medium rounded-lg  px-5 py-1 mr-2 ml-2  "
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
