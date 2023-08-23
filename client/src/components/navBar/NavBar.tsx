// Importing required modules and components
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavLinks from "./NavLinks";
import { ILanguage } from "../../constants/interfaces";
import { images } from "../../../public/constants";

// Define language options
const LANGUAGES: ILanguage[] = [
  { id: 1, label: "Ar" },
  { id: 2, label: "Fr" },
  { id: 3, label: "En" },
];

// Navbar component
const Navbar = () => {
  // State variables
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    LANGUAGES[0]
  );

  // Effect to handle scrolling and update state accordingly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 0; //
      setIsScrolled(shouldBeScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to update the Navbar's appearance based on scroll state
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      isScrolled
        ? navbar.classList.add("scrolled")
        : navbar.classList.remove("scrolled");
    }
  }, [isScrolled]);

  // Function to handle language selection
  const handleLanguageSelect = (language: ILanguage) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Here you can add logic to change the page language
  };

  // Return the JSX for the Navbar
  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} w-full`}
      style={{ zIndex: 1 }}
    >
      <div className="flex items-center lg:px-[80px] ">
        <div className="z-50 md:w-auto w-full flex ">
          <Link to="/">
            <img
              src={images.Logo}
              alt="logo"
              className="md:cursor-pointer h-8"
            />
          </Link>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-2">
          {/* Display navigation links */}
          <NavLinks />

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className={`searchBar relative `}>
              <input
                className={`bg-white  ${
                  isScrolled ? " border border-gray-200" : "border-gray-300"
                }  border-solid text-sm border-1 rounded-[15px] w-[370px] text-gray-800 px-4 py-2 focus:outline-none`}
                type="text"
                placeholder="Search course .."
              />
              <div className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3">
                <FaSearch size={18} color="#b3b3b3" />
              </div>{" "}
            </div>
          </div>
        </ul>

        {/* Display buttons and dropdown for larger screens */}
        <div className="md:hidden lg:flex hidden">
          {/* Become a Teacher Button */}
          <Link to="/becomeaTeacher" className="ml-2">
            <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
              Become a Teacher
            </button>
          </Link>

          {/* Language Dropdown */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
              id="language-menu"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GrLanguage className="mr-1" size={16} />
              {selectedLanguage.label}
              <FaAngleDown className="ml-1" aria-hidden="true" size={12} />
            </button>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="none">
                  {/* Display language options */}
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

          {/* Cart Icon */}
          <Link to="/CartPage" className="ml-2 mr-2 text-gray-800">
            <RiShoppingCart2Line size={18} />
          </Link>

          {/* Login Button */}
          <Link
            to="/loginPage"
            className="mr-2 ml-2 text-gray-800 bg-button rounded-2xl  hover:text-white hover:bg-redPal px-4  py-2 focus:outline-none"
          >
            Login
          </Link>

          {/* Signup Button */}
          <Link
            to="/SignupPage"
            className="text-redPal hover:text-white border-2 border-button hover:bg-redPal hover:border-redPal rounded-2xl px-4  py-2 mr-2 ml-2"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile nav */}
        <ul
          className={`
         lg-hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            {/* Login Button */}
            <Link
              to="/loginPage"
              className=" text-gray-800 bg-button rounded-2xl   hover:text-white hover:bg-redPal px-4  py-2 focus:outline-none"
            >
              Login
            </Link>

            {/* Signup Button */}
            <Link
              to="/SignupPage"
              className="text-redPal hover:text-white border-2 border-button hover:bg-redPal hover:border-redPal rounded-2xl px-4  py-2 "
            >
              Sign Up
            </Link>

            {/* Become a Teacher Button */}
            <Link to="/becomeaTeacher" className="ml-2">
              <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
                Become a Teacher
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
