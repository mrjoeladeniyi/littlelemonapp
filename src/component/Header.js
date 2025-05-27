import React from 'react';
import Nav from './Nav';
const Header = () => {
    return (
        <>
        <div className="fixed top-0 left-0 w-full z-50 p-4 bg-white">
            <div className="flex items-center justify-center">
                <Nav />
            </div>
        </div>
        </>
    );
};

export default Header;