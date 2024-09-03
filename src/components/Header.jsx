import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`bg-purple-800 text-white shadow-md${isDarkMode ? 'bg-gray-800' : 'bg-purple-800'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-4xl font-bold dark:text-purple-300">Alec Taber</h1>
        <div className="ml-auto">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md"
          >
            {isDarkMode ? <MdLightMode className="w-10 h-10 text-purple-300"/> : <MdDarkMode className="w-10 h-10 text-gray-800"/>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;