import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import warning from '../../../../../assets/icons/error.svg'
import { deleteBartender } from '../../../../../redux/store/slices/Organizer'
import './DeleteRole.scss'
const DeleteRole = ({isOpen, setIsOpen, name, role, id}) => {
    const getParty = useSelector(state => state.organizer.details)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteBartender(id))
    }
    console.log(getParty)
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