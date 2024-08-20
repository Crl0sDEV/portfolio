import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
