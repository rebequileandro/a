import React, { useEffect } from 'react';
import './styles/Projects.scss';
import { useObserver } from '@/hooks';
import { dataPage } from '@/utils';
import { ProjectCard } from '@/components';
export interface ProjectsInterface {
  serInView: React.Dispatch<React.SetStateAction<string>>;
}

const Projects: React.FC<ProjectsInterface> = ({ serInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.3
  });
  useEffect(() => {
    isIntersecting && serInView('projects)');
  }, [isIntersecting]);

  return (
    <div className="projects" ref={setReference} id="projects">
      <h2
        className={`text-primary--sub projects__title projects__title--${
          isIntersecting ? 'in' : 'out'
        }`}
      >
        Trabajos | Proyectos
      </h2>
      <div className="projects__container">
        {dataPage.projects.map((project, index) => (
          <div
            key={project.title}
            className={`projects__item projects__item-${index} projects__item-${index}--${
              isIntersecting ? 'in' : 'out'
            }`}
          >
            <p className="projects__item__description heading-tertiary--sub">
              {project.description}
            </p>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.technologies}
              type={project.type}
              link={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
