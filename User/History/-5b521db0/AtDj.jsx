import React from 'react'
import './CreatePack.scss'
export const CreatePack = ({newPack, setNewPack}) => {
  const handleChange = (e) => {
    setNewPack({
        ...newPack,
        nameDrink: e.target.value
    })
  }
  return (
    <div className='create-pack-overlay'>
        <div className='create-pack-popup'>
            <h2>elige un nombre para este pack</h2>
            <div className='wrapper'>
                <input value={newPack.nameDrink} className='input-name' type="text" onChange={(e) => handleChange(e)}/>
            </div>
            <button className='save-pack'>Aceptar</button>
        </div>
    </div>
  )
}
