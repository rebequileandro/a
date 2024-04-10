import React from 'react'
import './SelectDinksCards.scss'
export const CreatePackCard = ({name, image, price, setNewPack}) => {
  const checkboxChange = () => {
    setNewPack()
  }
  return (
    <div className='card-select'>
    <div className='image-drink' >
      <img src={image} alt="drink"/>
    </div>
    <div>
        <div className='container-head'>
          <h2>{name}</h2>
        </div>
    </div>
    <input className='check' type="checkbox" onChange={() => checkboxChange()}/>
  </div>
  )
}
