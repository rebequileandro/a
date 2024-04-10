import "./party.scss";
import React, { useContext, useState } from "react";

import { OwnerForm } from "./components/OwnerForm";
import Layout from "../../components/Layout/Layout";
import NewPartyForm from "./components/NewPartyForm";
import CreateStaffForm from "./components/CreateStaffForm";

import InformationVisualized from "./components/InformationVisualized";
import formContext from "../../context/Form/FormContext";

const ENVIROMENT_OPTIONS = [
  { label: "Development", env: "https://backdevelop2.shooza.co/api" },
  { label: "Production", env: "https://pretesting.shooza.co/api" },
  { label: "Qa", env: "https://backqa.shooza.co/api" },
  { label: "Stage", env: "https://backstage.shooza.co/api" },
  { label: "Demo", env: "https://backdemo.shooza.co/api" },
];

const Party = () => {
  const { stepSlide } = useContext(formContext);
  const [selectedEnv, setSelectedEnv] = useState("");

  const handleEnvChange = (event) => {
    setSelectedEnv(event.target.value);
  };
  return (
    <Layout active={"party"}>
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
      {/* party-container contiene la vista y el slide de los forms */}
      <section className="party-container">
        {/* DEPENDIENDO LOS PASOS CAMBIA DE SECCION  */}
        {selectedEnv ? (
          <>
            {stepSlide === 1 ? (
              <OwnerForm enviroment={selectedEnv} />
            ) : stepSlide === 2 ? (
              <NewPartyForm enviroment={selectedEnv} />
            ) : (
              <CreateStaffForm enviroment={selectedEnv} />
            )}
            <InformationVisualized />
          </>
        ) : (
          <p className="party-container__selectEnv-text">
            Por favor seleccione el entorno en el que desea crear la fiesta
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Party;
