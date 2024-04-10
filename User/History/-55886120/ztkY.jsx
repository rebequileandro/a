import React from 'react'
import './OrderReady.scss'
export const OrderReady = ({isReady, setIsReady}) => {
  return (
    <div className='overlay'>
    <div className='delete-popup'>
        <img className='icon' src={'d'} alt="warning" />
        <div className='title'>
            <h2>¿quieres eliminar este boliche?</h2>
        </div>
        <div className='buttons-popup'>
            <button onClick={(e) => {
                e.preventDefault()
                setIsReady(false)
            }}className='confirm-button cancel'>Cancelar</button>
            <buttonclassName='confirm-button delete'>Eliminar</button>
        </div>
    </div>
</div>
  )
}
