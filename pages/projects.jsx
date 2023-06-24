import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Simon Says Game',
      description: 'A fun memory game',
      embedUrl: 'https://sharnellgraham.github.io/Simon-says-game/'
    },
    {
      title: 'Chatbox',
      description: 'A real-time chat application',
      embedUrl: 'https://chatbox-ten.vercel.app/'
    },
    {
      title: 'Aesthetic Raindrop',
      description: 'A beautiful weather app',
      embedUrl: 'https://aesthetic-raindrop-2c9eee.netlify.app/'
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
