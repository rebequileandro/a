import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ ref }) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  // useEffect(() => {
  //   if (inView) {
  //     setInView("about-me");
  //   }
  // }, [inView]);
  return (
    <div ref={ref} id="about-me)" className="about-me">
      AboutMe
    </div>
  );
};

export default AboutMe;
