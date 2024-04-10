import "./home.scss";
import doubleRing from "assets/double_ring.svg";
import showControl from "assets/show-control.svg";
import sliceRing from "assets/slice-ring.svg";
import dots from "assets/dots1.svg";
import { useObserver } from "hooks/useObserver";
import { useEffect } from "react";

const Home = ({ setInView }) => {
  const [isIntersecting, setReference] = useObserver({
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    isIntersecting && setInView("#inicio");
  }, [isIntersecting]);

  return (
    <section className="home" id="inicio" ref={setReference}>
      <img className="home__show-control" src={showControl} alt="" />
      <img className="home__double-ring" src={doubleRing} alt="" />
      <img className="home__slice-ring" src={sliceRing} alt="" />
      <div className="home__info-wrapper">
        <div className="home__title-wrapper">
          <img className="home__dots" src={dots} alt="" />
          <h1 className="home__title">Soluciones técnicas a medida.</h1>
        </div>
        <br />
        <p className="home__description">
          Trabajamos interpretando a nuestros clientes para crear soluciones{" "}
          técnicas personalizadas según sus necesidades
        </p>
      </div>
    </section>
  );
};

export default Home;
