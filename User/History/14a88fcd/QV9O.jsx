import React, { useState } from 'react'
import './NewBottle.scss'
import { AnimatePresence, motion } from "framer-motion";
import InputDiv from '../../../../components/InputDiv/InputDiv';
import { useDispatch, useSelector } from 'react-redux';
import { newBottle } from '../../../../redux/store/slices/Organizer';
import { StatusPopUp } from '../../../../components/StatusPopUp/StatusPopUp';

const NewBottle = ({setIsnewBottle, isNewBottle}) => {
    const formatSquares = () => {
        let squares = {}
        getBartenders.forEach(e => {
            squares = {...squares, [e.square]:'0'}
        })
        return squares
    }
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState(false)
    const getBartenders = useSelector(state => state.organizer.bartenderSquares)
    const getUser = useSelector(state => state.user)
    const getParty = useSelector(state => state.organizer.details[0])
    const [input, setInput] = useState({
        name:'',
        marca:'',
        inventorySquare: formatSquares(),
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
    const handleSubmit = () => {
        dispatch(newBottle(input))
        .then(response => {
            setStatus(response.status)
            setIsOpen(true)
           
        })
    }
  return (
    <AnimatePresence>
      {isNewBottle &&
        <div className='new-bottle-overlay'>
            <>
               {isOpen ? 
                <StatusPopUp
                    status={status === 200 ? "success" : false}
                    title={status === 200 ? "su botella se ha agregado con éxito" : "su botella no se ha agregado "}
                    button={"volver"}
                    redirect={() => setIsnewBottle(false)}
                    description={status !== 200 ? "Inténtalo de nuevo, asegúrate de completar todos los campos" : false}
                />
                :
                <motion.div 
                    initial={{ transform: 'scale(0.5)' }}
                    animate={{ transform: 'scale(1)' }}
                    exit={{ transform: 'scale(0)'}} 
                    className='new-bottle-popup'>
                    <h1 className='title'>nueva botella</h1>
                    <InputDiv
                        inputProps={{
                            placeholder:"Bebida",
                            value: input.name
                        }}
                        setState={handleChange("name")}
                        />
                    <InputDiv
                        inputProps={{
                            placeholder:"Marca",
                            value: input.marca
                        }}
                        setState={handleChange("marca")}
                        />
                    <InputDiv
                        inputProps={{
                            placeholder:"Catidad",
                            value: input.inventoryGeneral
                        }}
                        setState={handleChange("inventoryGeneral")}
                        />
                    <button className='save-popup' onClick={() => handleSubmit()}>Aceptar</button>
                    <button className='cancel-popup' onClick={() => setIsnewBottle(false)}>Cancelar</button>
                </motion.div>}
            </>
        </div>}
    </AnimatePresence>
  )
}

export default NewBottle