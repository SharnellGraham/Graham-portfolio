import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Chatbox',
      description: 'A real-time chat application',
      embedUrl: 'https://chatbox-ten.vercel.app/'
    },
    {
      title: 'Simon Says Game',
      description: 'A fun memory game',
      embedUrl: 'https://sharnellgraham.github.io/Simon-says-game/'
    },
    {
      title: 'Aesthetic Raindrop',
      description: 'A beautiful weather app',
      embedUrl: 'https://aesthetic-raindrop-2c9eee.netlify.app/'
    },
    {
      title: 'UI Patterns Project',
      description: 'A project showcasing UI patterns',
      embedUrl: 'https://sharnellgraham.github.io/UI-Patterns-Project/'
    },
    {
      title: 'React App Giphy API Project',
      description: 'A project demonstrating a React application using the Giphy API',
      embedUrl: 'https://sharnellgraham.github.io/React-App-Giphy-API-Project/#/'
    },
  ];

  return (
    <div>
      <h2>My Projects Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <iframe src={project.embedUrl} title={project.title} width="100%" height="800" frameBorder="0"></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
