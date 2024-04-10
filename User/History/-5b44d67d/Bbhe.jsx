import React from "react";
import "./form.scss";
import { Input } from "../Input/Input";
import { useEffect } from "react";
import Select from "../Select/Select/Select";
import codes from "../../data/countries-code.json";
import { useState } from "react";
import { TextArea } from "../TextArea/TextArea";
import Loader from "../Loader/Loader";
import axios from "axios";
const Form = ({ isOpen, setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    country: "",
    city: "",
    cargo: "",
    email: "",
    flag: "",
    prefix: "",
    number: "",
    description: "",
  };
  const [input, setInput] = useState(initialState);

  const [error, setError] = useState(initialState);
  const [errorGeneral, seterrorGeneral] = useState(false);

  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(initialState);
    if (!loading) {
      setLoading(true);
      if (
        typeof input.name !== "string" ||
        typeof input.country !== "string" ||
        typeof input.city !== "string" ||
        typeof input.cargo !== "string" ||
        typeof input.prefix !== "string" ||
        typeof input.number !== "string" ||
        typeof input.description !== "string"
      ) {
        seterrorGeneral("Algo salió mal, por favor inténtalo de nuevo");
      } else if (input.name.length < 3) {
        setError({
          ...error,
          name: "Este campo debe tener al menos 3 caracteres",
        });
      } else if (input.country.length < 4) {
        setError({
          ...error,
          country: "Este campo debe tener al menos 4 caracteres",
        });
      } else if (input.city.length < 1) {
        setError({
          ...error,
          city: "Este campo debe tener al menos 1 caracter",
        });
      } else if (input.cargo.length < 3) {
        setError({
          ...error,
          cargo: "Este campo debe tener al menos 3 caracteres",
        });
      } else if (input.email.length < 8) {
        setError({
          ...error,
          email: "Este campo debe tener al menos 8 caracteres",
        });
      } else if (input.prefix.length < 2) {
        setError({
          ...error,
          prefix: "Este campo debe tener al menos 1 caracter",
        });
      } else if (input.number.length < 5) {
        setError({
          ...error,
          number: "Este campo debe tener al menos 5 caracteres",
        });
      } else if (input.description.length < 5) {
        setError({
          ...error,
          description: "Este campo debe tener al menos 5 caracteres",
        });
      } else {
        setError(false);
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API}/organizer/contact/new`,
            {
              name: input.name,
              country: input.country,
              city: input.city,
              position: input.cargo,
              mail: input.email,
              phone: {
                number: input.number,
                prefix: input.prefix,
                flag: input.flag,
              },
              descriptionEvent: input.description,
            }
          );
          if (response.status === 200) {
            setInput(initialState);
            setDone("¡Listo! Hemos enviado tu solicitud correctamente");
            setTimeout(() => {
              cancel();
            }, 3500);
          }
        } catch (error) {
          seterrorGeneral("Algo salió mal, por favor inténtalo de nuevo");
        }
      }
      setLoading(false);
    }
  };
  const cancel = (e) => {
    e?.preventDefault();
    const form = document.getElementById("form");
    setIsOpen(false);
    setError(false);
    form.classList.add("form--hidden");
    form.classList.remove("form--show");
    setLoading(false);
    setInput(initialState);
    setDone(false);
    setTimeout(() => {
      form.classList.remove("form--hidden");
    }, 500);
  };
  useEffect(() => {
    if (isOpen) {
      const form = document.getElementById("form");
      form.classList.remove("form--hidden");
      form.classList.add("form--show");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    if (e.target.name === "prefix") {
      let find = codes.find((c) => c.code.includes(e.target.value));
      setInput({
        ...input,
        flag: find?.flag,
        prefix: e.target.value.includes("+")
          ? e.target.value
          : `+${e.target.value}`,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div id="form" className="form">
      <div className="form__closing-area" onClick={cancel} />
      <div className="form__popup">
        <h2 className="form__popup__title">
          Llena el siguiente formulario, Te contactaremos a la brevedad.
        </h2>
        <button className="form__cancel" onClick={cancel}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.994448 0.995424C1.15097 0.83868 1.33686 0.714331 1.54148 0.629489C1.7461 0.544647 1.96544 0.500977 2.18695 0.500977C2.40846 0.500977 2.6278 0.544647 2.83242 0.629489C3.03704 0.714331 3.22293 0.83868 3.37945 0.995424L9.49945 7.11317L15.6194 0.995424C15.776 0.838823 15.962 0.7146 16.1666 0.629848C16.3712 0.545096 16.5905 0.501474 16.8119 0.501474C17.0334 0.501474 17.2527 0.545096 17.4573 0.629848C17.6619 0.7146 17.8478 0.838823 18.0044 0.995424C18.161 1.15203 18.2853 1.33794 18.37 1.54255C18.4548 1.74716 18.4984 1.96646 18.4984 2.18792C18.4984 2.40939 18.4548 2.62869 18.37 2.8333C18.2853 3.03791 18.161 3.22382 18.0044 3.38042L11.8867 9.50042L18.0044 15.6204C18.3207 15.9367 18.4984 16.3657 18.4984 16.8129C18.4984 17.2602 18.3207 17.6892 18.0044 18.0054C17.6882 18.3217 17.2592 18.4994 16.8119 18.4994C16.3647 18.4994 15.9357 18.3217 15.6194 18.0054L9.49945 11.8877L3.37945 18.0054C3.06318 18.3217 2.63422 18.4994 2.18695 18.4994C1.73967 18.4994 1.31072 18.3217 0.994448 18.0054C0.678177 17.6892 0.500498 17.2602 0.500498 16.8129C0.500498 16.3657 0.678177 15.9367 0.994448 15.6204L7.1122 9.50042L0.994448 3.38042C0.837703 3.2239 0.713354 3.03802 0.628512 2.8334C0.54367 2.62878 0.5 2.40944 0.5 2.18792C0.5 1.96641 0.54367 1.74707 0.628512 1.54245C0.713354 1.33783 0.837703 1.15195 0.994448 0.995424Z"
              fill="white"
            />
          </svg>
        </button>
        <form onSubmit={handleSubmit} className="form__form-wrapper">
          <Input
            onChange={handleChange}
            props={{
              name: "name",
              value: input.name,
              placeholder: "Nombre",
              type: "text",
              maxLength: "30",
            }}
            error={error.name}
          />
          <Input
            onChange={handleChange}
            props={{
              name: "country",
              value: input.country,
              placeholder: "Pais",
              type: "text",
              maxLength: "56",
            }}
            error={error?.country}
          />
          <Input
            onChange={handleChange}
            props={{
              name: "city",
              value: input.city,
              placeholder: "Ciudad",
              type: "text",
              maxLength: "58",
            }}
            error={error?.city}
          />
          <Input
            onChange={handleChange}
            props={{
              name: "cargo",
              value: input.cargo,
              placeholder: "Cargo",
              type: "text",
              maxLength: "30",
            }}
            error={error?.cargo}
          />
          <Input
            onChange={handleChange}
            props={{
              name: "email",
              value: input.email,
              placeholder: "Tu correo electrónico",
              type: "email",
              maxLength: "30",
            }}
            error={error?.email}
          />
          <div className="form__form-wrapper__phone">
            <Input
              onChange={handleChange}
              prefix={input.flag}
              props={{
                name: "prefix",
                value: input.prefix,
                placeholder: "+34",
                type: "tel",
                maxLength: "5",
              }}
              error={error?.prefix}
            />
            <Input
              onChange={handleChange}
              props={{
                name: "number",
                value: input.number,
                placeholder: "Numero de teléfono",
                type: "tel",
                maxLength: "20",
              }}
              error={error?.number}
            />
          </div>
          <Input
            onChange={handleChange}
            props={{
              name: "description",
              value: input.description,
              placeholder: "Describe tu local o evento",
              type: "text",
              maxLength: "200",
            }}
            error={error?.description}
          />
          {errorGeneral && <span className="form__error">{errorGeneral}</span>}
          {done && <span className="form__done">{done}</span>}

          <button className="form__submit btn btn--primary" type="submit">
            {loading ? <Loader /> : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
