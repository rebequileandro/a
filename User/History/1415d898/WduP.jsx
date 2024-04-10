import "./settings.scss";
import Header from "./components/Header/Header";

const Settings = () => {
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
          <h3 className="setting__item-label">{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Settings;
