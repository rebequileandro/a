import "./bzrp-tour.scss";
import data from "../data";
import Item from "./conponents/Item/Item";
import { BackButton, LoaderScreen, SearchBar } from "components";
import { useNavigate } from "react-router-dom";
import { NexDatesInterface, ROUTES } from "models";
import { useEffect, useState } from "react";
import NewDate from "./conponents/Edit-NewDate/NewDate";
import { getAllDates } from "./services/bzrpTour.services";

const BzrpTour: React.FC = () => {
  const [allDates, setAllDates] = useState<NexDatesInterface[]>();
  const [loading, setloading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const [newDate, setNewDate] = useState<boolean>(false);
  const getData = async () => {
    const response: any = await getAllDates();
    if (response.status === 200 && response.data.data.length) {
      setAllDates(response.data.data);
    }
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="bzrp-tour">
      <SearchBar search={search} setSearch={setSearch} />

      {search.length > 0
        ? allDates
            ?.filter(
              (e) =>
                e.show.includes(search) ||
                e.country.includes(search) ||
                e.city.includes(search) ||
                e.date.includes(search)
            )
            .map((element) => (
              <Item key={element._id} {...element} getAllDates={getData} />
            ))
        : allDates?.map((element) => (
            <Item key={element._id} {...element} getAllDates={getData} />
          ))}
      {!loading && !allDates && (
        <span className="bzrp-tour__no-dates">
          No se encontraron fechas por el momento, puedes añadir nuevas con{" "}
          <br />
          el botón "Agregar fecha +"
        </span>
      )}
      {loading && <LoaderScreen />}
      <button
        className="btn-primary bzrp-tour__btn"
        onClick={() => setNewDate(true)}
      >
        Agregar Fecha +
      </button>
      {newDate && <NewDate getData={getData} setIsOpen={setNewDate} />}
    </main>
  );
};

export default BzrpTour;
