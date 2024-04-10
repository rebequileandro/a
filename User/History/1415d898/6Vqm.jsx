import "./settings.scss";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { currentUser } from "redux/slices/user.slice";

const Settings = () => {
  const user = useSelector(currentUser);

  // nombreCompleto: "",
  // nombreEmpresa: "",
  // email: "",
  // password: "",
  const items = [
    {
      name: "nombreCompleto",
      label: "Nombre completo",
    },
    {
      name: "nombreEmpresa",
      label: "Nombre de la empresa",
    },
    {
      name: "subscription",
      label: "Suscripción",
    },
  ];

  return (
    <div className="settings">
      <Header />
      {items.map((item) => (
        <div className="settings__item">
          <h3 className="settings__item-label">{item.label}</h3>
          <span>{}</span>
        </div>
      ))}
    </div>
  );
};

export default Settings;
