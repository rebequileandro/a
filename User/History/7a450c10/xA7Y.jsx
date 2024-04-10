import React, { useState } from 'react'
import './NewCard.scss'
import { BackButton } from '../../../components/BackButton/BackButton'
import InputDiv from '../../../components/InputDiv/InputDiv'
import { validate } from './Validator-Card'
import axios from 'axios'
import { DinamincCard } from './DinamincCard'
export const NewCard = () => {
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        cardName:'',
        cardNumber:'',
        holder:'',
        dni:'',
        date:'',
        code:''
    })

    const resetInput = () =>{
        useState({
            cardName:'',
            cardNumber:'',
            holder:'',
            dni:'',
            date:'',
            code:''
        })
    }
    input.date.length === 2 && setInput({ ...input, date: input.date.concat('/')})
    const handleInputChange = (type) => (value) =>{
        setInput({
          ...input,
          [type]: value,
        });
      };

      const handleSubmmit = async (e) => {
        e.preventDefault()
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));
        if(errors){
            const res = await axios.post('')
            return res
        }
        return errors
      }
    
  return (
    <div className='new-card-container'>
        <div className='new-card-header'>
            <BackButton/>
            <div className='title'>
                <h1>cargar datos</h1>
            </div>
        </div>
        <DinamincCard input={input}/>
        <form className='card-form' onSubmit={(e) => handleSubmmit(e)}>
            <div className='card-form-data'>
                <InputDiv 
                    inputProps={{
                        type: 'text', 
                        value: input.cardName,
                        name: 'cardName',
                    }} 
                    label={'Nombre de tarjeta:'}
                    setState={handleInputChange('cardName')}
                    error={errors.cardName}
            
                    />
                <InputDiv 
                    inputProps={{
                        type: 'cardNumber', 
                        value: input.cardNumber,
                        name: 'cardNumber'
                    }} 
                    label={'Número de tarjeta:'}
                    setState={handleInputChange('cardNumber')}
                    error={errors.cardNumber}
                    />
                <InputDiv 
                    inputProps={{
                        type: 'text', 
                        value: input.holder,
                        name: 'holder'
                    }} 
                    label={'Titular de la tarjeta:'}
                    setState={handleInputChange('holder')}
                    error={errors.holder}
                    />
                 <InputDiv 
                    inputProps={{
                        type: 'text', 
                        value: input.dni,
                        name: 'dni'
                    }} 
                    label={'DNI:'}
                    setState={handleInputChange('dni')}
                    error={errors.dni}
                    />
            </div>
            <div className='date-code'>
                <div className='date'>
                    <InputDiv 
                        inputProps={{
                            type: 'text', 
                            value: input.date, 
                            maxLength:'5',
                            name: 'date',
                            placeholder: 'mm/aa'
                        }} 
                        label={'Vencimiento:'}
                        setState={handleInputChange('date')}
                        error={errors.date}
                        />
                </div>
                <div className='code'>
                  <InputDiv 
                    inputProps={{
                        type: 'number', 
                        value: input.code, 
                        maxLength:"3",
                        name: 'code'
                    }} 
                    label={'CVV:'}
                    setState={handleInputChange('code')}
                    error={errors.code}
                    />
                </div>
            </div>
            <button type="submit" className='form-submit'>Cargar</button>
            <p onClick={() => resetInput()}>Cancelar</p>
        </form>
    </div>       
  )
}