import React, { useEffect, useState } from 'react'
import '../OrganizerSettings.scss'
import row from '../../../../assets/buttons/arrow-right.svg'
import { Header } from '../../../../components/Header/Header'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editParty, getbyId, getTeam } from '../../../../redux/store/slices/Organizer'
import { Loading } from '.././../../../components/Loader/Loader'
import { Delete } from './Delete'
import { TabbarOrganizer } from '../../Tabbar/TabbarOrganizer'
import axios from 'axios'
const { REACT_APP_MP_CLIENT_ID, REACT_APP_MP_REDIRECT } = process.env
const Party = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const getMyParty = useSelector(state => state.organizer.details)
     // const currentUser = useSelector((state) => state.user);
    const currentUser = {rol: "organizador"}
    const [isLoading, setIsLoading] = useState(true)
    let idReplace = id ? id : "62b788825954225d56b9cd0f"
    useEffect(() => {
        dispatch(getbyId(id)).then(() => dispatch(getTeam(id)))
        .then(() => setIsLoading(false))
    }, []) 
    useEffect(() => {
        try {
            window.localStorage.setItem("idParty", id)   
        } catch (error) {
            console.log(error)
        }
    }, [])
    const handleClick = () => {
        window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=${REACT_APP_MP_CLIENT_ID}&response_type=code&platform_id=mp&redirect_uri=${REACT_APP_MP_REDIRECT}`
    }

  return (
      <>
        <div className='organizer-settings-container'>
            <Header 
                backbutton={currentUser.rol === "organizador" ? () => navigate("/mis-locales") : null}
                OrganizerParty={{party: 'ajustes', path: getMyParty[0]?.nameParty}}/>
            {isLoading ?
            <div className='loading-premises'>
                <Loading/>
            </div>
            :
            <>
                {currentUser.rol === "organizador" && 
                <>
                <hr/>
                <div className='row-container'>
                    <h2>inventario</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container'>
                    <h2>historial de inventario</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container'/>
                </>}
                <hr/>
                <div className='row-container' onClick={() => navigate(`/menu/${id}`)}>
                    <p style={{fontWeight: currentUser.rol === "unitManager" ? 600 : 300}}>menu</p>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container' onClick={() => navigate(`/caja/${id}`)}>
                    <p style={{fontWeight: currentUser.rol === "unitManager" ? 600 : 300}}>caja</p>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container'/>
                <div className='row-container'>
                    <h2>staff:</h2>
                </div>
                <hr/>
                {currentUser.rol === "organizador" &&
                <>
                <div className='row-container' onClick={() => navigate('/gerente-de-unidad')}>
                    <p>gerente de unidad</p>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                </>}
                <div className='row-container' onClick={() => navigate('/bartenders')}>
                    <p>bartender</p>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container' onClick={() => navigate("/cajeros")}>
                    <p>cajeros</p>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container'/>
                {currentUser.rol === "organizador" ?
                <>
                <hr/>
                <div className='row-container' onClick={() => handleClick()}>
                    <h2>Conectar Mercado Pago</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                <div className='row-container'/>
                <hr/>
                <div className='row-container' onClick={() => setIsOpen(true)}>
                    <h2>eliminar boliche</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                </>
                :
                <>
                <hr/>
                <div className='row-container'>
                    <h2>Mis Actividades</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
                </>}
            </>}
            {currentUser.rol === "unitManager" && 
            <TabbarOrganizer active={"settings"}/>}
        </div> 
        <Delete setIsOpen={setIsOpen} isOpen={isOpen}/>
      </>
  )
}

export default Party