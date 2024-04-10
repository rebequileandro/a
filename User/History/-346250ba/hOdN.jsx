import React, { useEffect, useState } from 'react'
import './SelectDinksCards.scss'
export const CreatePackCard = ({name, image, price, setNewPack, newPack}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if(!newPack.imageDrink.length) setChecked(false)
  }, [newPack])
  


  const checkboxChange = (e) => {
    setChecked(e.target.value)

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
      let filterImage = newPack.imageDrink.filter(e => e !== image)
      let splitName = newPack.nameDrink.split(' + ')
      let filterName = splitName.filter(e => e !== name)
      setNewPack({
        ...newPack,
        imageDrink: filterImage,
        nameDrink: filterName.join(' + '),
        priceDrink:   parseInt(newPack.priceDrink) - parseInt(price),
        finalPriceDrink:  parseInt(newPack.priceDrink) - parseInt(price),

      })
      setChecked(false)
    }
  }
  return (
    <div className='card-select'>
      <div className='card-image-drink-pack'>
        <img src={image} alt="drink"/>
      </div>
      <div>
          <h2>{name}</h2>
          <div className='container-prices'>

          </div>
      </div>
      <div className='checkbox-container'>
        <input 
          className='check' 
          checked={checked} 
          type="checkbox" 
          onChange={(e) => checkboxChange(e)}/>
      </div>
  </div>
  )
}
