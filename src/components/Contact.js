import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto min-h-96 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-8 text-center">
        I'm always open to new opportunities and collaborations. You can reach out to me through the following platforms:
      </p>
      <div className="flex space-x-8">
        <a 
          href="https://www.facebook.com/KreizzyCarl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FaFacebook size={40} />
        </a>
        <a 
          href="https://www.linkedin.com/in/sandrino-carlos-miguel" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <FaLinkedin size={40} />
        </a>
        <a 
          href="https://github.com/Crl0sDEV" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition"
        >
          <FaGithub size={40} />
        </a>
        <a 
          href="mailto:sandrinocarlosmiguel@gmail.com" 
          className="text-black-600 hover:text-black-800 transition"
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;