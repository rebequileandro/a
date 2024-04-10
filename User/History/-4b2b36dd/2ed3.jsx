import "./party.scss";
import React, { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import AddImage from "../../components/AddImage/AddImage";

import axios from "axios";
import Layout from "../../components/Layout/Layout";

const Party = () => {
  // CONSTANTS AND INITIAL STATES
  const amazonImagesForBars = [
    "https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+baja/barra+1.png",
    "https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+baja/barra+2.png",
    "https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+alta/barra+3.png",
    "https://s3.amazonaws.com/shooza.app.imagenes/discotecas+argentinas/groove/Planta+alta/barra+4.png",
  ];

  const initialStateInput = {
    // file: "",
    idOrganizer: "6322eb91034b3a5b276623be",
    category: "Techno",
    nameParty: "",
    addressParty: "",
    bartender: [],
    cashier: [],
    barras: [],
  };

  const initialStateStaff = {
    square: "",
    name: "",
    email: "",
  };

  const initialStateBars = {
    // barra: 0, barras.length + 1
    pista: "",
    nombre: "",
    puntoVenta: "",
    image: "",
  };

  // STATES FOR CONTROL THE DATA
  const [imageBanner, setImageBanner] = useState(null);

  const [newBar, setNewBar] = useState(initialStateBars);
  const [newCashier, setNewCashier] = useState(initialStateStaff);
  const [newBartender, setNewBartender] = useState(initialStateStaff);

  const [inputData, setInputData] = useState(initialStateInput);
  // console.log("DATA", inputData);

  // FUNCTIONS TO MANAGE THE INDPUT AND SUBMIT THE INFORMATION

  //This handle function is for the most of the inputs in the form, the other ones under this are for the states with arrays.
  const handleChangeInput = (e) => {
    e.preventDefault();
    setInputData((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
  };
  // This function is used to save the information about the current staff that is being created such as bartender or cashier based ond the rol.
  const handleCreateNewStaff = (e, rol) => {
    e.preventDefault();
    if (rol === "bartender") {
      setNewBartender((prevBartender) => {
        return {
          ...prevBartender,
          [e.target.name]: e.target.value,
        };
      });
    } else if (rol === "cashier") {
      setNewCashier((prevCashier) => {
        return {
          ...prevCashier,
          [e.target.name]: e.target.value,
        };
      });
    } else {
      setNewBar((prevBars) => {
        return {
          ...prevBars,
          // barra: inputData.barras.length + 1,
          image: amazonImagesForBars[Math.floor(Math.random() * 4)],
          [e.target.name]: e.target.value,
        };
      });
    }
  };
  //this onClick function is for the bartender's and cashier's form, after added one of them, this function will clean the input fields and going to include it in the input state
  const onClickAddNewStaff = (rol) => {
    //logic for bartender, we use the spread operator to preserve the prev information both at input and bartender.
    if (rol === "bartender") {
      setInputData((prevInputData) => {
        return {
          ...prevInputData,
          bartender: [...prevInputData.bartender, newBartender],
        };
      });
      setNewBartender(initialStateStaff);
    } else if (rol === "cashier") {
      //the same as before but with the cashier rol of bars
      setInputData((prevInputData) => {
        return {
          ...prevInputData,
          cashier: [...prevInputData.cashier, newCashier],
        };
      });
      setNewCashier(initialStateStaff);
    } else {
      setInputData((prevInputData) => {
        return {
          ...prevInputData,
          barras: [...prevInputData.barras, newBar],
        };
      });
      setNewBar(initialStateBars);
    }
  };
  // With this function we add the information recolected with this form and added to a FormData, on this way we can send the data about the party as a FormData, wich is a better option to the backend for receive the information instead of a json.
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const formAddParty = new FormData();
    formAddParty.append("file", imageBanner);
    formAddParty.append("category", inputData.category);
    formAddParty.append("nameParty", inputData.nameParty);
    formAddParty.append("idOrganizer", "6322eb91034b3a5b276623be");
    formAddParty.append("addressParty", inputData.addressParty);
    //SIDOSO PARA TESTEAR
    formAddParty.append("cashier", JSON.stringify(inputData.cashier[0]));
    formAddParty.append("bartender", JSON.stringify(inputData.bartender[0]));
    formAddParty.append("barras", JSON.stringify({ barras: inputData.barras }));
    console.log("InputData", inputData);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/organizer/party/add`,
        formAddParty,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("RESPONSE", response);
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
    }
    setInputData(initialStateInput);
  };
  //This is just to reset the form
  const handleCancelForm = () => {
    setInputData(initialStateInput);
  };

  return (
    <Layout active={"party"}>
      <section className="party-container">
        <section className="form-section">
          <h2 className="form-section__title">Registra tu discoteca</h2>

          <form className="form">
            {/* NOMBRE Y DIRECCION */}
            <fieldset className="form__address-name">
              <legend>Nombre y dirección de la discoteca</legend>

              <label htmlFor="nameParty">Nombre (así se vera en la app)</label>
              <input
                type="text"
                id="nameParty"
                name="nameParty"
                value={inputData.nameParty}
                onChange={handleChangeInput}
              />

              <label htmlFor="addressParty">Direccion comercial</label>
              <input
                type="text"
                id="addressParty"
                name="addressParty"
                value={inputData.addressParty}
                onChange={handleChangeInput}
              />
            </fieldset>

            {/* CATEGORIA */}
            <fieldset className="form__category">
              <legend>Categoría</legend>

              <input
                type="radio"
                id="cachengue"
                value="Cachengue"
                name="category"
                onChange={handleChangeInput}
              />
              <label htmlFor="cachengue">Cachengue</label>

              <input
                type="radio"
                id="cumbia"
                value="Cumbia"
                name="category"
                onChange={handleChangeInput}
              />
              <label htmlFor="cumbia">Cumbia</label>

              <input
                type="radio"
                id="techHouse"
                name="category"
                value="Tech House"
                onChange={handleChangeInput}
              />
              <label htmlFor="techHouse">Tech House</label>

              <input
                type="radio"
                id="hipHop"
                name="category"
                value="Hip Hop"
                onChange={handleChangeInput}
              />
              <label htmlFor="hipHop">Hip Hop</label>

              <input
                type="radio"
                id="rock"
                name="category"
                value="Rock"
                onChange={handleChangeInput}
              />
              <label htmlFor="rock">Rock</label>

              <input
                type="radio"
                id="techno"
                name="category"
                value="Techno"
                onChange={handleChangeInput}
              />
              <label htmlFor="techno">Techno</label>

              <input
                type="radio"
                id="pride"
                name="category"
                value="Pride"
                onChange={handleChangeInput}
              />
              <label htmlFor="pride">Pride</label>

              <input
                type="radio"
                id="pop"
                name="category"
                value="Pop"
                onChange={handleChangeInput}
              />
              <label htmlFor="pop">Pop</label>

              <input
                type="radio"
                id="retro"
                name="category"
                value="80's"
                onChange={handleChangeInput}
              />
              <label htmlFor="retro">80's</label>
            </fieldset>

            {/* BARRAS INFORMATION  */}
            <fieldset className="form__create-bars">
              <legend>{`Barra ${inputData.barras.length + 1}`}</legend>

              <label htmlFor="nombre-barra">{`Barra ${
                inputData.barras.length + 1
              }`}</label>
              <div className="form__create-bars__data">
                <label htmlFor="nombre-barra">Nombre barra</label>
                <input
                  type="text"
                  id="nombre-barra"
                  name="nombre"
                  value={newBar.nombre}
                  placeholder="Nombre de la barra"
                  onChange={(e) => handleCreateNewStaff(e, "barras")}
                />

                <label htmlFor="puntoVenta-barra">Punto de venta:</label>
                <input
                  type="text"
                  id="puntoVenta-barra"
                  name="puntoVenta"
                  placeholder="Número ID"
                  value={newBar.puntoVenta}
                  onChange={(e) => handleCreateNewStaff(e, "barras")}
                />

                <label htmlFor="pista-barra">Pista:</label>
                <input
                  type="text"
                  id="pista-barra"
                  name="pista"
                  placeholder="Ej: Planta Baja"
                  value={newBar.pista}
                  onChange={(e) => handleCreateNewStaff(e, "barras")}
                />
              </div>
              <button
                className="btn-primary btn-primary--s"
                type="button"
                onClick={() => onClickAddNewStaff("barras")}
              >
                Agregar Barra
              </button>
            </fieldset>

            {/* FORM BARTENDER  */}
            <fieldset className="form__bartender">
              <legend>Bartender de las barras:</legend>

              <label htmlFor="email-bartender">Email</label>
              <input
                type="text"
                id="email-bartender"
                name="email"
                value={newBartender.email}
                onChange={(e) => handleCreateNewStaff(e, "bartender")}
              />

              <label htmlFor="name-bartender">Nombre</label>
              <input
                type="text"
                id="name-bartender"
                name="name"
                value={newBartender.name}
                onChange={(e) => handleCreateNewStaff(e, "bartender")}
              />

              <label htmlFor="square-bartender">Barra de trabajo</label>
              <input
                type="text"
                id="square-bartender"
                name="square"
                value={newBartender.square}
                onChange={(e) => handleCreateNewStaff(e, "bartender")}
              />

              <button
                className="btn-primary btn-primary--s"
                type="button"
                onClick={() => onClickAddNewStaff("bartender")}
              >
                Agregar Bartender
              </button>
            </fieldset>

            {/* FORM CASHIER  */}
            <fieldset className="form__cashier">
              <legend>Cashier de las barras:</legend>

              <label htmlFor="email-cashier">Email</label>
              <input
                type="text"
                id="email-cashier"
                name="email"
                value={newCashier.email}
                onChange={(e) => handleCreateNewStaff(e, "cashier")}
              />

              <label htmlFor="name-cashier">Nombre</label>
              <input
                type="text"
                id="name-cashier"
                name="name"
                value={newCashier.name}
                onChange={(e) => handleCreateNewStaff(e, "cashier")}
              />

              <label htmlFor="square-cashier">Barra en la que trabaja</label>
              <input
                type="text"
                id="square-cashier"
                name="square"
                value={newCashier.square}
                onChange={(e) => handleCreateNewStaff(e, "cashier")}
              />

              <button
                className="btn-primary btn-primary--s"
                type="button"
                onClick={() => onClickAddNewStaff("cashier")}
              >
                Agregar Cajero
              </button>
            </fieldset>

            {/* AGREGAR IMAGEN DE BOLICHE  */}
            <p>Sube una imagen de tu discoteca!</p>
            <div>
              <AddImage setState={setImageBanner} />
            </div>

            {/* BOTONES PARA LIMPIAR FORMULARIO O ENVIAR LA INFORMACION  */}
            <div className="form__buttons-container">
              <button
                type="button"
                className="btn-primary btn-primary--s"
                onClick={(e) => onSubmitForm(e)}
              >
                {" "}
                Registrar Discoteca{" "}
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="btn-primary btn-primary--s"
              >
                {" "}
                Cancelar registro{" "}
              </button>
            </div>
          </form>
        </section>
      </section>
    </Layout>
  );
};

export default Party;

//number used to deploy the options inside the select of how many bars the disco has. Also, under the number of bars are other constant wich use the number to create an array with this cantity of elements
// const NUMBER_OF_BARS = 8;
// const arrayOfBarsAvailables = [...Array(NUMBER_OF_BARS)];
/* BARRAS  SELECT */
/* <fieldset className="form__select-bars">
            <legend>¿Con cuantas barras cuenta tu discoteca?</legend>
            <select name="barSelect" id="number-bars">
              {arrayOfBarsAvailables.map((_, index) => (
                <option key={`option-${index + 1}`} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </fieldset> */
