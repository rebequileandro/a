import React from 'react'
import './Delete.scss'
import warning from '../../../../assets/icons/error.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchParty } from '../../../../redux/store/slices/Organizer'
export const DeletePary = ({setIsOpen, id}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = () => {
        dispatch()
        .then(response => {
            if(response.status === 200) {
                setIsOpen(false)
                dispatch(fetchParty())
                navigate('/organizer')
            }else{
                alert('Ha ocurrido algo inesperado, inténtalo de nuevo.')
            }
        })
    }

  return (
    <div className='overlay'>
        <div className='delete-popup'>
            <img className='icon' src={warning} alt="warning" />
            <div className='title'>
                <h2>¿quieres eliminar este boliche?</h2>
            </div>
            <div className='buttons-popup'>
                <button onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                }}className='confirm-button cancel'>Cancelar</button>
                <button onClick={(e) => handleDelete(e)} className='confirm-button delete'>Eliminar</button>
            </div>
        </div>
    </div>
  )
}
