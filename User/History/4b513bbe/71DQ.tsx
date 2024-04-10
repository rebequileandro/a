import React from 'react';
import './styles/ProjectCard.scss';
export interface ProjectCardInterface {
  image: string;
  title: string;
  type: string;
  description: string;
}
const ProjectCard: React.FC<ProjectCardInterface> = (props) => {
  return (
    <figure className="projectcard__image">
      <img src={props.image} alt="project-image" />
      <div className="title">
        <div>
          <h2>{props.title}</h2>
          <h4>{props.type}</h4>
        </div>
      </div>
      <figcaption>
        <p className="heading-tertiary--main">Tecnologías empleadas:</p>
        <p className="heading-tertiary--main">{props.description}</p>
      </figcaption>
      <a href="#"></a>
    </figure>
  );
};

export default ProjectCard;
