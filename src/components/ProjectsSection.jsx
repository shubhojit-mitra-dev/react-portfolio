import React, { useState } from 'react';
import open from '../assets/open-link.svg';
import ghIcon from '../assets/github.svg';
import thundermailPythonSDK from '../assets/thundermail-python-sdk.png';
import mentorHub from '../assets/mentorHub.png';
import workInProgress from '../assets/work-in-progress.png';

const ProjectsSection = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  const projects = [
    {
      name: 'Thundermail Python SDK',
      image: thundermailPythonSDK,
      github: 'https://github.com/shubhojit-mitra-dev/thundermail-python-sdk',
      description:
        'Developed a Python SDK for Thundermail API with robust error handling, clean OOP design, and pip installation to streamline email integration for developers.',
    },
    {
      name: 'Mentor Hub',
      image: mentorHub,
      github: 'https://github.com/shubhojit-mitra-dev/Frontend',
      description:
        "A hackathon frontend project built with Next.js, TypeScript, and Tailwind CSS, designed to connect mentors and entrepreneurs. Offers a seamless user experience for professional networking and mentorship.",
    },
    {
      name: 'Full-Stack AI Project',
      image: workInProgress,
      github: '',
      description: 
        "An innovative full-stack AI project being built with Next.js, featuring responsive UI, secure user authentication, and dynamic content generation powered by advanced API integrations."
    }
  ];

  const handleMouseEnter = (description) => {
    setTooltip((prev) => ({ ...prev, visible: true, content: description }));
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX + 20,
      y: e.clientY + 20,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false, content: '' }));
  };

  return (
    <>
      <div
        className="relative grid justify-center items-center p-4 sm:mb-0"
        style={{ minHeight: 'calc(100vh - 4rem)' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
        <div className="relative text-center w-full">
          <h1 className="text-white text-3xl sm:text-5xl font-bold mb-12 mt-0 sm:mt-0">
            🚀 Projects
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:m-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="translucent transition-transform duration-300 hover:scale-105 p-4 rounded-lg shadow-lg flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(project.description)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <h2 className="text-white text-xl font-bold mt-4">{project.name}</h2>
                <a
                  href={project.github ? project.github : ''}                 target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold mt-2 bg-black px-4 py-2 rounded-lg flex items-center"
                  onClick={(e) => {
                    if (!project.github) e.preventDefault();
                  }}
                >
                  <img src={ghIcon} className='w-5 h-5 mr-2' alt="" />
                  {project.github ? 'View on GitHub' : 'Work in Progress'}
                  <img src={open} className='w-5 h-5 ml-2' alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {tooltip.visible && (
          <div
            className="fixed translucent text-white p-3 rounded-lg shadow-lg max-w-xs z-50"
            style={{ top: tooltip.y, left: tooltip.x }}
          >
            {tooltip.content}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsSection;