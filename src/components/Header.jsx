import React from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
    return (
        <header className="bg-purple-800 text-white shadow-md ">
            <h1 className='text-4xl font-bold p-4'>Alec Taber</h1>
            <Navigation />
        </header>
    );
};

export default Header;