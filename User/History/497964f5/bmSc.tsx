import { Link } from "react-router-dom";
import "./home.scss";
import { ROUTES } from "../../models";
const Home = () => {
  return (
    <main className="home">
      <Link to={ROUTES.BZRP_TOUR} className="btn-primary">
        TOUR
      </Link>
      <button className="btn-primary">RECAP</button>
    </main>
  );
};

export default Home;
