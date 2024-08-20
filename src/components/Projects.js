import React from 'react';
import Project from './Project';

const projectsData = [
  {
    title: 'Personal Blog Website',
    description: 'A personal blog website to share my thoughts and experiences.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    features: [
      'User authentication and authorization',
      'CRUD operations for blog posts',
      'Responsive design',
    ],
    challenges: 'Implementing user authentication securely.',
    outcome: 'Successfully created a platform to share content and receive feedback.',
    links: [
      { label: 'Live Demo', url: 'https://live-demo-link.com' },
      { label: 'GitHub Repository', url: 'https://github.com/yourusername/project-repo' },
    ],
  },
  {
    title: 'E-commerce Platform',
    description: 'An online store for selling products.',
    technologies: ['React', 'Redux', 'Firebase', 'Stripe API'],
    features: [
      'Product listing and search functionality',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
    ],
    challenges: 'Ensuring a smooth and secure payment process.',
    outcome: 'Developed a functional e-commerce site with payment capabilities.',
    links: [
      { label: 'Live Demo', url: 'https://live-demo-link.com' },
      { label: 'GitHub Repository', url: 'https://github.com/yourusername/project-repo' },
    ],
  },
  {
    title: 'Weather App',
    description: 'A web application to display weather information.',
    technologies: ['React', 'OpenWeatherMap API', 'Chart.js'],
    features: [
      'Real-time weather updates',
      'Weather forecasts with visual charts',
      'Geolocation-based weather information',
    ],
    challenges: 'Handling API rate limits and geolocation accuracy.',
    outcome: 'Provided a reliable weather information source for users.',
    links: [
      { label: 'Live Demo', url: 'https://live-demo-link.com' },
      { label: 'GitHub Repository', url: 'https://github.com/yourusername/project-repo' },
    ],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            challenges={project.challenges}
            outcome={project.outcome}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
