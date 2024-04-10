import React, { Fragment, useEffect, useState } from "react";
import "./recap.scss";
import { BackButton, LoaderScreen } from "components";
import { ROUTES } from "models";
import { useNavigate } from "react-router-dom";
import { getRecap } from "./services/recap.services";
import Item from "./components/Item/Item";
import NewRecap from "./components/Edit-newRecap/NewRecap";

const Recap: React.FC = () => {
  const [loading, setloading] = useState<boolean>(true);
  const [allData, setAllData] = useState<[]>([]);
  const [newRecap, setNewRecap] = useState<boolean>(false);

  const navigate = useNavigate();
  const getData = async () => {
    const recap = await getRecap();
    setAllData(recap);
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="recap">
      <BackButton onClick={() => navigate(ROUTES.HOME)} />
      {/* {allData.length &&
        allData.map((element: any) =>
          Object.keys(element).map((year: any) => (
            <div key={year}>
              <p>{year}</p>
              {element[year].map((item: any) => (
                <Item key={item._id} {...item} />
              ))}
            </div>
          ))
        )} */}
      {allData?.length > 0 &&
        allData.map((element: any) =>
          Object.keys(element).map((year: any) => (
            <div key={year} className="recap__item-wrapper">
              <h2 className="recap__year">{year}</h2>
              {element[year].map((item: any) => (
                <Item key={item.date} {...item} getData={getData} />
              ))}
            </div>
          ))
        )}
      {!loading && !allData?.length && (
        <span className="bzrp-tour__no-dates">
          No se encontraron fechas por el momento, puedes añadir nuevas con{" "}
          <br />
          el botón "Agregar fecha +"
        </span>
      )}
      <button
        className="btn-primary recap__btn"
        onClick={() => setNewRecap(true)}
      >
        Agregar Fecha +
      </button>
      {loading && <LoaderScreen />}
      {newRecap && <NewRecap setIsOpen={setNewRecap} getData={getData} />}
    </div>
  );
};

export default Recap;
