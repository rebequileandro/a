import "./settings.scss";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { currentUser } from "redux/slices/user.slice";

const Settings = () => {
  const user = useSelector(currentUser);
  const [loading, setLoading] = useState(false);

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
      {items.map((item) => (
        <div className="settings__item">
          <h3 className="settings__item-value">{item?.value}</h3>
          <span className="settings__item-label">{item.label}</span>
        </div>
      ))}
      <button type="submit" className="btn btn--secondary">
        {loading ? <Loader /> : "Iniciar Sesión"}
      </button>
    </div>
  );
};

export default Settings;
