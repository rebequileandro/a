import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = ({ setInView }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setInView("projects");
    }
  }, [inView]);
  return (
    <div ref={ref} id="projects" className="projects">
      Projects
    </div>
  );
};

export default Projects;
