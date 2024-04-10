import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import row from '../../../assets/buttons/arrow-right.svg'
import './OrganizerSettings.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
export const OrganizerSettings = () => {
    const navigate = useNavigate()
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
  const handleClick = () => {
    window.location.href = "https://auth.mercadopago.com.ar/authorization?client_id=1228194246381160&response_type=code&platform_id=mp&redirect_uri=http://localhost:3000/ajustes"

  }
console.log(code)
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
