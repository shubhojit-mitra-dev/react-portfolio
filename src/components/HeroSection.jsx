import React from 'react';
import { useMediaQuery } from 'react-responsive';
import downloadIcon from '../assets/download.svg';
import contactIcon from '../assets/contact.svg';
import CustomButton from './ui/CustomButton';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      <div className='relative flex justify-center items-center p-4' style={{ height: 'calc(100vh - 4rem)' }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
        <div className='relative text-center'>
          <h1 className='text-3xl sm:text-5xl font-bold text-white mb-4'>Heyy 👋, I'm Shubhojit Mitra</h1>
          <p className='text-base sm:text-lg text-gray-300 max-w-xl mx-auto mt-10'>
            Front-End Developer dedicated to creating seamless, user-centered web experiences through clean code, intuitive design, and a passion for innovation.
          </p>
          <div className='mt-10 flex flex-wrap justify-center space-y-0 space-x-5 sm:space-y-0 sm:space-x-10'>
            <CustomButton content="Download CV" icon={downloadIcon} variant="blue" size={isSmallScreen ? 'm' : 'xl'} link="%PUBLIC_URL%/resume.pdf" />
            <CustomButton content="Contact Me" icon={contactIcon} variant="white" size={isSmallScreen ? 'm' : 'xl'} link="#contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;