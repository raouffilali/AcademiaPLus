import React, { useState, useRef, useEffect } from 'react';
import { Category, CATEGORIES } from './categories';
import { FaAngleDown } from "react-icons/fa";
const CategoriesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className='flex'>
      <button
        type="button"
        className="inline-flex text-gray-800 text-[15px] hover:text-gray-500 focus:outline-none"
        onClick={toggleDropdown}
      >
        Categories
        <FaAngleDown
                className=" mt-[5px] "
                aria-hidden="true"
              />
      </button>
      
      </div>
      {isOpen && (
        <div className="flex justify-between space-x-2 absolute top-10 left-0 z-10 w-96 py-6 bg-white  rounded shadow-lg">
          {CATEGORIES.map((category: Category, index: number) => (
            <div key={index} className="px-8 py-1">
              <div className="font-medium pb-2 text-blueLink">{category.title}</div>
              <hr />
              {category.subcategories.map((subcategory, subIndex) => (
                <a
                  key={subIndex}
                  href={subcategory.link}
                  className="block px-1 py-2 text-sm text-gray-700 hover:text-blueLink hover:bg-gray-100"
                >
                  {subcategory.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesMenu;
