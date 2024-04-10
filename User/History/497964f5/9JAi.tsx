import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
const Home = () => {
  return (
    <main className="home">
      <Link to={ROUTES.BZRP_TOUR} className="btn-primary">
        TOUR
      </Link>
      <Link to={ROUTES.RECAP} className="btn-primary">
        RECAP
      </Link>
    </main>
  );
};

export default Home;
