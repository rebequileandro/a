import React from 'react'
import './Delete.scss'
import warning from '../../../../assets/icons/error.svg'
export const DeletePary = () => {
  return (
    <div className='overlay'>
        <div className='delete-popup'>
            <img src={warning} alt="warning" />
        <div className='buttons-popup'>
            <button className='confirm-button'>Cancelar</button>
            <button className='confirm-button'>Eliminar</button>
        </div>
        </div>
    </div>
  )
}
