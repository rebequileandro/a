import routes from "../../../models/routes";
import "./bzrp-tour-btn.scss";

const BzrpTourBtn = () => {
  return (
    <NavLink className={""} to={routes.TOUR}>
      BzrpTourBtn
    </NavLink>
  );
};

export default BzrpTourBtn;
