import React, { Fragment, useState } from "react";
import "./drinks.scss";
import Select from "../../components/Select/Select.jsx";
import AddBtn from "../../components/AddBtn/AddBtn";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useEffect } from "react";
import Item from "./Item/Item";
import FormBottle from "./Form/FormBottle";
import AddProduct from "./Form/AddProduct";
import FormEdit from "./Form/FormEdit";
import logoAll from "../../assets/gatoFachero.png";
const ENVIROMENT_OPTIONS = [
  { label: "Development", env: "https://backdevelop.shooza.co/api" },
  { label: "Production", env: "https://pretesting.shooza.co/api" },
  { label: "Qa", env: "https://backqa.shooza.co/api" },
  { label: "Stage", env: "https://backstage.shooza.co/api" },
  { label: "Demo", env: "https://backdemo.shooza.co/api" },
];

const Drinks = () => {
  const [input, setInput] = useState(false);
  const [option, setOption] = useState(false);
  const [allDrinks, setAllDrinks] = useState([]);
  const [allParties, setAllParties] = useState([]);
  const [searchParty, setSearchParty] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedEnv, setSelectedEnv] = useState("");

  const handleEnvChange = (event) => {
    setSelectedParty(null);
    setAllDrinks([]);
    setSelectedEnv(event.target.value);
  };
  const getAllDrinks = async () => {
    if (!selectedParty) return;
    if (selectedParty === "All") {
      try {
        const response = await axios.get(`${selectedEnv}/shooza/drink/all`);
        setAllDrinks(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `${selectedEnv}/organizer/drink/all/dashboard/${selectedParty._id}`
        );
        setAllDrinks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  async function getAllParties() {
    if (!selectedEnv) return;
    try {
      const response = await axios(`${selectedEnv}/partyuser/party/all`);
      setAllParties(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllParties();
  }, [selectedEnv]);

  useEffect(() => {
    getAllDrinks();
  }, [selectedParty]);

  const totalDB = [
    {
      title: "Tragos",
      total: allDrinks?.filter((d) => d.typeDrink === "drink").length,
    },
    {
      title: "Botellas",
      total: allDrinks?.filter((d) => d.typeDrink === "bottle").length,
    },
    {
      title: "Sin Alcohol",
      total: allDrinks?.filter((d) => d.typeDrink === "alcoholfree").length,
    },
  ];
  return (
    <Layout active={"drink"}>
      <div className="drink-wrapper">
        <div className="select-env-section">
          <h4>Entorno seleccionado:</h4>
          <select
            className="select"
            value={selectedEnv}
            onChange={handleEnvChange}
          >
            <option value="">None</option>
            {ENVIROMENT_OPTIONS.map((option) => (
              <option key={option.label} value={option.env}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {selectedEnv ? (
          <div className="party-search">
            <input
              type="text"
              placeholder="Search for a party..."
              value={searchParty}
              onChange={(e) => setSearchParty(e.target.value)}
            />
            <div className="party-cards">
              <div
                className="card-event-browse"
                onClick={() => setSelectedParty("All")}
              >
                <div className="card-event-browse__image--container">
                  <img
                    src={logoAll}
                    alt={"Todos"}
                    className={`card-event-browse__image ${
                      selectedParty === "All"
                        ? "card-event-browse__image__selected"
                        : ""
                    }`}
                    loading="lazy"
                  />
                  <h3 className="card-event-browse__title">Todos</h3>
                </div>
              </div>
              {allParties
                .filter((party) =>
                  party?.nameParty
                    .toLowerCase()
                    .includes(searchParty.toLowerCase())
                )
                .map((party) => (
                  <div
                    className="card-event-browse"
                    onClick={() => setSelectedParty(party)}
                    key={party._id}
                  >
                    <div className="card-event-browse__image--container">
                      <img
                        src={party?.imageParty}
                        alt={party?.nameParty}
                        className={`card-event-browse__image ${
                          party._id === selectedParty?._id
                            ? "card-event-browse__image__selected"
                            : ""
                        }`}
                        loading="lazy"
                      />
                      <h3 className="card-event-browse__title">
                        {party?.nameParty}
                      </h3>
                      <h5 className="card-event-browse__address">
                        {party?.addressParty}
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <p className="party-container__selectEnv-text">
            Por favor seleccione el entorno en el que desea crear la fiesta
          </p>
        )}
        {selectedParty ? (
          <div className="drinks">
            <div className="drinks__container">
              <div className="drinks__container__left">
                <Select
                  placeholder="Elige una categoría"
                  label="Bebidas"
                  onChange={setInput}
                  options={["bottle", "drink", "alcoholfree"]}
                  icon
                />
                <input
                  className="drinks__searchBar"
                  type="text"
                  placeholder="Search drinks..."
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />

                <ul className="drinks__container__left__list">
                  {allDrinks
                    ?.filter((d) => (input ? d.typeDrink === input : d))
                    ?.filter(
                      (product) =>
                        !searchProduct ||
                        product.nameDrink
                          .toLowerCase()
                          .includes(searchProduct.toLowerCase())
                    )
                    ?.map((e, i, arr) => (
                      <Fragment key={i}>
                        <Item data={e} setEdit={setOption} />
                        {i < arr.length - 1 && (
                          <div className="drinks__container__left__list__line" />
                        )}
                      </Fragment>
                    ))}
                </ul>
              </div>
              <div className="drinks__container__right">
                <h2 className="drinks__container__right__title">
                  Total Base de Datos - Bebidas
                </h2>
                <div className="drinks__container__right__total-drinks-wrapper">
                  {totalDB?.map((e) => (
                    <div
                      key={e.title}
                      className="drinks__container__right__total-drinks"
                    >
                      <h3 className="drinks__container__right__total-drinks__title">
                        {e.title}
                      </h3>
                      <h3 className="heading-primary--main heading-primary--rajdhani">
                        {e.total}
                      </h3>
                    </div>
                  ))}
                </div>
                {!option ? (
                  <div className="drinks__container__right__add-btns">
                    {/* <AddBtn
                      label="Agregar botella nueva"
                      onClick={() => setOption("bottle")}
                    /> */}
                    <AddBtn
                      label="Agregar producto"
                      onClick={() => setOption("addProduct")}
                    />
                  </div>
                ) : option === "bottle" ? (
                  <FormBottle
                    getAllDrinks={getAllDrinks}
                    setOption={setOption}
                    enviroment={selectedEnv}
                    selectedParty={selectedParty}
                  />
                ) : option === "addProduct" ? (
                  <AddProduct
                    getAllDrinks={getAllDrinks}
                    setOption={setOption}
                    enviroment={selectedEnv}
                    selectedParty={selectedParty}
                  />
                ) : (
                  <FormEdit
                    getAllDrinks={getAllDrinks}
                    setOption={setOption}
                    data={option}
                    enviroment={selectedEnv}
                    selectedParty={selectedParty}
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Drinks;
