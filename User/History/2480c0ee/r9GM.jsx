import "./home.scss";
import doubleRing from "assets/double_ring.svg";
import showControl from "assets/show-control.svg";
import sliceRing from "assets/slice-ring.svg";
import dots from "assets/dots1.svg";
const Home = () => {
  return (
    <section className="home">
      <img className="home__show-control" src={showControl} alt="" />
      <img className="home__double-ring" src={doubleRing} alt="" />
      <img className="home__slice-ring" src={sliceRing} alt="" />
      <div>
        <img className="home__dots" src={dots} alt="" />
        <h1 className="home__title">Soluciones técnicas a medida.</h1>
        <br />
        <p className="home__description">
          Trabajamos interpretando a nuestros clientes para crear soluciones{" "}
          <br />
          técnicas personalizadas según sus necesidades
        </p>
      </div>
    </section>
  );
};

export default Home;
