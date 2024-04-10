import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import programingAnimation from "../assets/lottie-files/developer.json";

const Home = ({ setInView }) => {
  const [loadFirstAnimation, setLoadFirstAnimation] = useState(false);
  const { ref: refView, inView } = useInView({
    threshold: 0.5,
  });
  const { ref: refAn, inView: inViewAn } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setInView("home");
    }
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setLoadFirstAnimation(true);
    }, 13000);
  }, []);

  return (
    <section ref={refView} className="home" id="home)">
      <div ref={refAn}>
        <h1
          className={`home__seg-1 home__seg-1--${
            !loadFirstAnimation ? "first" : inViewAn ? "in" : "out"
          } text-primary--main`}
        >
          Full Stack Developer <br />
        </h1>
        <h1
          className={`home__seg-2 home__seg-2--${
            !loadFirstAnimation ? "first" : inViewAn ? "in" : "out"
          } text-primary--main`}
        >
          Creo experiencias, <br />
        </h1>
        <h1
          className={`home__seg-2 home__seg-2--${
            !loadFirstAnimation ? "first" : inViewAn ? "in" : "out"
          } text-primary--main`}
        >
          Desarrollo tus ideas
        </h1>
        <p
          className={`home__seg-3 home__seg-3--${
            !loadFirstAnimation ? "first" : inViewAn ? "in" : "out"
          } text-secondary--main`}
        >
          Mi nombre es Leandro Rebequi, soy <br />
          desarrollador multiplataforma.
        </p>
      </div>
      <div className="home__animation-container">
        <span className="home__animation-container__glow" />
        <Lottie animationData={programingAnimation} />
      </div>
    </section>
  );
};
export default Home;
