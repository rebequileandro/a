import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import '../OrganizerSettings.scss'

export const Roles = ({role}) => {
    const getRole = role === "bartender" 
    ? useSelector(state => state.organizer.bartenderSqueres)
    : role === 'cashier' && useSelector(state => state.organizer.cashierSqueres)
    const navigate = useNavigate()
    console.log(getRole)
  return (
    <div className='organizer-settings-container'>
        <Header 
            backbutton={() => navigate(-1)} 
            OrganizerParty={{party: getParty?.nameParty, path: role === 'bartender' ?  "bartenders" : "cajeros"}}
        />
    </div>
  )
}
