import "./SignUp.scss";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import InputDiv from "../../components/InputDiv/InputDiv";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Lottie from "lottie-react";
import SelectDiv from "../../components/SelectDiv/SelectDiv";
import { TextField } from "@mui/material";
import Validate from "../../utils/validation";
import loadingAnimation from "../../assets/loading.json";
import { logInUser } from "../../redux/store/slices/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateSignUpForm from "./validateSignUpForm";

const initialState = {
  name: "",
  email: "",
  role: "fiestero",
  address: "",
  zipCode: "",
  province: "",
  cuit: "",
  person: "juridica",
  password: "",
  confirmPassword: "",
  birthday: "",
  tyc: false,
};

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState(initialState);
  const [inputErrors, setInputErrors] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const createSetState = (field) => (value) => {
    setSignUpData({ ...signUpData, [field]: value });
    setInputErrors({ ...inputErrors, [field]: "" });
  };

  const validateEmptyField = (field) =>
    !signUpData[field] ? "Por favor completa este campo." : "";

  const validate = (field) => {
    if (!signUpData[field]) {
      setInputErrors({
        ...inputErrors,
        [field]: "Por favor completa este campo",
      });
      return;
    }

    if (Validate[field]) {
      const message = Validate[field](signUpData);
      if (message) setInputErrors({ ...inputErrors, [field]: message });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateSignUpForm(
      signUpData,
      inputErrors,
      setInputErrors,
      validateEmptyField
    );

    if (validation) {
      setLoading(true);

      if (signUpData.role === "fiestero") {
        const rawResponse = await fetch(
          process.env.REACT_APP_API + "/register/fiestero",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: signUpData.name,
              email: signUpData.email,
              password: signUpData.password,
              rol: signUpData.role,
            }),
          }
        );

        const user = await rawResponse.json();

        if (user.success === false) {
          setInputErrors({ ...inputErrors, tyc: user.message });
          setLoading(false);
        } else {
          setLoading(false);
          dispatch(logInUser(user));
          navigate("/");
        }
      } else if (signUpData.role === "organizador") {
        const rawResponse = await fetch(
          process.env.REACT_APP_API + "/register/organizador",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: signUpData.name,
              email: signUpData.email,
              password: signUpData.password,
              rol: signUpData.role,
              provincia: signUpData.province,
              codigoPostal: signUpData.zipCode,
              commercialAddress: signUpData.address,
              cuit: signUpData.cuit,
              tipoPersona: signUpData.person,
              fechaNacimiento: `${signUpData.birthday.getDate()}/${signUpData.birthday.getMonth()}/${signUpData.birthday.getFullYear()}`,
            }),
          }
        );

        const user = await rawResponse.json();

        if (user.success === false) {
          setInputErrors({ ...inputErrors, tyc: user.message });
          setLoading(false);
        } else {
          setLoading(false);
          dispatch(logInUser(user));
          navigate("/");
        }
      }
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up-border">
        <div className="sign-up-content">
          <h1>Sign Up</h1>

          <form action="/">
            {/* NOMBRE COMPLETO */}
            <InputDiv
              inputProps={{
                type: "text",
                name: "signup_name",
                id: "signup_name",
                spellCheck: "false",
                value: signUpData.name,
              }}
              label="Nombre completo"
              setState={createSetState("name")}
              error={inputErrors.name}
              onBlur={() => validate("name")}
            />

            {/* EMAIL */}
            <InputDiv
              inputProps={{
                type: "email",
                name: "signup_email",
                id: "signup_email",
                spellCheck: "false",
                value: signUpData.email,
              }}
              label="Email"
              setState={createSetState("email")}
              error={inputErrors.email}
              onBlur={() => validate("email")}
            />

            {/* ROL */}
            <SelectDiv
              selectProps={{
                name: "signup_role",
                id: "signup_role",
                value: signUpData.role,
              }}
              label="Rol"
              setState={createSetState("role")}
              options={{
                fiestero: "Fiestero",
                organizador: "Organizador",
              }}
            />

            {signUpData.role === "organizador" && (
              <div className="organizador-inputs">
                {/* TIPO DE PERSONA */}
                <SelectDiv
                  selectProps={{
                    name: "signup_person",
                    id: "signup_person",
                    value: signUpData.person,
                  }}
                  label="Persona"
                  setState={createSetState("person")}
                  options={{
                    juridica: "Jurídica",
                    noJuridica: "No jurídica",
                  }}
                />

                {/* DIRECCIÓN */}
                <InputDiv
                  inputProps={{
                    type: "text",
                    name: "signup_address",
                    id: "signup_address",
                    spellCheck: "false",
                    value: signUpData.address,
                  }}
                  label="Dirección comercial"
                  setState={createSetState("address")}
                  error={inputErrors.address}
                  onBlur={() => validate("address")}
                />

                {/* CÓDIGO POSTAL */}
                <InputDiv
                  inputProps={{
                    type: "number",
                    name: "signup_zip_code",
                    id: "signup_zip_code",
                    spellCheck: "false",
                    value: signUpData.zipCode,
                  }}
                  label="Código postal"
                  setState={createSetState("zipCode")}
                  error={inputErrors.zipCode}
                  onBlur={() => validate("zipCode")}
                />

                {/* PROVINCIA */}
                <SelectDiv
                  selectProps={{
                    name: "signup_provincia",
                    id: "signup_provincia",
                    value: signUpData.province,
                  }}
                  label="Provincia"
                  setState={createSetState("province")}
                  options={{
                    "buenos-aires": "Buenos Aires",
                    "capital-federa": "Capital Federal",
                    catamarca: "Catamarca",
                    chaco: "Chaco",
                    chubut: "Chubut",
                    cordoba: "Córdoba",
                    corrientes: "Corrientes",
                    "entre-rios": "Entre Ríos",
                    formosa: "Formosa",
                    jujuy: "Jujuy",
                    "la-pampa": "La Pampa",
                    "la-rioja": "La Rioja",
                    mendoza: "Mendoza",
                    misiones: "Misiones",
                    neuquen: "Neuquén",
                    "rio-negro": "Río Negro",
                    salta: "Salta",
                    "san-juan": "San Juan",
                    "san-luis": "San Luis",
                    "santa-cruz": "Santa Cruz",
                    "santa-fe": "Santa Fe",
                    "santiago-del-estero": "Santiago del Estero",
                    "tierra-del-fuego": "Tierra del Fuego",
                    tucuman: "Tucumán",
                  }}
                />

                {/* CUIT */}
                <InputDiv
                  inputProps={{
                    type: "number",
                    name: "signup_cuit",
                    id: "signup_cuit",
                    spellCheck: "false",
                    value: signUpData.cuit,
                  }}
                  label="CUIT"
                  setState={createSetState("cuit")}
                  error={inputErrors.cuit}
                  onBlur={() => validate("cuit")}
                />
              </div>
            )}

            {/* BIRTHDAY */}
            <div
              className={`input-div datepicker ${
                inputErrors.birthday && "error"
              }`}
            >
              <label>Fecha de nacimiento</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  className="mui-datepicker"
                  value={signUpData.birthday}
                  onChange={(newDate) => {
                    setSignUpData({ ...signUpData, birthday: newDate });
                    setInputErrors({ ...inputErrors, birthday: "" });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: "dd/mm/aaaa",
                      }}
                    />
                  )}
                  disableFuture
                  inputFormat={"dd/MM/yyyy"}
                  minDate={new Date("1900-00-00")}
                />
              </LocalizationProvider>
              {inputErrors.birthday && (
                <p className="error">*{inputErrors.birthday}</p>
              )}
            </div>

            {/* PASSWORD */}
            <InputDiv
              inputProps={{
                type: "password",
                name: "signup_password",
                id: "signup_password",
                value: signUpData.password,
              }}
              label="Contraseña"
              setState={createSetState("password")}
              error={inputErrors.password}
              onBlur={() => validate("password")}
            />

            {/* REPEAT PASSWORD */}
            <InputDiv
              inputProps={{
                type: "password",
                name: "signup_confirm_password",
                id: "signup_confirm_password",
                value: signUpData.confirmPassword,
              }}
              label="Confirmar contraseña"
              setState={createSetState("confirmPassword")}
              error={inputErrors.confirmPassword}
              onBlur={() => validate("confirmPassword")}
            />

            {/* TÉRMINOS Y CONDICIONES */}
            <div className="check-input">
              <div className="input-wrapper">
                <div
                  className={signUpData.tyc ? "checkbox checked" : "checkbox"}
                  name="tyc"
                  onClick={() => {
                    setSignUpData({ ...signUpData, tyc: !signUpData.tyc });
                    setInputErrors({ ...inputErrors, tyc: "" });
                  }}
                ></div>
              </div>
              <label htmlFor="tyc">
                Acepto la{" "}
                <a href="/">constitución, políticas y condiciones de Shooza</a>
              </label>
            </div>
            {inputErrors.tyc && (
              <p className="check-input-error">*{inputErrors.tyc}</p>
            )}

            <div className="submit-wrapper">
              <input
                className={
                  loading ? "btn btn--primary loading" : "btn btn--primary"
                }
                type="submit"
                value="Aceptar"
                id="signup_submit"
                onClick={handleSubmit}
              />
              {loading && (
                <Lottie
                  animationData={loadingAnimation}
                  className="loading-animation"
                  loop={true}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
