import React from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <h1 className='text-2xl font-bold'>Alec Taber</h1>
            <Navigation />
        </header>
    );
};

export default Header;