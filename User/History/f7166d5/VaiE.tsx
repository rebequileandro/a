import "./bzrp-tour.scss";
import data from "../data";
import Item from "./conponents/Item/Item";
import { BackButton } from "components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "models";
import { useEffect, useState } from "react";
import NewDate from "./conponents/Edit-NewDate/NewDate";
import { getAllDates } from "./services/bzrpTour.services";

const BzrpTour: React.FC = () => {
  const navigate = useNavigate();
  const [allDates, setAllDates] = useState<[]>();
  const [newDate, setNewDate] = useState<boolean>(false);

  useEffect(() => {
    const response = getAllDates();
    console.log(response);
  }, []);

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
