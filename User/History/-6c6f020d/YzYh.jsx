import React, { useState } from 'react'
import './EditProduct.scss'
import drink from '../../../../assets/buttons/test-image.svg'
import { ToggleSwitch } from '../../../../components/ToggleSwitch/ToggleSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { upDateDrinks } from '../../../../redux/store/slices/Organizer'
import { StatusPopUp } from '../../../../components/StatusPopUp/StatusPopUp'
export const EditProduct = ({id, image=drink, name, price, status, setIsEdit, discount, type}) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [statusPopup, setStatusPopup] = useState(false)
    const getAllDrinks = useSelector(state => state.organizer.drinks)
    const getAllBottles = useSelector(state => state.organizer.bottles)
    const getAllPacks = useSelector(state => state.organizer.packs)
    const getParty = useSelector(state => state.organizer.details)
    const catchStatus = useSelector(state => state.organizer.status)
    const [checked, setChecked] = useState(JSON.parse(status))
    const [input, setInput] = useState({
        price: price,
        discount: discount
    })
    const handleChangeSwitch = (e) => {
        setChecked(e.target.checked)
      }
    const handleOnChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {

        let drink;
        let discount = Math.round((input.discount /100) * input.price)
        let finalPrice = input.price - discount
        let allData = [getAllDrinks, getAllBottles , getAllPacks]
        let newData = []
        if(type === 'drink') {
            drink = getAllDrinks.filter(e => e.nameDrink === name)
        }
        if(type === 'bottle') {
            drink = getAllBottles.filter(e => e.nameDrink === name)
        }
        if(type === 'packs') {
            drink = getAllPacks.filter(e => e.nameDrink === name)
        }
        drink = {
            ...drink[0], 
            discountDrink: input.discount, 
            priceDrink: input.price,
            finalPriceDrink: finalPrice.toString(),
            activeDrink: checked.toString()
        }
        allData.map(element => {
            element.map(e => {
                if(e.nameDrink === drink.nameDrink) e = drink
                newData.push(e)
            })
        })
        setTimeout(() => {
            dispatch(upDateDrinks( id , {
                    nameParty: getParty.nameParty,
                    idParty: id,
                    drinkParty: newData
                }))
            .then(() => {
                catchStatus.length && catchStatus[0] === 200 ? 
                setStatusPopup(true) : setStatusPopup(false)
                setIsOpen(true)
            })
        }, 500);
    }

  return (
    <div className='edit-product-overlay'>
        {!isOpen ? 
        <div className='popup'>
            <div className='popup-header'>
                <button className='close' onClick={() => setIsEdit(false)}>x</button>
                <h2>editar producto</h2>
                <p>selecciona los productos disponibles en tu menu</p>
            </div>
            <div className='product-container'>
                <div className='image'>
                    <img src={image} alt="pruducto"/>
                </div>
                <div className='right-container'>
                    <div className='status'>
                        <h2>{name}</h2>
                        <div className='switch-container'>
                            <p>{checked ? 'Publilcado' : 'No Publicado'}</p>
                            <ToggleSwitch checked={checked} onChange={handleChangeSwitch}/>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='input-container'>
                            <label>Precio</label>
                            <div className='input-wrapper'>
                                <p className='price'>$</p>
                                <input 
                                type="number" 
                                name="price"
                                value={input.price}
                                onChange={(e) => handleOnChange(e)}
                                />
                            </div>
                        </div>
                        <div className='input-container'>
                            <label>Descuento</label>
                            <div className='input-wrapper'>
                                <p className='discount'>%</p>
                                <input 
                                type="number" 
                                name="discount" 
                                value={input.discount}
                                onInput={(e) => e.target.value = e.target.value.slice(0, 2)}
                                onChange={(e) => handleOnChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttons-container'>
                <button className='save' onClick={(e) => handleSubmit(e)}>Aceptar</button>
                <button className='remove'>Eliminar del menu</button>
            </div>
        </div>
        : <StatusPopUp
            redirect={() => setIsEdit(false)} 
            title={statusPopup ? 'producto actualizado' : 'ha ocurrido un error'} 
            status={statusPopup} 
            button={'aceptar'}
            />
        }
    </div>
  )
}
