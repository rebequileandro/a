import React from 'react'
import InputDiv from '../../../components/InputDiv/InputDiv'
import './NewPassword.scss'
const NewPassword = () => {
  return (
    <div className='new-password-container'>
        <div className='gradient-box'>
            <h2 className='title'>Elige una contraseña</h2>
            <form className='input-container'>
                <InputDiv
                    inputProps={{
                        name: "n",
                        type: "password",
                        placeholder: ""
                    }}
                />
            <button className='btn btn--primary'>Aceptar</button>
            </form>
        </div>
    </div>
  )
}

export default NewPassword