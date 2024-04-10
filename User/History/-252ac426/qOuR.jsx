import "./Delete.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import warning from "../../../../assets/icons/error.svg";
export const Delete = ({ setIsOpen, isOpen, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    // dispatch(editParty({ statusParty: false }, id)).then((response) => {
    //   if (response.status === 200) {
    //     setIsOpen(false);
    //     dispatch(fetchParty());
    //     navigate("/");
    //   } else {
    //     alert("Ha ocurrido algo inesperado, inténtalo de nuevo.");
    //   }
    // });
    setIsOpen(false)
  };

  return (
    <div className={`overlay-delete ${isOpen ? "show-overlay" : ''}`}>
        <div className={`popup-wrapper ${isOpen ? "show" : "no-show"}`}>
            <div className="delete-popup">
                <img className="icon" src={warning} alt="warning"/>
                <div className="title">
                <h2>¿por qué quieres eliminar este local?</h2>
                </div>
                <div className="options-container">
                    <hr/>
                    <div className="row-container">
                        <label>
                            <input type="radio" value="porque si"/>
                            Porque si
                        </label>
                    </div>
                    <hr/>
                    <div className="row-container">
                        <label>
                            <input type="radio" value="clausura"/>
                            Clausura
                        </label>
                    </div>
                    <hr/>
                    <div className="row-container">
                         <label>
                            <input type="radio" value="no me siento comodo con la app"/>
                            No me siento comodo con la app
                        </label>
                    </div>
                    <hr/>
                    <div className="row-container">
                         <label>
                            <input type="radio" value="otro"/>
                            Otro
                        </label>
                    </div>
                </div>
            </div>
            <div className={"buttons-popup"}>
                <button
                    onClick={(e) => setIsOpen(false)}
                    className="confirm-button cancel-button">
                    Cancelar
                </button>
                <button
                    onClick={(e) => handleDelete(e)}
                    className="confirm-button delete">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
  );
};