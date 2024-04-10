import "./item.scss";
import { RecapInterface } from "models/interface.models";
import { formatDateNumber } from "utilities/format-date";
import editIcon from "assets/icon_edit.svg";
import { useEffect, useState } from "react";
import EditRecap from "../Edit-newRecap/EditRecap";

interface ItemRecapIterface extends RecapInterface {
  getData: () => void;
}
const Item: React.FC<ItemRecapIterface> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  useEffect(() => {
    if (isEdit) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isEdit]);
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
              <img
                className="recap-item__polaroid"
                src={image}
                alt={`polaroid-${formatDateNumber(props.date)}-${index + 1}`}
              />
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
        <img
          className="recap-item__portada-image"
          src={props.portada}
          alt="postada"
        />
      </div>
      <div className="recap-item__underline" />
      {isEdit && (
        <EditRecap {...props} setIsOpen={setIsEdit} getData={props.getData} />
      )}
    </>
  );
};

export default Item;
