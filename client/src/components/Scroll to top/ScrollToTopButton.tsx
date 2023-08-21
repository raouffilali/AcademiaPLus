import React, { useState, useEffect } from "react";
import classNames from "classnames";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClasses = classNames(
    "fixed",
    "bottom-6",
    "right-6",
    "lg:p-3",
    "p-2",
    "z-50",
    "bg-redPal",
    "text-white",
    "rounded-lg",
    "shadow-md",
    "transition-opacity",
    { "opacity-100": isVisible, "opacity-0": !isVisible }
  );

  return (
    <button className={buttonClasses} onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 transform rotate-180"
      >
        <path
          fillRule="evenodd"
          d="M2.293 7.293a1 1 0 011.414 0L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
