import React, { useEffect } from 'react';
import './styles/Projects.scss';
import { useObserver } from '@/hooks';
import { dataPage } from '@/utils';
export interface ProjectsInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Projects: React.FC<ProjectsInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5
  });
  useEffect(() => {
    isIntersecting && serInView('projects');
  }, [isIntersecting]);

  return (
    <div className="projects" ref={setReference} id="projects">
      <h2 className="text-primary--sub projects__title">
        Trabajos | Proyectos
      </h2>
      <div>
        {dataPage.projects.map((project) => (
          <figure className="projects__image">
            <img src={project.image} alt="project-image" />
            <div className="title">
              <div>
                <h2>{project.title}</h2>
                <h4>Tool</h4>
              </div>
            </div>
            <figcaption>
              <p>{project.technologies}</p>
            </figcaption>
            <a href="#"></a>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Projects;
