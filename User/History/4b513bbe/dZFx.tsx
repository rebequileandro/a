import React from 'react';
import './styles/ProjectCard.scss';
export interface ProjectCardInterface {
  image: string;
  title: string;
  description: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({
  image,
  title,
  description,
  type
}) => {
  return (
    <figure className="projectcard__image">
      <img src={image} alt="project-image" />
      <div className="title">
        <div>
          <h2>{title}</h2>
          <h4>{type}</h4>
        </div>
      </div>
      <figcaption>
        <p>Tecnologías empleadas:</p>
        <p>{description}</p>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
};

export default ProjectCard;
