import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 p-4 flex justify-center">
        <img 
          src="/Profile.png" 
          alt="Profile" 
          className="w-full max-w-xs h-auto rounded-lg"
        />
      </div>
      <div className="md:w-2/3 p-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Hello! I'm Carlos Miguel Sandrino, a aspiring Web Developer with a passion for Web Developement. I specialize in [Your Specialization] and have [number] years of experience in [Your Field]. I love working on projects that involve [Your Interests or Skills].
        </p>
        <p className="text-lg mb-4">
          In my career, I've worked with [mention any companies or projects if applicable], where I have honed my skills in [mention skills]. I am constantly learning and evolving, staying up-to-date with the latest trends and technologies in the industry.
        </p>
        <p className="text-lg">
          When I'm not working, you can find me [mention hobbies or interests]. I'm always excited to take on new challenges and collaborate with others to create something amazing.
        </p>
      </div>
    </div>
  );
};

export default About;