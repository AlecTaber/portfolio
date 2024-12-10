import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 dark:bg-purple-950">
            <ul className="flex space-x-4 justify-end">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? 'hover:text-purple-300 active' : 'hover:text-purple-300'
                        }
                    >
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/portfolio" 
                        className={({ isActive }) => 
                            isActive ? 'hover:text-purple-300 active' : 'hover:text-purple-300'
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            isActive ? 'hover:text-purple-300 active' : 'hover:text-purple-300'
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/resume" 
                        className={({ isActive }) => 
                            isActive ? 'hover:text-purple-300 active' : 'hover:text-purple-300'
                        }
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
