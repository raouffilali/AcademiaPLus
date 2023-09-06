import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div
            className="px-3 text-left hover:underline hover:underline-offset-4 md:cursor-pointer group"
            onMouseEnter={() => setHeading(link.name)}
            onMouseLeave={() => setHeading("")}
          >
            <h1
              className="py-7 md:text-sm text-DarkBluePal hover:text-gray-600 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                if (heading !== link.name) {
                  setHeading(link.name);
                  setSubHeading("");
                } else {
                  setHeading("");
                }
              }}
            >
              {link.name}
              <span
                className={`text-md hover:text-gray-500 md:mt-1 md:ml-2 md:block hidden ${
                  heading === link.name ? "rotate-180" : ""
                }`}
              >
                <FaAngleDown aria-hidden="true" />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div
                  className="absolute top-14 hidden group-hover:md:block hover:md:block"
                  onMouseEnter={() => setHeading(link.name)}
                  onMouseLeave={() => setHeading("")}
                >
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white rounded-sm p-5 grid grid-cols-2 gap-14">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index} className="">
                        <h1 className="text-md font-semibold text-blueLink">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="text-sm hover:bg-blue-50 p-2 text-gray-600 my-1"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-gray-800"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() => {
                      if (subHeading !== slinks.Head) {
                        setSubHeading(slinks.Head);
                      } else {
                        setSubHeading("");
                      }
                    }}
                    className="py-4 pl-7 font-medium text-gray-600 md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-md md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
