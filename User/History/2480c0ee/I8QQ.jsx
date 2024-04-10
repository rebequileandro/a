import "./home.scss";
import dubbleRing from "assets/dubble_ring.svg";
const Home = () => {
  return (
    <section className="home">
      <img src={dubbleRing} alt="" />
      <div>
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
