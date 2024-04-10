import React, { useEffect } from 'react';
import './styles/Projects.scss';
import { useObserver } from '@/hooks';
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
    </div>
  );
};

export default Projects;
