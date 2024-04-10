import "./item.scss";
import { RecapInterface } from "models/interface.models";
import { formatDateNumber } from "utilities/format-date";
import editIcon from "assets/icon_edit.svg";

const Item: React.FC<RecapInterface> = (props) => {
  return (
    <>
      <div className="recap-item">
        <div className="recap-item__left-container">
          <h3>
            {props.city} - {props.country}
          </h3>
          <p>Fecha: {formatDateNumber(props.date)}</p>
          <div>
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
        </div>
        <div className="recap-item__right-container">
          <button className="recap-item__edit-btn">
            <img src={editIcon} alt="editar" />
          </button>
          <a href={props.portada} target="_blank" rel="noopener noreferrer">
            <img
              className="recap-item__portada-image"
              src={props.portada}
              alt="postada"
            />
          </a>
        </div>
      </div>
      <div className="recap-item__underline" />
    </>
  );
};

export default Item;
