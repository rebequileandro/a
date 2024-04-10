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
      <div>
        <figure className="projects__image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg"
            alt="sample38"
          />
          <div className="title">
            <div>
              <h2>PocketFit</h2>
              <h4>Tool</h4>
            </div>
          </div>
          <figcaption>
            <p>
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
          <a href="#"></a>
        </figure>
      </div>
    </div>
  );
};

export default Projects;
