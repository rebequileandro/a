import { Input, Loader, Select } from "components";
import "./edit-new-date.scss";
import { formatDateNumber } from "utilities/format-date";
import { useEffect, useState } from "react";
import countries from "utilities/countries-code.json";
import { NexDatesInterface } from "models";
import { deleteDate, editDate } from "pages/BzrpTour/services";

interface EditInterface extends NexDatesInterface {
  setIsOpen: (value: any) => void;
  getAllDates: () => void;
}

const Edit: React.FC<EditInterface> = (prop) => {
  const [error, setError] = useState<string>();
  const [done, setDone] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

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
  const removeDate = async () => {
    const response = window.confirm(
      `¿Quieres eliminar la fecha del: ${formatDateNumber(
        inputState.date
      )}? Estos cambios son permanentes y no podrás volver atrás`
    );
    if (response) {
      setLoading(true);
      const res: any = await deleteDate(prop._id);
      if (res.status === 200) {
        prop.getAllDates();
        prop.setIsOpen(false);
      } else {
        setError("No se pudo eliminar la fecha, inténtalo de nuevo");
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    setDone("");
    setError("");
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const response: any = await editDate(inputState, prop._id);
    if (response.status === 200) {
      prop.getAllDates();
      setDone("Fecha actualizada con éxito");
    } else {
      setError(
        "Algo salió mal al intentar modificar la fecha, inténtalo de nuevo"
      );
    }
    setLoading(false);
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
        <h2 className="edit-popup__title">
          {inputState.show} - {formatDateNumber(inputState.date)}
        </h2>
        <label>
          Show:
          <Input
            maxlength="40"
            type="text"
            name="show"
            placeholder={inputState.show}
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
        <button
          type="button"
          className="edit-popup__delete-date"
          onClick={() => removeDate()}
        >
          Eliminar Fecha
        </button>
        {error && <span className="edit-popup__error">* {error} *</span>}
        {done && <span className="edit-popup__done">{done}</span>}
        <div className="edit-popup__buttons-wrapper">
          <button
            type="reset"
            className="btn-primary"
            onClick={() => prop.setIsOpen(false)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-primary ">
            {loading ? <Loader /> : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
