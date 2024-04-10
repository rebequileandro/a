import React, { useState } from 'react'
import { ToggleSwitch } from '../../../../../components/ToggleSwitch/ToggleSwitch'

import { useDispatch } from 'react-redux'
import { updateList } from '../../../../../redux/store/slices/Organizer'
export const SelectDrinkCard = ({name, price, discount, image, statusDrink}) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(JSON.parse(statusDrink))
  const [input, setInput] = useState({
    price: price,
    discount: discount
  })
  const handleChangeSwitch = (e) => {
    setChecked(e.target.checked)
    dispatch(
      updateList({name, type: "activeDrink", value: e.target.checked.toString()})
      )
  }
  const handleChange = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const updateValue = ( type , value) => {
    dispatch(
      updateList({name, type, value})
      )
  }


  return (
    <div className='card-select'>
      <div className='image-drink' >
        <img src={image} alt="drink"/>
      </div>
      <div className='container-right'>
          <div className='container-head'>
            <h2>{name}</h2>
            <div className='switch-container'>
            <p>{checked ? 'Publicado' : 'No Publicado'}</p>
            <ToggleSwitch 
              text={true}
              checked={checked} 
              onChange={handleChangeSwitch}
              />
            </div>
          </div>
          <div className='container-prices'>
            <div>
              <h2>Precio</h2>
              <div className='input-wrapper'>
                <div className='input-container'>
                  <input 
                    name='price'
                    type="number"
                    value={input.price}
                    onBlur={(e) => updateValue('priceDrink', input.price)}
                    onChange={(e) => handleChange(e)}
                    />
                  <p>$</p>
                </div>
              </div>
            </div>
            <div>
              <h2>Descuento</h2>
              <div className='input-wrapper'>
                <div className='input-container'>
                  <label>
                    <input 
                    name='discount'
                    type="number"
                    value={input.discount}
                    onBlur={(e) => updateValue('discountDrink', input.discount)}
                    onChange={(e) => handleChange(e)}
                    />
                    %
                  </label>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
