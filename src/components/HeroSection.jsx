import React from 'react';
import { useMediaQuery } from 'react-responsive';
import downloadIcon from '../assets/download.svg';
import contactIcon from '../assets/contact.svg';
import CustomButton from './ui/CustomButton';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import instaIcon from '../assets/instagram.svg';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const resumeLink = '/react-portfolio/resume.pdf';

  const handleScroll = (id) => {
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
          <h1 className='text-3xl sm:text-5xl font-bold text-white mb-4'>Heyy 👋, I'm Shubhojit Mitra</h1>
          <p className='text-base sm:text-lg text-gray-300 max-w-xl mx-auto mt-10'>
            Front-End Developer dedicated to creating seamless, user-centered web experiences through clean code, intuitive design, and a passion for innovation.
          </p>
          <div className='mt-10 flex flex-wrap justify-center space-y-0 space-x-5 sm:space-y-0 sm:space-x-10'>
            <CustomButton content="Download CV" icon={downloadIcon} variant="blue" size={isSmallScreen ? 'm' : 'xl'} link={resumeLink} />
            <CustomButton content="Contact Me" icon={contactIcon} variant="white" size={isSmallScreen ? 'm' : 'xl'} link="#contact" onClick={() => handleScroll('footer')} />
          </div>
          <div className='flex justify-center mt-10 gap-10'>
            <a href="https://linkedin.com/in/shubhojit-mitra-dev" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className='w-12' />
            </a>
            <a href="https://github.com/shubhojit-mitra-dev" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className='w-12' />
            </a>
            <a href="https://instagram.com/shubhojit-mitra-dev" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className='w-12' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;