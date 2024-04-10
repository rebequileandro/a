import React from 'react'
import InputDiv from '../../../components/InputDiv/InputDiv'
import './NewPassword.scss'
const NewPassword = () => {
  return (
    <div className='new-password-container'>
        <div className='gradient-box'>
            <h2 className='title'>Elige una contraseña</h2>
            <div className='input-container'>
                <InputDiv
                    inputProps={{
                        name: "n",
                        type: "password",
                        placeholder: ""
                    }}
                />
            </div>
        <button className='btn btn--primary'>Aceptar</button>
        </div>
    </div>
  )
}

export default NewPassword