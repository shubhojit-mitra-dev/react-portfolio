import React, { useState } from 'react';
import './custom.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id, event) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-black p-4 sticky top-0 px-8 sm:px-20 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center space-x-3'>
                    <a href="#home" className="text-white text-2xl font-bold monoton-regular" onClick={(e) => handleScroll('hero', e)}>MyPortfolio</a>
                </div>
                <div className="hidden sm:flex space-x-2 sm:space-x-8 font-bold">
                    <a href="#home" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('hero', e)}>Home</a>
                    <a href="#about" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('about', e)}>About</a>
                    <a href="#projects" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('projects', e)}>Projects</a>
                    <a href="#contact" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('contact', e)}>Contact</a>
                </div>
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`sm:hidden flex flex-col items-center space-y-4 mt-0 transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <a href="#home" className="mt-8 underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('hero', e)}>Home</a>
                <a href="#about" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('about', e)}>About</a>
                <a href="#projects" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('projects', e)}>Projects</a>
                <a href="#contact" className="underline-animation text-gray-500 hover:text-white" onClick={(e) => handleScroll('contact', e)}>Contact</a>
            </div>
        </nav>
    );
};

export default NavBar;