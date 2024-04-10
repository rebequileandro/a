import React from 'react'
import { useDispatch } from 'react-redux'
import { addPack } from '../../../../../../redux/store/slices/Organizer'
import './CreatePack.scss'
export const CreatePack = ({newPack, setNewPack}) => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setNewPack({
        ...newPack,
        nameDrink: e.target.value
    })
  }
  const createPack = () => {
    dispatch(addPack(newPack))
  }
  return (
    <div className='create-pack-overlay'>
        <div className='create-pack-popup'>
            <h2>elige un nombre para este pack</h2>
            <div className='wrapper'>
                <input value={newPack.nameDrink} className='input-name' type="text" onChange={(e) => handleChange(e)}/>
            </div>
            <button className='save-pack' onClick={() => createPack()}>Aceptar</button>
        </div>
    </div>
  )
}
