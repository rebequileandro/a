import React, { useEffect } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import row from '../../../assets/buttons/arrow-right.svg'
import './OrganizerSettings.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const { 
  REACT_APP_MP_CLIENT_ID, 
  REACT_APP_MP_CLIENT_SECRET, 
  REACT_APP_MP_REDIRECT } = process.env

export const OrganizerSettings = () => {
    const navigate = useNavigate()
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
  const handleClick = () => {
    window.location.href = `https://auth.mercadopago.com.ar/authorization?client_id=${REACT_APP_MP_CLIENT_ID}&response_type=code&platform_id=mp&redirect_uri=${REACT_APP_MP_REDIRECT}`
  }
  useEffect(() => {
    if(code){
      axios.post("https://api.mercadopago.com/oauth/token",
      {
        client_id: REACT_APP_MP_CLIENT_ID,
        client_secret: REACT_APP_MP_CLIENT_SECRET,
        code: code,
        redirect_uri: REACT_APP_MP_REDIRECT,
        grant_type: "authorization_code"
      },
      {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((result) => console.log(result.data))
    }
  }, [])
  
  return (
    <div className='organizer-settings-container'>
        <Header OrganizerParty={{party: 'ajustes'}}/>
        <hr/>
        <div 
            className='row-container'
            onClick={() => navigate('/mis-locales')}>
            <h2>mis locales</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
        <div className='row-container'>
            <h2>mi cuenta</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
        <div 
            className='row-container'
            onClick={() => handleClick()}>
            <h2>conectar mercado pago</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
        <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
