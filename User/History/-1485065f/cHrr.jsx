import React from 'react'
import './Delete.scss'
import warning from '../../../../assets/icons/error.svg'
export const DeletePary = () => {
  return (
    <div className='overlay'>
        <div className='delete-popup'>
            <img src={warning} alt="warning" />
            <div className='title'>
                <h2>¿quieres eliminar este boliche?</h2>
            </div>
            <div className='buttons-popup'>
                <button className='confirm-button cancel'>Cancelar</button>
                <button className='confirm-button delete'>Eliminar</button>
            </div>
        </div>
    </div>
  )
}
