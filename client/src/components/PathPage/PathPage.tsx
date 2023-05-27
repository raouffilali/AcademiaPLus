import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const PathPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div>
      <div className="flex justify-center mt-8">
        <hr className="w-[1108px]" />
      </div>
      <div className="flex ml-[80px]">
        <ul className="text-gray-800 text-[15px] mt-4 flex">
          <li>
            <Link to="/" className="text-gray-800 hover:underline">
              Home
            </Link>
            <HiChevronRight className="inline ml-4 mr-4" />
          </li>
          {pathnames.map((path, index) => {
            const isLast = index === pathnames.length - 1;
            const url = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <li key={index}>
                <Link
                  to={url}
                  className={`${isLast ? 'font-semibold' : 'text-gray-800 hover:underline'}`}
                >
                  {path}
                </Link>
                {!isLast && <HiChevronRight className="inline ml-4 mr-4" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PathPage;
