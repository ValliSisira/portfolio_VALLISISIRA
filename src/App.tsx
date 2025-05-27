import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Valli Sisira Sista - Portfolio';
    
    // Update favicon - optional if you want to add a custom favicon
    // const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    // if (link) {
    //   link.href = '/favicon.ico';
    // }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;