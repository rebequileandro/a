import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import warning from '../../../../../assets/icons/error.svg'
import { deleteBartender, getTeam } from '../../../../../redux/store/slices/Organizer'
import './DeleteRole.scss'
const DeleteRole = ({isOpen, setIsOpen, name, role, id}) => {
    const getParty = useSelector(state => state.organizer.details[0])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = () => {
        if(role === "bartender"){
            dispatch(deleteBartender(id))
            .then(() => {
                dispatch(getTeam(getParty._id))
                navigate(`/mis-locales/${getParty._id}`)
            })
        }
        if(role === "cashier"){
            
        }
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