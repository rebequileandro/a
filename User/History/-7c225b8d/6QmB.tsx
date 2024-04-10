import { Input } from "components";
import { useState } from "react";
import "./edit-new-date.scss";
import { newDate } from "pages/BzrpTour/services";

interface NewDateInteface {
  setIsOpen: (value: boolean) => void;
}

const NewDate: React.FC<NewDateInteface> = (prop) => {
  const [inputState, setInputState] = useState({
    city: "",
    country: "",
    flag: "",
    date: "",
    show: "",
    availability: "",
    link: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const response = newDate(data)
  };
  return (
    <div className="edit-popup">
      <div
        className="edit-popup__close-overlay"
        onClick={() => prop.setIsOpen(false)}
      />
      <form className="edit-popup__container" onSubmit={handleSubmit}>
        <button
          type="reset"
          className="edit-popup__close"
          onClick={() => prop.setIsOpen(false)}
        >
          x
        </button>
        <h2 className="edit-popup__title">Nueva Fecha</h2>
        <label>
          Show:
          <Input
            type="text"
            name="show"
            placeHolder="Amnesia"
            value={inputState.show}
            onChange={handleChange}
          />
        </label>
        <label>
          Ciudad:
          <Input
            type="text"
            name="city"
            placeHolder="Ibiza"
            value={inputState.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Pais:
          <Input
            type="text"
            name="country"
            placeHolder="España"
            value={inputState.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Fecha:
          <Input
            type="date"
            name="date"
            placeHolder="11/11/2023"
            value={inputState.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Link Ticketera:
          <Input
            type="text"
            name="link"
            placeHolder="https://www.amnesia.es/3/promotor/ibizarrap-at-amnesia-"
            value={inputState.link}
            onChange={handleChange}
          />
        </label>
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

export default NewDate;
