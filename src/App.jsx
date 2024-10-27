import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
// import ProjectsSection from './components/ProjectsSection';
// import Footer from './components/Footer';
import videoBg from './assets/videoBg.mp4';
import { NextUIProvider } from '@nextui-org/react';
import './App.css'


const App = () => {
  return (
    <>
    <NextUIProvider>
      <NavBar />
      <video id="background-video" src={videoBg} autoPlay loop muted />
      <HeroSection />
      <AboutSection />
    </NextUIProvider>
    </>
  );
};

export default App;