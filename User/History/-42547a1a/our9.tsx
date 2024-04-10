import { useObserver } from '@/hooks';
import React, { useEffect } from 'react';
import './styles/Projects.scss';
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
    <div className="projects" ref={setReference}>
      Projects
    </div>
  );
};

export default Projects;
