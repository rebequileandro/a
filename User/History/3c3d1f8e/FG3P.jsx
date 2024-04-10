import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import programingAnimation from "../assets/lottie-files/developer.json";
export const Home = ({ setInView }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setInView("home");
    }
  }, [inView]);

  return (
    <section ref={ref} className="home" id="home">
      <div>
        <h1 className="home__seg-1 text-primary--main">
          Full Stack Developer <br />
        </h1>
        <h1 className="text-primary--main home__seg-2">
          creo experiencias, <br />
        </h1>
        <h1 className="text-primary--main home__seg-2">Desarrollo tus ideas</h1>
        <p className="text-secondary--main home__seg-4">
          Mi nombre es Leandro Rebequi, soy <br />
          desarrollador multiplataforma.
        </p>
      </div>
      <div className="home__animation-container">
        <span className="home__animation-container__glow" />
        <div className="home__animation-container__animation">
          <Lottie animationData={programingAnimation} />
        </div>
      </div>
    </section>
  );
};
