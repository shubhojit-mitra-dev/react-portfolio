import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import ProjectsSection from './components/ProjectsSection';
// import Footer from './components/Footer';
import videoBg from './assets/videoBg.mp4';
import './App.css'


const App = () => {
  return (
    <>
      <NavBar />
      <video id="background-video" src={videoBg} autoPlay loop muted />
      <HeroSection />
    </>
  );
};

export default App;