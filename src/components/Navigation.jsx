import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 dark:bg-purple-950">
            <ul className="flex space-x-4 justify-end">
                <li>
                    <NavLink exact to="/" activeClassName = "active" className="hover:text-purple-300">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName = "active" className="hover:text-purple-300">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName = "active" className="hover:text-purple-300">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" activeClassName = "active" className="hover:text-purple-300">Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;