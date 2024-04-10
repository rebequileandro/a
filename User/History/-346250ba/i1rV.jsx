import React from 'react'
import './SelectDinksCards.scss'
export const CreatePackCard = ({name, image, price, setNewPack, newPack}) => {
  const checkboxChange = (e) => {
    if(e.target.checked) {
      if(!newPack.nameDrink){
        setNewPack({
          ...newPack,
          imageDrink: [image],
          nameDrink: name,
          priceDrink: price,
          finalPriceDrink: price,

        })
      } else {
        setNewPack({
          ...newPack,
          imageDrink: [...newPack.imageDrink, image],
          nameDrink: newPack.nameDrink + ' + ' + name,
          priceDrink: parseInt(newPack.priceDrink) + parseInt(price),
          finalPriceDrink: parseInt(newPack.priceDrink) + parseInt(price),
        })
      }
    }
    if(e.target.checked === false) {
      
    }
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
    <input className='check' type="checkbox" onChange={(e) => checkboxChange(e)}/>
  </div>
  )
}
