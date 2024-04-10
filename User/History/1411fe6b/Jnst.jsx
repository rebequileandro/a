import "./MyAccount.scss";

import { Header } from "../../components/Header/Header";
import InputDiv from "../../components/InputDiv/InputDiv";
import Lottie from "lottie-react";
import Validate from "../../utils/validation";
import { getCurrentUser } from "../../redux/store/slices/user";
import loadingAnimation from "../../assets/loading.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const { REACT_APP_API } = process.env;

export default function MyAccount() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);

  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    newPassword: "",
  });

  const [inputErrors, setInputErrors] = useState({
    email: "",
    password: "",
    newPassword: "",
  });

  const createSetState = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
    setInputErrors({ ...inputErrors, [field]: "" });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const newInputErrors = { ...inputErrors };

    const emailValidation = Validate.email(formData);
    if (emailValidation) {
      
      newInputErrors.email = emailValidation;
    }

    if (!formData.oldPassword) {
      newInputErrors.oldPassword = "Ingresa tu contraseña";
    }

    const passwordValidation = Validate.password({
      password: formData.newPassword,
    });

    if (passwordValidation) {
      newInputErrors.newPassword = passwordValidation;
    }

    if (
      newInputErrors.email ||
      newInputErrors.newPassword ||
      newInputErrors.oldPassword
    ) {
      setInputErrors(newInputErrors);
      return;
    }

    // SUBMIT FORM
    (async () => {
      setLoading(true);

      try {
        const rawResponse = await fetch(
          REACT_APP_API + "/fiestero/setting/profile/" + (user._id || user.id),
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.newPassword,
              newPassword: formData.oldPassword,
            }),
          }
        );

        const response = await rawResponse.json();

        
        if (response.success === true || response.succes === true) {
          setLoading(false);
          setSuccess("Datos actualizados con éxito");
        } else {
          setInputErrors({ ...inputErrors, newPassword: response.message });
        }
      } catch (err) {
        setLoading(false);
        alert("Hubo un error de servidor", err);
      }
    })();
  };

  return (
    <div className="my-account">
      <Header backbutton={() => navigate("/ajustes")} />
      <div className="content">
        <h1>Mi cuenta</h1>
        {/* <h2 className="user-name">{user.name}</h2> */}

        <div className="user-data">
          <InputDiv
            label="Dirección de email: "
            setState={createSetState("email")}
            inputProps={{
              type: "email",
              value: formData.email,
              name: "user_email",
            }}
            error={inputErrors.email}
          />

          <div className="change-password">
            <InputDiv
              label="Cambiar contraseña: "
              setState={createSetState("oldPassword")}
              inputProps={{
                type: "password",
                value: formData.password,
                name: "user_old_password",
                placeholder: "Contraseña actual",
              }}
              error={inputErrors.password}
            />
            <InputDiv
              setState={createSetState("newPassword")}
              inputProps={{
                type: "password",
                value: formData.newPassword,
                name: "user_new_password",
                placeholder: "Nueva contraseña",
              }}
              error={inputErrors.newPassword}
            />
          </div>
        </div>
        <div className="submit-wrapper">
          <button
            type="submit"
            id="update_password_submit"
            className={
              loading ? "btn btn--primary loading" : "btn btn--primary"
            }
            onClick={handleSubmit}
          >
            Actualizar información
          </button>
          {loading && (
            <Lottie
              animationData={loadingAnimation}
              className="loading-animation"
              loop={true}
            />
          )}
        </div>
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}
