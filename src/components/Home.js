import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Carlos Miguel</h1>
        <p className="mb-4">
          I'm a Aspiring Web DEV with a passion for creating amazing web experiences.
          I specialize in [Your Specialization] and have a knack for [Your Skills].
          Let's build something great together!
        </p>
        <a 
          href="/CV.pdf" 
          download 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <img 
          src="/Profile.png" 
          alt="Profile" 
          className="w-full max-w-xs h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
