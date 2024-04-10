import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import '../OrganizerSettings.scss'

export const Roles = ({role}) => {
    const getBartenders = useSelector(state => state.organizer.bartenderSqueres)
    const getCashiers = useSelector(state => state.organizer.cashierSqueres)
    const navigate = useNavigate()
    
  return (
    <div className='organizer-settings-container'>
        <Header 
            backbutton={() => navigate(-1)} 
            OrganizerParty={{party: getParty?.nameParty, path: role === 'bartender' ?  "bartenders" : "cajeros"}}
        />
    </div>
  )
}
