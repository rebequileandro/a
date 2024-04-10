import React from 'react'
import './CreatePack.scss'
export const CreatePack = () => {
  return (
    <div className='create-pack-overlay'>
        <div className='create-pack-popup'>
            <h2>elige un nombre para este pack</h2>
            <div className='wrapper'>
                <input className='input-name' type="text"/>
            </div>
            <button>Aceptar</button>
        </div>
    </div>
  )
}
