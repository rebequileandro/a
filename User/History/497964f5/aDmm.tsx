import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
import { BzrpTourBtn, ExclusiveMaterialBtn } from "./components";
const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="home__container">
        <ExclusiveMaterialBtn />
        <BzrpTourBtn />
      </div>
    </main>
  );
};

export default Home;
