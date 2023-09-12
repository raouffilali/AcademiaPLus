import React, { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavLinks from "./NavLinks";
import { ILanguage } from "../../constants/interfaces";

import { AiOutlineHeart } from "react-icons/ai";
import { images } from "../../constants";

interface NavBarProps {
  isAuthenticated: boolean;
  isTeacher: boolean;
  isFixed?: boolean;
  isInsideVirtualLab?: boolean;
  handleLogout: () => void;
  
  
}

const LANGUAGES: ILanguage[] = [
  { id: 1, label: "Ar" },
  { id: 2, label: "Fr" },
  { id: 3, label: "En" },
];

const NavBar: React.FC<NavBarProps> = ({
  handleLogout,
  isAuthenticated,
  isTeacher,
  isFixed,
  isInsideVirtualLab,
 
}) => {
  const [isSimulationMenuOpen, setIsSimulationMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Separate state for language menu
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false); // Separate state for avatar menu
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    LANGUAGES[0]
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldBeScrolled = scrollPosition > 0;
    setIsScrolled(shouldBeScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      isScrolled
        ? navbar.classList.add("scrolled")
        : navbar.classList.remove("scrolled");
    }
  }, [isScrolled]);

  const handleLanguageSelect = (language: ILanguage) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false); // Close the language menu when a language is selected
    // logic to change the page language
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isFixed ? "lg:fixed  " : ""
      } w-full`}
      style={{ zIndex: 1 }}
    >
      <div className="flex items-center lg:mx-[80px] ">
        <div className="z-50 md:w-auto w-full flex">
          <Link to="/">
            <img
              src={images.Logo}
              alt="logo"
              className="md:cursor-pointer ml-0 h-6"
            />
          </Link>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {isInsideVirtualLab ? ( // Conditionally render Simulation and Resources menus
          <>
            {/* Simulation Dropdown */}
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsSimulationMenuOpen(true)}
        onMouseLeave={() => setIsSimulationMenuOpen(false)}
      >
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
        >
          Simulation
          <FaAngleDown
            className={`ml-1 transition-transform duration-200 transform ${
              isSimulationMenuOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            size={12}
          />
        </button>

        {isSimulationMenuOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            onMouseEnter={() => setIsSimulationMenuOpen(true)}
            onMouseLeave={() => setIsSimulationMenuOpen(false)}
          >
            <div className="py-4 px-1 rounded" role="none">
              {/* Simulation menu content */}
              <Link to="/find-simulations">
                      <button className="block w-full text-left px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                        Find Simulations
                      </button>
                    </Link>
                    <Link to="/course-packages">
                      <button className="block w-full text-left px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                        Course Packages
                      </button>
                    </Link>
                    <Link to="/pricing">
                      <button className="block w-full text-left px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                        Pricing
                      </button>
                    </Link>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsResourcesMenuOpen(true)}
        onMouseLeave={() => setIsResourcesMenuOpen(false)}
      >
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
        >
          Resources
          <FaAngleDown
            className={`ml-1 transition-transform duration-200 transform ${
              isResourcesMenuOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
            size={12}
          />
        </button>

        {isResourcesMenuOpen && (
          <div
            className="origin-top-left absolute left-0 mt-2 w-[600px] pr-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            onMouseEnter={() => setIsResourcesMenuOpen(true)}
            onMouseLeave={() => setIsResourcesMenuOpen(false)}
          >
            <div className="p-4">
              {/* Resources menu content */}
              <div className="p-4">
                    <div className="grid grid-cols-5 gap-4" role="none">
                      <div className="col-span-3">
                        <p className="text-md font-semibold text-blueLink">
                          AcademiaLab Resources
                        </p>
                        <p className="text-sm text-gray-700">
                          Check out all the AcademiaLab resources that can
                          accelerate your learning.
                        </p>
                      </div>
                      <div className="col-span-1 px-12">
                        <ul className="text-sm text-gray-700">
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/events">Events</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/case-studies">Case Studies</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/webinars">Webinars</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/podcast">Podcast</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-1 px-16">
                        <ul className="text-sm text-gray-700">
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4  ">
                            <Link to="/news">News</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/guides">Guides</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/research">Research</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/3d-assets">3D Assets</Link>
                          </li>
                          <li className="hover:bg-gray-100 hover:text-blueLink p-4">
                            <Link to="/contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        )}
      </div>
          </>
        ) : (
          <ul className="md:flex hidden items-center gap-2">
            <NavLinks />
            <div className="hidden md:flex items-center">
              <div className={`searchBar relative`}>
                <input
                  className={`bg-white ${
                    isScrolled ? " border border-gray-200" : "border-gray-300"
                  }  border-solid text-sm border-1 rounded-[15px] lg:w-[370px] text-gray-800 px-4 py-2 focus:outline-none`}
                  type="text"
                  placeholder="Search course .."
                />
                <div className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3">
                  <FaSearch size={18} color="#b3b3b3" />
                </div>
              </div>
            </div>
          </ul>
        )}

        <div className="md:hidden  space-x-3 lg:flex hidden">
          {isAuthenticated ? (
            <>
              {isTeacher ? (
                <Link to="/instructor-dashboard">
                  <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
                    Instructor Dashboard
                  </button>
                </Link>
              ) : (
                <Link to="/becomeaTeacher">
                  <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
                    Become a Teacher
                  </button>
                </Link>
              )}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
                  id="language-menu"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  <GrLanguage className="mr-1" size={16} />
                  {selectedLanguage.label}
                  <FaAngleDown className="ml-1" aria-hidden="true" size={12} />
                </button>

                {isLanguageMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
              {/* Wishlist Icon */}
              <Link to="/wishlist" className="mx-2 text-gray-800">
                <AiOutlineHeart size={18} />
              </Link>

              {/* Cart Icon */}
              <Link to="/cart" className="ml-2 mr-2 text-gray-800">
                <RiShoppingCart2Line size={18} />
              </Link>
              {/* User Avatar Menu */}
              <div className="relative ml-2 inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
                >
                  <img
                    src="assets/avatar/avatar-1.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 border-4 border-gray-300 rounded-full"
                  />
                </button>

                {isAvatarMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="none">
                      {isTeacher ? (
                        <Link to="/instructor-dashboard/profile">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            Profile
                          </button>
                        </Link>
                      ) : (
                        <Link to="/student-dashboard/profile">
                          <button  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            Profile
                          </button>
                        </Link>
                      )}
                      {isTeacher ? (
                        <Link to="/instructor-dashboard">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            My Dashboard
                          </button>
                        </Link>
                      ) : (
                        <Link to="/student-dashboard">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            My Dashboard
                          </button>
                        </Link>
                      )}
                      {isTeacher ? (
                        <Link to="/instructor-dashboard/earnings" >
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            Earnings
                          </button>
                        </Link>
                      ) : (
                        <Link to="/student-dashboard/subscriptions">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            Subscriptions
                          </button>
                        </Link>
                      )}
                      {isTeacher ? (
                        <Link to="/instructor-dashboard/settings">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            settings
                          </button>
                        </Link>
                      ) : (
                        <Link to="/student-dashboard/settings">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                            settings
                          </button>
                        </Link>
                      )}
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                        onClick={() => handleLogout()}
                      >
                        Log Out
                      </button>
                      <div className="flex items-center px-4 py-2">
                        <span>Night Mode</span>
                        {/* Add a toggle switch for night mode here */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/becomeaTeacher" className="ml-2">
                <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
                  Become a Teacher
                </button>
              </Link>

              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
                  id="language-menu"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  <GrLanguage className="mr-1" size={16} />
                  {selectedLanguage.label}
                  <FaAngleDown className="ml-1" aria-hidden="true" size={12} />
                </button>

                {isLanguageMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

              {/* Cart Icon */}
              <Link to="/cart" className="ml-2 mr-2 text-gray-800">
                <RiShoppingCart2Line size={18} />
              </Link>

              {/* Login Button */}
              <Link
                to="/login"
                className="mr-2 ml-2 text-gray-800 bg-button rounded-2xl hover:text-white hover:bg-redPal px-4 py-2 focus:outline-none"
              >
                Login
              </Link>

              {/* Signup Button */}
              <Link
                to="/signup"
                className="text-redPal hover:text-white border-2 border-button hover:bg-redPal hover:border-redPal rounded-2xl px-4 py-2 mr-2 ml-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
         lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          {isAuthenticated ? (
            <div className="py-5">
              {/* User Avatar Menu for Mobile */}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm font-Lato text-gray-700 hover:text-gray-500 focus:outline-none"
                  onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
                >
                  <img
                    src="assets/avatar/avatar-1.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <FaAngleDown className="ml-1" aria-hidden="true" size={12} />
                </button>

                {isAvatarMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="none">
                      <Link to="/profile">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                          Profile
                        </button>
                      </Link>
                      <Link to="/dashboard">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                          Dashboard
                        </button>
                      </Link>
                      <Link to="/subscriptions">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                          Subscriptions
                        </button>
                      </Link>
                      <Link to="/settings">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
                          Settings
                        </button>
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blueLink focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                        onClick={() => handleLogout()}
                      >
                        Log Out
                      </button>
                      <div className="flex items-center px-4 py-2">
                        <span>Night Mode</span>
                        {/* Add a toggle switch for night mode here */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="py-5">
              <Link
                to="/login"
                className="text-gray-800 bg-button rounded-2xl hover:text-white hover:bg-redPal px-4 py-2 focus:outline-none"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-redPal hover:text-white border-2 border-button hover:bg-redPal hover:border-redPal rounded-2xl px-4 py-2 mt-2"
              >
                Sign Up
              </Link>
              <Link to="/becomeaTeacher" className="ml-2">
                <button className="bg-greenish hover:bg-bluePal text-DarkBluePal hover:text-white text-sm py-2 px-2 font-normal rounded-2xl focus:outline-none">
                  Become a Teacher
                </button>
              </Link>
              <Link to="/wishlist" className="ml-2">
                <AiOutlineHeart size={18} />
              </Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
