import React from "react";
import { useState } from "react";

export const OwnerForm = () => {
  const initialState = {
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    cuit: "",
    provincia: "",
    codigoPostal: "",
    commercialAddress: "",
    tipoPersona: "",
    razónSocial: "",
    nombreComercial: "",
    password: "",
    rol: "organizador",
  };
  const [inputPassword, setInputPassword] = useState("password");
  const [inputData, setInputData] = useState(initialState);

  const showPassword = () => {
    if (inputPassword === "password") {
      setInputPassword("text");
    } else {
      setInputPassword("password");
    }
  };
  const handleChange = (element) => {
    setInputPassword({
      ...inputData,
      [element.target.name]: element.target.value,
    });
  };
  return (
    <article className="form-section">
      <h2 className="form-section__title">Registra tu organizador</h2>
      <form className="form">
        <fieldset className="form__address-name">
          <legend>Datos personales</legend>

          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChange}
          />

          <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
          <input type="text" id="dateOfBirth" name="dateOfBirth" required />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Teléfono</label>
          <input type="tel" id="phone" name="phone" required />
        </fieldset>

        <fieldset className="form__address-name">
          <legend>Datos de facturación</legend>

          <label htmlFor="provincia">Provincia</label>
          <input type="text" id="provincia" name="provincia" required />

          <label htmlFor="codigoPostal">Código postal</label>
          <input type="text" id="codigoPostal" name="codigoPostal" required />

          <label htmlFor="commercialAddress">Dirección comercial</label>
          <input
            type="text"
            id="commercialAddress"
            name="commercialAddress"
            required
          />
          <label htmlFor="nombreComercial">Nombre comercial</label>
          <input
            type="text"
            id="nombreComercial"
            name="nombreComercial"
            required
          />
          <label htmlFor="tipoPersona">Tipo persona</label>
          <input type="text" id="tipoPersona" name="tipoPersona" required />

          <label htmlFor="razónSocial">Razón social</label>
          <input type="text" id="razónSocial" name="razónSocial" required />

          <label htmlFor="cuit">CUIT</label>
          <input type="number" id="cuit" name="cuit" required />
        </fieldset>

        <fieldset className="form__address-name">
          <legend>Contraseña provisoria</legend>

          <label htmlFor="password">Escriba una contraseña</label>
          <input type={inputPassword} id="password" name="password" required />

          <label htmlFor="password">Repita su contraseña</label>
          <input type={inputPassword} id="password" name="password" required />
          <button
            type="button"
            onClick={showPassword}
            className="btn-show-password"
          >
            {`${inputPassword === "password" ? "Ver" : "Ocultar"} contraseña`}
          </button>
        </fieldset>

        <div className="form__buttons-container">
          <button type="submit" className="btn-primary btn-primary--s">
            Registrar
          </button>
          <button type="reset" className="btn-secondary btn-secondary--s">
            Cancelar
          </button>
        </div>
      </form>
    </article>
  );
};
