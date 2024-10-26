import React, { useState } from 'react';
import './custom.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black p-4 sticky top-0 px-8 sm:px-20 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center space-x-3'>
                    <a href="#home" className="text-white text-2xl font-bold monoton-regular">MyPortfolio</a>
                </div>
                <div className="hidden sm:flex space-x-2 sm:space-x-8 font-bold">
                    <a href="#home" className="underline-animation text-gray-300 hover:text-blue-500">Home</a>
                    <a href="#about" className="underline-animation text-gray-300 hover:text-blue-500">About</a>
                    <a href="#services" className="underline-animation text-gray-300 hover:text-blue-500">Projects</a>
                    <a href="#contact" className="underline-animation text-gray-300 hover:text-blue-500">Contact</a>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                            <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                            <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`sm:hidden flex flex-col items-center space-y-4 mt-0 transition-all duration-1000 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <a href="#home" className="mt-5 underline-animation text-gray-300 hover:text-blue-500">Home</a>
                <a href="#about" className="underline-animation text-gray-300 hover:text-blue-500">About</a>
                <a href="#services" className="underline-animation text-gray-300 hover:text-blue-500">Projects</a>
                <a href="#contact" className="underline-animation text-gray-300 hover:text-blue-500">Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;