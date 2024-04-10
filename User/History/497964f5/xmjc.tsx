import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
import { BzrpTourBtn, ExclusiveMaterialBtn } from "./components";
const Home: React.FC = () => {
  return (
    <main className="home">
      <h1>Elige una opción</h1>
      <div className="home__container">
        <ExclusiveMaterialBtn />
        <BzrpTourBtn />
      </div>
    </main>
  );
};

export default Home;
