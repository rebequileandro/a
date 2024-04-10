import React, { useEffect, useState } from 'react'
import './SelectDinksCards.scss'
export const CreatePackCard = ({name, image, price, setNewPack, newPack}) => {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    if(!newPack.imageDrink.length) setChecked(false)
  }, [])
  


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
    }
  }
  return (
    <div className='card-select'>
    <div className='image-drink'>
      <img src={image} alt="drink"/>
    </div>
    <div>
        <div className='container-head'>
          <h2>{name}</h2>
        </div>
    </div>
    <input className='check' checked={checked} type="checkbox" onChange={(e) => checkboxChange(e)}/>
  </div>
  )
}
