import axios from "axios";
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
    repeatPassword: "",
    rol: "organizador",
  };
  const [inputPassword, setInputPassword] = useState("password");
  const [error, setError] = useState(false);

  const [inputData, setInputData] = useState(initialState);

  const showPassword = () => {
    if (inputPassword === "password") {
      setInputPassword("text");
    } else {
      setInputPassword("password");
    }
  };
  const handleChange = (element) => {
    setInputData({
      ...inputData,
      [element.target.name]: element.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-owner");
    const response = await axios.post(
      `${process.env.REACT_APP_API}/organizer/register`
    );
    // form.reset();
  };

  return (
    <article className="form-section">
      <h2 className="form-section__title">Registra tu organizador</h2>
      <form className="form" id="form-owner" onSubmit={handleSubmit}>
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
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            onChange={handleChange}
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />

          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form__address-name">
          <legend>Datos de facturación</legend>

          <label htmlFor="provincia">Provincia</label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            required
            onChange={handleChange}
          />

          <label htmlFor="codigoPostal">Código postal</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            required
            onChange={handleChange}
          />

          <label htmlFor="commercialAddress">Dirección comercial</label>
          <input
            type="text"
            id="commercialAddress"
            name="commercialAddress"
            required
            onChange={handleChange}
          />
          <label htmlFor="nombreComercial">Nombre comercial</label>
          <input
            type="text"
            id="nombreComercial"
            name="nombreComercial"
            required
            onChange={handleChange}
          />
          <label htmlFor="tipoPersona">Tipo persona</label>
          <input
            type="text"
            id="tipoPersona"
            name="tipoPersona"
            required
            onChange={handleChange}
          />

          <label htmlFor="razónSocial">Razón social</label>
          <input
            type="text"
            id="razónSocial"
            name="razónSocial"
            required
            onChange={handleChange}
          />

          <label htmlFor="cuit">CUIT</label>
          <input
            type="number"
            id="cuit"
            name="cuit"
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="form__address-name">
          <legend>Contraseña provisoria</legend>

          <label htmlFor="password">Escriba una contraseña</label>
          <input
            type={inputPassword}
            id="password"
            name="password"
            required
            onChange={handleChange}
          />

          <label htmlFor="repeatPassword">Repita su contraseña</label>
          <input
            type={inputPassword}
            id="repeatPassword"
            name="repeatPassword"
            required
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={showPassword}
            className="btn-show-password"
          >
            {`${inputPassword === "password" ? "Ver" : "Ocultar"} contraseña`}
          </button>
        </fieldset>
        <span>ERROR</span>
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
