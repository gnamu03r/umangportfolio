// import React from 'react';
import React, { useState, useEffect } from "react";
import './App.css';
import IntroAnimation from './components/introanimation/IntroAnimation';
import CustomCursor from './components/customcursor/CustomCursor';
import MagneticButton from './components/magneticbutton/MagneticButton';
import ParticlesBackground from './components/particlesbackground/ParticlesBackground';
import Alert from './components/alert/Alert';
import MusicPlayer from './components/musicplayer/Musicplayer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
      setTimeout(() => setShowIntro(false), 4000); // Increased for a natural feel
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation />}
      <CustomCursor />
      <MagneticButton />  
      <ParticlesBackground />
      <Alert />
      <Header />
      <MusicPlayer />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />

      <Scrollup />
    </>
    
  );
}

export default App;
