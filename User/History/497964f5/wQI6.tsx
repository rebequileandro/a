import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="home__container">
        <Link to={ROUTES.BZRP_TOUR} className="btn-primary">
          TOUR
        </Link>
        <Link to={ROUTES.RECAP} className="btn-primary">
          RECAP
        </Link>
      </div>
    </main>
  );
};

export default Home;
