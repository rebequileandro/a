import "./bzrp-tour.scss";
import data from "../data";
import Item from "./conponents/Item/Item";
import { BackButton } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "models";
import { useState } from "react";
import NewDate from "./conponents/Edit-NewDate/NewDate";

const BzrpTour: React.FC = () => {
  const navigate = useNavigate();
  const [newDate, setNewDate] = useState<boolean>(false);
  return (
    <main className="bzrp-tour">
      <BackButton onClick={() => navigate(ROUTES.HOME)} />
      {data.nextDates.map((element, index) => (
        <Item key={element.date + index} {...element} />
      ))}
      <button
        className="btn-primary bzrp-tour__btn"
        onClick={() => setNewDate(true)}
      >
        Agregar Fecha +
      </button>
      {newDate && <NewDate setIsOpen={setNewDate} />}
    </main>
  );
};

export default BzrpTour;
