import "./settings.scss";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { currentUser } from "redux/slices/user.slice";
import { Loader } from "components";
import { useState } from "react";
import OptionPopup from "components/OptionPopup/OptionPopup";

const Settings = () => {
  const user = useSelector(currentUser);
  const [loading, setLoading] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  // nombreCompleto: "",
  // nombreEmpresa: "",
  // email: "",
  // password: "",
  const items = [
    {
      name: "nombreCompleto",
      label: "Nombre completo",
      value: user.nombreCompleto,
    },
    {
      name: "nombreEmpresa",
      label: "Nombre de la empresa",
      value: user.nombreEmpresa,
    },
    {
      name: "subscription",
      label: "Suscripción",
      value: user.estadoSuscripcion,
    },
  ];

  return (
    <div className="settings">
      <Header />
      <div className="settings__item-container">
        {items.map((item) => (
          <div className="settings__item">
            <h3 className="settings__item-value">{item?.value}</h3>
            <span className="settings__item-label">{item.label}</span>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn--secondary">
        {loading ? <Loader /> : "Cerrar sesion"}
      </button>
      <OptionPopup setIsOpen={setIsOpenPopup} />
    </div>
  );
};

export default Settings;
