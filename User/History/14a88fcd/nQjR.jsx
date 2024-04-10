import React, { useState } from 'react'
import './NewBottle.scss'
import { AnimatePresence, motion } from "framer-motion";
import InputDiv from '../../../../components/InputDiv/InputDiv';
import { useSelector } from 'react-redux';

const NewBottle = ({setIsnewBottle, isNewBottle}) => {

    const getBartenders = useSelector(state => state.organizer.bartenderSquares)
    const [input, setInput] = useState({
        name:'',
        marca:'',
        inventorySquare: getBartenders.map(e => {
            return {[e.square]:''}
        })

    })
    const handleChange = (type) => (value) => {
         
    }
  return (
    <AnimatePresence>
      {isNewBottle &&
        <div className='new-bottle-overlay'>
            <motion.div 
                initial={{ transform: 'scale(0.5)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)'}} 
                className='new-bottle-popup'>
                <h1 className='title'>nueva botella</h1>
                <InputDiv
                    inputProps={{
                        placeholder:"Bebida"
                    }}
                    onChange={() => handleChange("name")}
                    />
                <InputDiv
                    inputProps={{
                        name: 'brand',
                        placeholder:"Marca"
                    }}/>
                <InputDiv
                    inputProps={{
                        name: 'amount',
                        placeholder:"Catidad"
                    }}/>
                <button className='save-popup'>Aceptar</button>
                <button className='cancel-popup' onClick={() => setIsnewBottle(false)}>Cancelar</button>
            </motion.div>
        </div>}
    </AnimatePresence>
  )
}

export default NewBottle