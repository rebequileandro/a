import "./settings.scss";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, updateUser } from "redux/slices/user.slice";
import { Loader } from "components";
import { useEffect, useState } from "react";
import OptionPopup from "components/OptionPopup/OptionPopup";
import { getUser } from "./services/settings.services";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const [loading, setLoading] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
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
  const logOut = () => {
    setLoading(true);
    setIsOpenPopup(false);
    document.cookie = "";
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const result = await getUser(user._id);
      dispatch(updateUser(result.data));
      // console.log(result.data);
    })();
  }, []);

  return (
    <div className="settings">
      <Header />
      <div className="settings__item-container">
        {items.map((item) => (
          <div className="settings__item" key={item.label}>
            <h3 className="settings__item-value">{item?.value}</h3>
            <span className="settings__item-label">{item.label}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn--secondary"
        onClick={() => setIsOpenPopup(true)}
      >
        {loading ? <Loader /> : "Cerrar sesión"}
      </button>
      <OptionPopup
        setIsOpen={setIsOpenPopup}
        isOpen={isOpenPopup}
        title="¿Quieres cerrar sesión?"
        options={{
          btnA: "Cancelar",
          onClickA: setIsOpenPopup,
          btnB: "Aceptar",
          onClickB: logOut,
        }}
      />
    </div>
  );
};

export default Settings;
