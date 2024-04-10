import { Input, Select } from "components";
import "./edit-new-date.scss";
import { formatDateNumber } from "utilities/format-date";
import { useEffect, useState } from "react";
import countries from "utilities/countries-code.json";
import { NexDatesInterface } from "models";

interface EditInterface extends NexDatesInterface {
  setIsOpen: (value: any) => void;
  getAllDates: () => void;
}

const Edit: React.FC<EditInterface> = (prop) => {
  const [inputState, setInputState] = useState({
    city: prop.city,
    country: prop.country,
    flag: prop.flag,
    date: prop.date,
    show: prop.show,
    availability: prop.availability,
    link: prop.link,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const deletDate = () => {
    const response = window.confirm(
      `¿Quieres eliminar la fecha del: ${formatDateNumber(
        inputState.date
      )}? Estos cambios son permanentes y no podrás volver atrás`
    );
    if (response) {
      prop.setIsOpen(false);
    }
  };
  useEffect(() => {
    const flag = countries.filter((e) =>
      e.country
        .toLocaleLowerCase()
        .includes(inputState.country.toLocaleLowerCase())
    )[0];
    setInputState({
      ...inputState,
      flag: flag?.flag,
    });
  }, [inputState.country]);
  return (
    <div className="edit-popup">
      <div
        className="edit-popup__close-overlay"
        onClick={() => prop.setIsOpen(false)}
      />
      <form className="edit-popup__container">
        <button
          type="reset"
          className="edit-popup__close"
          onClick={() => prop.setIsOpen(false)}
        >
          x
        </button>
        <h2 className="edit-popup__title">
          {inputState.show} - {formatDateNumber(inputState.date)}
        </h2>
        <label>
          Show:
          <Input
            type="text"
            name="show"
            placeHolder={inputState.show}
            value={inputState.show}
            onChange={handleChange}
          />
        </label>
        <label>
          Ciudad:
          <Input
            type="text"
            name="city"
            placeHolder={inputState.city}
            value={inputState.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Pais:
          <Input
            type="text"
            name="country"
            placeHolder={inputState.country}
            value={inputState.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Bandera:
          <Select
            name="flag"
            value={inputState.flag}
            onChange={handleChange}
            option={countries.map((c) => {
              return {
                value: c.flag,
              };
            })}
          />
        </label>
        <label>
          Fecha:
          <Input
            type="date"
            name="date"
            placeHolder={inputState.date}
            value={inputState.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Link Ticketera:
          <Input
            type="text"
            name="link"
            placeHolder={inputState.link}
            value={inputState.link}
            onChange={handleChange}
          />
        </label>
        <button className="edit-popup__delete-date" onClick={() => deletDate()}>
          Eliminar Fecha
        </button>
        <div className="edit-popup__buttons-wrapper">
          <button
            type="reset"
            className="btn-primary"
            onClick={() => prop.setIsOpen(false)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-primary ">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
