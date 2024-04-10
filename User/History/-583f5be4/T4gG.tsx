import { useState } from "react";
import { formatDateNumber } from "utilities/format-date";
import Edit from "../Edit/Edit";
import "./item.scss";
import editIcon from "assets/icon_edit.svg";
import { ToggleSwitch } from "components";
interface ItemInterface {
  city: string;
  country: string;
  flag: string;
  date: string;
  show: string;
  availability: boolean;
  link: string;
}
const Item: React.FC<ItemInterface> = (prop) => {
  const [checked, setChecked] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState(false);
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
          <p>{formatDateNumber(prop.date)}</p>
        </div>
        <div className="bzrp-tour-item__button-container">
          <button
            className="bzrp-tour-item__edit-btn"
            onClick={() => setIsEdit(true)}
          >
            <img src={editIcon} alt="editar" />
          </button>
          <a
            className={`btn-primary bzrp-tour-item__btn ${
              !checked && "bzrp-tour-item__btn--sold-out"
            }`}
            href={prop.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver enlace
          </a>
          <ToggleSwitch />
        </div>
      </div>
      <div className="bzrp-tour-item__underline" />
      {isEdit && <Edit {...prop} setIsOpen={setIsEdit} />}
    </>
  );
};

export default Item;
