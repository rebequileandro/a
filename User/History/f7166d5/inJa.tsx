import "./bzrp-tour.scss";
import data from "../data";
import Item from "./conponents/Item/Item";
import { BackButton } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "models";

const BzrpTour: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main className="bzrp-tour">
      <BackButton onClick={() => navigate(ROUTES.HOME)} />
      {data.nextDates.map((element, index) => (
        <Item key={element.date + index} {...element} />
      ))}
      <button className="btn-primary bzrp-tour__btn">Agregar Fecha +</button>
    </main>
  );
};

export default BzrpTour;
