import { Input } from "components";
import "./edit.scss";
import { formatDateNumber } from "utilities/format-date";
import { useState } from "react";
interface EditInterface {
  city: string;
  country: string;
  flag: string;
  date: string;
  show: string;
  availability: boolean;
  link: string;
  setIsOpen: (value: any) => void;
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

        <Input
          type="date"
          name="date"
          placeHolder={inputState.date}
          value={inputState.date}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="link"
          placeHolder={inputState.link}
          value={inputState.link}
          onChange={handleChange}
        />
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
