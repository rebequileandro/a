import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './EditMyParty.scss'
import arrowRight from '../../../../assets/buttons/arrow-right.svg'
import { DeletePary } from './DeletePary';
import { EditBarmans } from './EditBarmans';
import { editParty, fetchParty } from '../../../../redux/store/slices/Organizer';
import { Header } from '../../../../components/Header/Header';


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
    let OrganizerParty = { 
        party: getDetails?.nameParty,
        path: 'editar'
      }
  return (
      <>
    <div className='container-edit-my-party'>
         <Header
            notification={true} 
            backbutton={() => navigate(-1)} 
            OrganizerParty={OrganizerParty}
            />

        <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
            <hr/>
            <div 
                className='container-input'
                onClick={(e) => {
                    setNewBarman(true)
                    editBarman(e)}}>
                <p>Inventario</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>
            <div className='container-input'/>
            <hr/>
            <div 
                className='container-input'
                onClick={(e) => {
                    setNewBarman(true)
                    editBarman(e)}}>
                <p>Gerente de unidad</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>
            <div 
                className='container-input'
                onClick={(e) => {
                    setNewBarman(true)
                    editBarman(e)}}>
                <p>Gerente de unidad</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>

            <div className='container-label'>
                <div className='outer-label'>
                    <label>Staff:</label>
                </div>
            </div>
            <hr/>
            <div 
                className='container-input'
                onClick={(e) => {
                    setNewBarman(true)
                    editBarman(e)}}>
                <p>Gerente de unidad</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>
            <div 
             onClick={(e) => {
                setNewBarman(true)
                editBarman(e)}}
            className='container-input'>
                <p>Barmans</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>
            <div 
             onClick={(e) => {
                setNewBarman(true)
                editBarman(e)}}
            className='container-input'>
                <p>Cajeros</p>
                <img src={arrowRight} alt="ver mas"/>
            </div>
            <hr/>
            <div className='container-input'/>
            <hr/>
            <div 
                onClick={(e) => isOpenPopup(e)}
                className='container-input'>
                <h3>Eliminar boliche</h3>
                <img src={arrowRight} alt="eliminar"/>
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