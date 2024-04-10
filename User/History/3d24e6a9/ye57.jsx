import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = ({ setInView }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  // useEffect(() => {
  //   if (inView) {
  //     setInView("projects");
  //   }
  // }, [inView]);
  return (
    <div id="projects)" className="projects">
      Projects
    </div>
  );
};

export default Projects;
