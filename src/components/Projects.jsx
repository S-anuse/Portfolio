import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const project_desc = [
    {
      title: "YouTube Clone",
      desc: "Video platform clone with authentication.",
      tech: "React, Node.js, MongoDB",
      github: "https://github.com/yourusername/youtube-clone",
      live: "https://youtubeclone-demo.netlify.app",
    },

    {
      title: "Fitness Tracker",
      desc: "Track steps and health metrics.",
      tech: "React Native, Firebase",
      github: "https://github.com/yourusername/fitness-tracker",
      live: "https://fitness-demo.netlify.app",
    },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {project_desc.map((ele, idx) => {
          return (
            <ProjectCard
  key={idx}
  title={ele.title}
  desc={ele.desc}
  tech={ele.tech}
  github={ele.github}
  live={ele.live}
/>
          );
        })}
      </div>
    </section>
  );
}

export default Projects
