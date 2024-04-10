import React, { Fragment, useEffect, useState } from "react";
import "./recap.scss";
import { LoaderScreen, SearchBar } from "components";
import { useNavigate } from "react-router-dom";
import { getRecap } from "./services/recap.services";
import Item from "./components/Item/Item";
import NewRecap from "./components/Edit-newRecap/NewRecap";

const Recap: React.FC = () => {
  const [loading, setloading] = useState<boolean>(true);
  const [allData, setAllData] = useState<[]>([]);
  const [newRecap, setNewRecap] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const getData = async () => {
    const recap = await getRecap();
    setAllData(recap);
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (newRecap) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [newRecap]);

  const test = () => {
    const da = allData?.map((element: any, i) =>
      Object.keys(element).map((year: any, idx: number) => {
        let fil = element[year].filter(
          (e: any) =>
            e.show.toLowerCase().includes("boom".toLocaleLowerCase()) ||
            e.country.includes("boom") ||
            e.city.includes("boom") ||
            e.date.includes("boom")
        );
        console.log("filtrado", fil);
        // ?.map((item: any, index: number) => item);
      })
    );
    return da;
  };
  console.log(test());
  return (
    <div className="recap">
      <SearchBar search={search} setSearch={setSearch} />
      {search.length > 0
        ? allData?.map((element: any, i) => (
            <Fragment key={i}>
              {Object.keys(element).map((year: any, idx: number) => (
                <div key={year + idx} className="recap__item-wrapper">
                  {element[year]
                    .filter((e: any) => {
                      if (
                        e.show.includes(search) ||
                        e.country.includes(search) ||
                        e.city.includes(search) ||
                        e.date.includes(search)
                      ) {
                        return e;
                      }
                    })
                    ?.map((item: any, index: number) => (
                      <Item
                        key={item.date + index}
                        {...item}
                        getData={getData}
                      />
                    ))}
                </div>
              ))}
            </Fragment>
          ))
        : allData?.length > 0 &&
          allData.map((element: any, i) => (
            <Fragment key={i}>
              {Object.keys(element).map((year: any, idx: number) => (
                <div key={year + idx} className="recap__item-wrapper">
                  <h2 className="recap__year">{year}</h2>
                  {element[year].map((item: any, index: number) => (
                    <Item key={item.date + index} {...item} getData={getData} />
                  ))}
                </div>
              ))}
            </Fragment>
          ))}
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
