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
        <div>
          <a href={props.portada} target="_blank" rel="noopener noreferrer">
            <img
              className="recap-item__portada-image"
              src={props.portada}
              alt="postada"
            />
          </a>
          <button>
            <img src={editIcon} alt="editar" />
          </button>
        </div>
      </div>
      <div className="recap-item__underline" />
    </>
  );
};

export default Item;
