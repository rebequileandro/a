import "./item.scss";
import { RecapInterface } from "models/interface.models";
import { formatDateNumber } from "utilities/format-date";
import editIcon from "assets/icon_edit.svg";
import { useState } from "react";
import EditRecap from "../Edit-newRecap/EditRecap";

const Item: React.FC<RecapInterface> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      <div className="recap-item">
        <div className="recap-item__left-container">
          <h2>{props?.show}</h2>
          <h4>
            {props.city} - {props.country}
          </h4>
          <p>Fecha: {formatDateNumber(props.date)}</p>
          <div className="recap-item__polaroid-container">
            {props.polaroid.map((image, index) => (
              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                key={`${image}${index}`}
              >
                <img
                  className="recap-item__polaroid"
                  src={image}
                  alt={`polaroid-${formatDateNumber(props.date)}-${index + 1}`}
                />
              </a>
            ))}
          </div>
          <button
            className="recap-item__edit-btn"
            title="Editar"
            onClick={() => setIsEdit(true)}
          >
            <img src={editIcon} alt="editar" />
          </button>
        </div>
        <a href={props.portada} target="_blank" rel="noopener noreferrer">
          <img
            className="recap-item__portada-image"
            src={props.portada}
            alt="postada"
          />
        </a>
      </div>
      <div className="recap-item__underline" />
      {isEdit && <EditRecap {...props} setIsOpen={setIsEdit} />}
    </>
  );
};

export default Item;
