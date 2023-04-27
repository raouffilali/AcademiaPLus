import { useState } from 'react';
import { HiHome, HiLogout, HiMoon, HiSun, HiUserGroup } from 'react-icons/hi';

const LeftSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    // handle logout logic
  };
  var iconSize=20;
  var iconColor:string="#676767";

  return (
    <div className=" sticky w-12 h-screen flex flex-col items-center justify-between shadow-md">
      <div className="my-8">
        <a href="/" className="block my-4">
          <HiHome size={iconSize} color={iconColor} />
        </a>
        <a href="/community" className="block my-4">
          <HiUserGroup size={iconSize} color={iconColor} />
        </a>
      </div>
      <div className="my-8">
        <button onClick={toggleDarkMode} className="block my-4">
          {isDarkMode ? <HiSun size={iconSize} color={iconColor}/> : <HiMoon size={iconSize} color={iconColor} />}
        </button>
        <button onClick={handleLogout} className="block my-4">
          <HiLogout size={iconSize} color={iconColor} />
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
