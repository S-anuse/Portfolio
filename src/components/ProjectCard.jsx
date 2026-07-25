import React from 'react'

const ProjectCard = (props) => {
  const defaultImg = "https://media.istockphoto.com/id/2156599809/photo/flying-through-glow-blue-futuristic-digital-technology-landscape-glow-colourful-particle.jpg?s=612x612&w=0&k=20&c=LuIVFXV1sp5TmM6m-yFkdo6yC62XrVk4QU5vO046D70=";
  
  return (
    <div className="project-card">
      <img
        src={props.image || defaultImg}
        alt={`${props.title} mockup`}
      />
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <h3>{props.tech}</h3>
      </div>
      <div className="project-buttons">
        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <button>Github</button>
          </a>
        )}

        {props.live && (
          <a href={props.live} target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard
