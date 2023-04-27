import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import { useState } from "react";

import CategoriesMenu from "./CategoriesMenu";
interface Language {
  id: number;
  label: string;
}

const LANGUAGES: Language[] = [
  { id: 1, label: "Ar" },
  { id: 2, label: "Fr" },
  { id: 3, label: "En" },
];
const NavBar = (props: any) => {
  // State for toggling dropdown menus
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    LANGUAGES[0]
  );

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between space-x-2 bg-white w-full h-[64px]  pr-[60px] pl-[60px]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="./public/assets/logo.png"
          style={{ width: "100px", height: "90px" }}
          alt="Logo"
        />
        {/*Categories Dropdown */}

        <CategoriesMenu />
      </div>
      {/* Search Bar */}
      <div className="flex items-center">
        <div className="relative">
          <input
            className="bg-white border-solid  text-[15px] border-2 border-gray-300 rounded-[15px]   w-[470px] text-gray-800 px-4 py-2  focus:outline-none"
            type="text"
            placeholder="Search course .."
          />
          <div className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3">
            <FaSearch size={18} color="#b3b3b3" />
          </div>
        </div>
        {/* Become a Teacher Button */}

        <div style={{ visibility: props.visibility ? 'hidden'  : 'visible' }}>
          {" "}
          <button className="ml-4 bg-lightBluePal  hover:bg-DarkBluePal  text-white text-[15px]  py-[6px] px-2 font-normal rounded-lg focus:outline-none">
            Become a Teacher
          </button>
        </div>

        {/* Language Dropdown */}
        <div className="z-10 relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center  rounded-md  mx-2 px-2 py-2 text-[15px] font-Lato  text-gray-700 hover:text-gray-500 focus:outline-none "
              id="language-menu"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GrLanguage className=" mt-1 mr-1" size={16} />
              {selectedLanguage.label}
              <FaAngleDown
                className=" mt-[6px] -mr-1 ml-1 h-4 w-3"
                aria-hidden="true"
              />
            </button>
          </div>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              <div className="py-1" role="none">
                {LANGUAGES.map((language) => (
                  <button
                    key={language.id}
                    className={`${
                      selectedLanguage.id === language.id
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none`}
                    role="menuitem"
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>
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
          className=" text-[15px] focus:outline-none text-white bg-lightYelloPal hover:bg-yelloPal  font-medium rounded-lg  px-5 py-1 mr-2 ml-2  "
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
