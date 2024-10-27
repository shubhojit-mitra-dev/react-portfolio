import React from 'react';
import { useMediaQuery } from 'react-responsive';
import AboutMeAccordion from './ui/AboutMeAccordion';

const AboutSection = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <>
      <div className='relative flex justify-center items-center p-4' style={{ height: 'calc(100vh - 4rem)' }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
        <div className='relative text-center'>
          <h1 className='text-3xl sm:text-5xl font-bold text-white mb-8'>ABOUT ME</h1>
          <div className='text-white'>
            <AboutMeAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;