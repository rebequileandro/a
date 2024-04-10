import React from 'react'
import './CreatePack.scss'
export const CreatePack = ({newPack, setNewPack}) => {
  const handleChange = () => {
    
  }
  return (
    <div className='create-pack-overlay'>
        <div className='create-pack-popup'>
            <h2>elige un nombre para este pack</h2>
            <div className='wrapper'>
                <input className='input-name' type="text"/>
            </div>
            <button className='save-pack'>Aceptar</button>
        </div>
    </div>
  )
}
