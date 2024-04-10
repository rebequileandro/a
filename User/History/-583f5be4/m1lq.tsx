import { useState } from "react";
import { formatDateNumber } from "utilities/format-date";
import Edit from "../Edit-NewDate/Edit";
import "./item.scss";
import editIcon from "assets/icon_edit.svg";
import { ToggleSwitch } from "components";
import { NexDatesInterface } from "models";
import { editDate } from "pages/BzrpTour/services";

interface ItemInterface extends NexDatesInterface {
  getAllDates: () => void;
}
const Item: React.FC<ItemInterface> = (prop) => {
  const [checked, setChecked] = useState<boolean>(prop.availability);
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = async (elemente: boolean) => {
    setChecked(true);
    await editDate(
      {
        ...prop,
        availability: elemente,
      },
      prop._id
    );
  };
  console.log(prop);
  return (
    <>
      <div className="bzrp-tour-item">
        <div>
          <div className="bzrp-tour-item__location">
            <h2 className="heading-secondary">{prop.show}:</h2>
            <h3>
              {prop.city} - {prop.country}
            </h3>
          </div>
          <p>Fecha: {formatDateNumber(prop.date)}</p>
        </div>
        <div className="bzrp-tour-item__button-container">
          <button
            className="bzrp-tour-item__edit-btn"
            onClick={() => setIsEdit(true)}
            title="Editar"
          >
            <img src={editIcon} alt="editar" />
          </button>
          {checked ? (
            <a
              className="btn-primary bzrp-tour-item__btn"
              href={prop.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Disponible
            </a>
          ) : (
            <button
              disabled
              className="btn-primary bzrp-tour-item__btn bzrp-tour-item__btn--sold-out"
            >
              Agotado
            </button>
          )}
          <ToggleSwitch value={checked} setValue={handleChange} />
        </div>
      </div>
      <div className="bzrp-tour-item__underline" />
      {isEdit && (
        <Edit {...prop} setIsOpen={setIsEdit} getAllDates={prop.getAllDates} />
      )}
    </>
  );
};

export default Item;
