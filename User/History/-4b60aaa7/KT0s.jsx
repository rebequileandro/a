import { AnimatePresence, motion} from 'framer-motion'
import React, { useState } from 'react'
import InputDiv from '../../../components/InputDiv/InputDiv'
import Select from '../../../components/Select/Select/Select'
import './NewPassword.scss'
const NewPassword = () => {
    const [input, setInput] = useState('')
    const handleSubmit = () => {
        
    }
  return (
    <div className="new-password-container">
      <AnimatePresence>
        <motion.div
          initial={{ transform: "scale(0.5)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ transform: "scale(0)" }}
          className="gradient-box"
        >
          <h2 className="title">Elige una contraseña</h2>
          <form className="form-container">
            <InputDiv
              inputProps={{
                name: "n",
                type: "password",
                placeholder: "",
                value: input,
              }}
              setState={setInput}
            />
            <Select
              placeholder={"elige una fiesta"}
              onChange={() => setInput()}
            />
            <button className="btn btn--primary">Aceptar</button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default NewPassword