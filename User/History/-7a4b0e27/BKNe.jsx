import React from 'react'
import warning from '../../../../../assets/icons/error.svg'
const DeleteRole = ({isOpen}) => {
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
                        <input type="radio" name="option" id="option1" />
                        <h2>Porque si</h2>
                    </label>
                </div>
                <hr/>
                <div className="row-container">
                    <label>
                        <input type="radio" name="option" id="option2" />
                        <h2>Clausura</h2>
                    </label>
                </div>
                <hr/>
                <div className="row-container">
                    <label>
                        <input type="radio" name="option" id="option3" />
                        <h2>No estoy comodo con la App</h2>
                    </label>
                </div>
                <hr/>
                <div className="row-container">
                    <label>
                        <input type="radio" name="option" id="option4" />
                        <h2>Otro</h2>
                        <input type="text" />
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
  )
}

export default DeleteRole