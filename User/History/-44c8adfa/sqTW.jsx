import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import notifications from '../../../../assets/icons/notification.svg'
import back from '../../../../assets/buttons/arrow-circle-left.svg'
import './EditBarmans.scss'
export const EditBarmans = ({propsBarman, setPropsBarman, setIsEditBarman, indexInputbarmans, input, setInput, newBarman}) => {
  const [errors, setErrors] = useState({
    name:'',
    email:''
  })

  const goBack = (e) => {
      e.preventDefault()
      setIsEditBarman(false)
    }
console.log(errors.name.length)

    const handleChange = (e) => {
      setPropsBarman({
        ...propsBarman,
        [e.target.name] : e.target.value
      }) 
    }
    const validate = (e) => {
      e.preventDefault()
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(propsBarman.name.length < 3) setErrors({
        ...errors,
        name: 'El nombre ingresado es demasiado corto'
      })
      if (!validRegex.test(propsBarman.email)) setErrors({
        ...errors,
        email: 'Dirección de correo electrónico no válida'
      })
      if(propsBarman.name.length >= 3) setErrors({
        ...errors,
        name:''
      })
      if (validRegex.test(propsBarman.email)) setErrors({
        ...errors,
        email: ''
      })
    }

    const saveChanges = (e) => {
      e.preventDefault()
      if(!errors.name.length && !errors.email.length){
        if(!newBarman) {
          let barmans = [...input.emailBarmans]
          barmans[indexInputbarmans] = propsBarman
          setInput({
            ...input,
            emailBarmans: barmans
          })
          setIsEditBarman(false)
        } 
        if(newBarman){
          setInput({
            ...input,
            emailBarmans: [...input.emailBarmans, propsBarman]
          })
          setIsEditBarman(false)
        }
      }
    }
    console.log( )
  return (
    <div className='container-edit-barmans'>
      <div className='container-form'>
          <div className='backbutton-notifications'>
            <button onClick={(e) => goBack(e)}>
              <img src={back} alt="back"/>
            </button>
            <img src={notifications} alt="notificaciones"/>
          </div>
          <HeaderOrganizer/>
          <div className='container-label'>
              <div className='outer-label'>
                <label>Nombre:</label>
            </div>
          </div>
          <hr/>
          <div className='container-input'>
              <input 
                  type="text" 
                  name= 'name'
                  minLength={3}
                  maxLength={40}
                  value={propsBarman?.name}
                  onBlur={(e) => validate(e)}
                  onChange={(e) => handleChange(e)}
                  />
          </div>
          <hr/>
          {errors?.name && <p className='erros'>* {errors.name}</p>}
          <div className='container-label'>
              <div className='outer-label'>
                <label>Mail:</label>
            </div>
          </div>
          <hr/>
          <div className='container-input'>
              <input 
                  type="email" 
                  name= 'email'
                  value={propsBarman?.email}
                  onBlur={(e) => validate(e)}
                  minLength={11}
                  maxLength={50}
                  onChange={(e) => handleChange(e)}
                  />
          </div>
          <hr/>
          {errors?.email && <p className='erros'>* {errors.email}</p>}
          <button className='save-changes' 
            onClick={(e) => saveChanges(e)}>Guardar cambios</button>
          <p className='cancel' onClick={(e) => goBack(e)}>Cancelar</p>
      </div>
    </div>
  )
}
