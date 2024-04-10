import React, { useState } from 'react'
import './NewBottle.scss'
import { AnimatePresence, motion } from "framer-motion";
import InputDiv from '../../../../components/InputDiv/InputDiv';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const NewBottle = ({setIsnewBottle, isNewBottle}) => {

    const getBartenders = useSelector(state => state.organizer.bartenderSquares)
    const getUser = useSelector(state => state.user)
    const getParty = useSelector(state => state.organizer.details)
    const [input, setInput] = useState({
        name:'',
        marca:'',
        inventorySquare: getBartenders.map(e => {
            return {[e.square]:''}
        }),
        inventoryGeneral:'',
        idOrganizer: getUser.id,
        idParty: getParty._id,
        nameParty: getParty.nameParty
    })
    const handleChange = (type) => (value) => {
        setInput({
            ...input,
            [type]: value
        })
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
                    setState={() => handleChange("name")}
                    />
                <InputDiv
                    inputProps={{
                        placeholder:"Marca"
                    }}
                    setState={() => handleChange("brand")}
                    />
                <InputDiv
                    inputProps={{
                        name: 'amount',
                        placeholder:"Catidad"
                    }}
                    setState={() => handleChange("name")}
                    />
                <button className='save-popup'>Aceptar</button>
                <button className='cancel-popup' onClick={() => setIsnewBottle(false)}>Cancelar</button>
            </motion.div>
        </div>}
    </AnimatePresence>
  )
}

export default NewBottle