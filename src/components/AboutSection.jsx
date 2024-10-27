import React from 'react';
import AboutMeAccordion from './ui/AboutMeAccordion';
import CustomButton from './ui/CustomButton';

const AboutSection = () => {
  const handleScroll = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='relative flex justify-center items-center p-4' style={{ height: 'calc(100vh - 4rem)' }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-75'></div>
        <div className='relative text-center'>
          <h1 className='text-3xl sm:text-5xl font-bold text-white mb-12'>💫 ABOUT ME</h1>
          <div className='text-white'>
            <AboutMeAccordion />
          </div>
          <div className='flex justify-center mt-7 cursor-pointer' onClick={(e) => handleScroll('tech-stack', e)}>
            <CustomButton content={"What Technologies do I use"} variant={"blue"} size={"xl"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;