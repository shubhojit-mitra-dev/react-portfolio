import React from 'react';

const TranslucentTab = ({ content, icon, link, size }) => {
  const css = size;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`${css} bg-transparent bg-gray-700 hover:bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg flex justify-center items-center transition-transform duration-300 hover:scale-105`}>
      <img src={icon} alt={content} className="w-8 h-8 mr-2" />
      <p className='text-white'>{content}</p>
    </a>
  );
};

export default TranslucentTab;