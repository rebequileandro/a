import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import notifications from '../../../../assets/icons/notification.svg'
import back from '../../../../assets/buttons/arrow-circle-left.svg'
import './EditBarmans.scss'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
export const EditBarmans = ({propsBarman, setPropsBarman, setIsEditBarman, indexInputbarmans, input, setInput, newBarman}) => {
  const [errors, setErrors] = useState({
    name:'',
    email:''
  })

  const goBack = (e) => {
      e.preventDefault()
      setIsEditBarman(false)
    }


    const handleChange = (e) => {
      setPropsBarman({
        ...propsBarman,
        [e.target.name] : e.target.value
      }) 
    }
    const validate = (e) => {
      e.preventDefault()
    //   if (!/\S+@\S+\.\S+/.test(propsBarman.email)) {
    //     setErrors({
    //       ...errors,
    //       email: 'Dirección de correo electrónico no válida'
    //     })
    //   }
    //  else if (/\S+@\S+\.\S+/.test(propsBarman.email)) {
    //     setErrors({
    //       ...errors,
    //       email: ''
    //     })
    //   }
      if(propsBarman.name.length < 3) {
        setErrors({
          ...errors,
          name: 'El nombre ingresado es demasiado corto'
        })
      }
   else if(propsBarman.name.length >= 3) {
        setErrors({
          ...errors,
          name:''
        })
      }
    }

    const saveChanges = (e) => {
      e.preventDefault()
      if(!errors.name.length && propsBarman.email.length > 12){
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
  return (
    <div className='container-edit-barmans'>
          <Header/>
          <div>
            <InputDiv
              inputProps={{
                name: "name"
              }}
            />
          </div>
          {errors?.name && <p className='erros'>* {errors.name}</p>}
          <div>
            <InputDiv
              inputProps={{
                name: "email"
              }}
            />
          </div>
            {errors?.email && <p className='erros'>* {errors.email}</p>}
          <button className='save-changes' 
            onClick={(e) => saveChanges(e)}>Guardar cambios</button>
          <p className='cancel' onClick={(e) => goBack(e)}>Cancelar</p>

    </div>
  );
};
