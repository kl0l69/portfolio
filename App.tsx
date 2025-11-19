import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemePanel from './components/ThemePanel';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-pharaoh-dark min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-tech-cyan selection:text-black transition-colors duration-300">
      <Navbar />
      <ThemePanel />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;