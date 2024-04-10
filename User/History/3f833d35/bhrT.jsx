import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderOrganizer } from '../../Header/HeaderOrganizer';
import './EditMyParty.scss'
import arrowRight from '../../../../assets/buttons/arrow-right.svg'
import { DeletePary } from './DeletePary';
import { EditBarmans } from './EditBarmans';
import { editParty, fetchParty } from '../../../../redux/store/slices/Organizer';


export const EditMyParty = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate()
    const user = useSelector(state =>  state.user)
    const getDetails = useSelector(state => state.organizer.details)
    const [isOpen, setIsOpen] = useState(false)
    const [isEditBarman, setIsEditBarman] = useState(false)
    const [newBarman, setNewBarman] = useState(false)
    const [propsBarman, setPropsBarman] = useState({
        name: '',
        email:''
    })
    const [indexInputbarmans, setIndexInputBarmans] = useState()
    const [input, setInput] = useState({
        nameParty: getDetails?.nameParty,
        addressParty: getDetails?.addressParty,
        emailBarmans: getDetails?.emailBarmans,
    })
    const handleInputChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const isOpenPopup = (e) => {
        e.preventDefault()
        setIsOpen(true)
    }
    const editBarman = (e, index) => {
        e.preventDefault()
        if(!newBarman) {
            setPropsBarman(input.emailBarmans[index])
            setIndexInputBarmans(index)
        }
        setIsEditBarman(true)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editParty(input, id))
        .then(response => {
            
            if(response.status === 200) {
                dispatch(fetchParty())
                navigate('/organizer')
            }else{
                alert('Ha ocurrido algo inesperado, inténtalo de nuevo.')
            }
        })
    }
  return (
      <>
    <div className='container-edit-my-party'>
        <HeaderOrganizer  
            notification={true}
            backbutton={-1}/>
        <div className='title'>
            <h2>editar boliche</h2>
        </div>
        <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
                <div className='container-label'>
                    <div className='outer-label'>
                        <label>Nombre del boliche:</label>
                    </div>
                </div>
                    <hr/>
                <div className='container-input'>
                    <input 
                        type="text"
                        name= 'nameParty'
                        value={input.nameParty}
                        onChange={(e) => handleInputChange(e)}
                        />
                </div>
                <hr/>
                <div className='container-label'>
                    <div className='outer-label'>
                        <label>Ubicación:</label>
                    </div>
                </div>
                <hr/>
                <div className='container-input'>
                    <input 
                        type="text" 
                        name= 'addressParty'
                        value={input.addressParty}
                        onChange={(e) => handleInputChange(e)}
                        />
                </div>
                <hr/>
                <div className='container-label'>
                    <div className='outer-label'>
                        <label>Barmans:</label>
                    </div>
                </div>
                {getDetails && 
                input.emailBarmans?.map(e => {
                    let index = input.emailBarmans.findIndex(i => i === e)
                    return <>
                            <hr/>
                            <div key={index} className='container-input'>
                                <p>{e.name}</p>
                                <button onClick={(e) => editBarman(e, index)}>
                                    <img src={arrowRight} alt="ver mas"/>
                                </button>
                            </div>
                        </>
                    })
                 }
                <hr/>
            <div className='container-input'>
                <p>Añadir barman</p>
                <button onClick={(e) => {
                    setNewBarman(true)
                    editBarman(e)}}>
                    <img src={arrowRight} alt="ver mas"/>
                </button>
            </div>
            <hr/>
            <div className='container-input'/>
            <hr/>
            <div className='container-input'>
                <h3>Eliminar boliche</h3>
                <button onClick={(e) => isOpenPopup(e)}>
                    <img src={arrowRight} alt="ver mas"/>
                </button>
            </div>
            <hr/>
            <button className='submit' type="submit">Guardar cambios</button>
            <p className='cancel' onClick={() => navigate(-1)}>Cancelar</p>
        </form>
    </div>
    {isOpen && <DeletePary setIsOpen={setIsOpen} id={id}/> }
    {isEditBarman && 
    <EditBarmans 
        indexInputbarmans={indexInputbarmans} 
        setIsEditBarman={setIsEditBarman} 
        propsBarman={propsBarman} 
        setPropsBarman={setPropsBarman}
        input={input}
        setInput={setInput}
        newBarman={newBarman}
        />}
    </>
  )
}