import { Link } from "react-router-dom";
import routes from "../../../models/routes";
import "./bzrp-tour-btn.scss";

const BzrpTourBtn = () => {
  return (
    <Link className="bzrp-tour-btn" to={routes.TOUR}>
      <span>BZRP TOUR</span>
    </Link>
  );
};

export default BzrpTourBtn;
