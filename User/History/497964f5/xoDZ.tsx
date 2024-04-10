import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
import { BzrpTourBtn, ExclusiveMaterialBtn } from "./components";
const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="home__container">
        <BzrpTourBtn />
        <ExclusiveMaterialBtn />
      </div>
    </main>
  );
};

export default Home;
