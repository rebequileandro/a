import React from 'react'
import warning from '../../../../../assets/icons/error.svg'
import './DeleteRole.scss'
const DeleteRole = ({isOpen, setIsOpen, name}) => {
    const handleDelete = () => {
        setIsOpen(false)
    }
  return (
    <div className={`delete-role-overlay ${isOpen ? "show-overlay" : ''}`}>
        <div className={`popup-wrapper ${isOpen ? "show" : "no-show"}`}>
            <div className="delete-popup">
                <img className="icon" src={warning} alt="warning"/>
                <div className="title">
                <h2>{`¿quieres eliminar a ${name}?`}</h2>
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