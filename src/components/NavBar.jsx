import React from 'react';
import './custom.css';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 bg-opacity-60 p-4 sticky top-0">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-8 sm:space-x-20 font-bold">
                    <a href="#home" className="underline-animation text-gray-300 hover:text-white">Home</a>
                    <a href="#about" className="underline-animation text-gray-300 hover:text-white">About</a>
                    <a href="#services" className="underline-animation text-gray-300 hover:text-white">Projects</a>
                    <a href="#contact" className="underline-animation text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;