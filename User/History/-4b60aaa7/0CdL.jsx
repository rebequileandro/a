import { AnimatePresence, motion} from 'framer-motion'
import React, { useState } from 'react'
import InputDiv from '../../../components/InputDiv/InputDiv'
import './NewPassword.scss'
const NewPassword = () => {
    const [input, setInput] = useState('')
    const handleSubmit = () => {

    }
  return (
    <div className='new-password-container'>
        <motion.div className='gradient-box'>
            <h2 className='title'>Elige una contraseña</h2>
            <form className='form-container'>
            <InputDiv
                    inputProps={{
                        name: "n",
                        type: "password",
                        placeholder: "",
                        value: input
                    }}
                    setState={setInput}
                />
                <button className='btn btn--primary'>Aceptar</button>
            </form>
        </motion.div>
    </div>
  )
}

export default NewPassword