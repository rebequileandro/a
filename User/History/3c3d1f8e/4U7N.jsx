import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import programingAnimation from "../assets/lottie-files/developer.json";

const Home = ({ setInView }) => {
  const [loadFirstAnimation, setLoadFirstAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setInView("home");
    }
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setLoadFirstAnimation(true);
    }, 12000);
  }, []);

  return (
    <section ref={ref} className="home" id="home)">
      <div>
        <h1
          className={`home__seg-1 home__seg-1--${
            !loadFirstAnimation ? "first" : inView ? "in" : "out"
          } text-primary--main`}
        >
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
        <Lottie animationData={programingAnimation} />
      </div>
    </section>
  );
};
export default Home;
