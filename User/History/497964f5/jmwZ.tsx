import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
import BzrpTourBtn from "./components/Bzrp-tour/BzrpTourBtn";
const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="home__container">
        <BzrpTourBtn />
        <Link to={ROUTES.RECAP} className="btn-primary">
          RECAP
        </Link>
      </div>
    </main>
  );
};

export default Home;
