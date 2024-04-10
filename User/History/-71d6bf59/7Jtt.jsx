import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import '../OrganizerSettings.scss'

export const Roles = ({role}) => {
    const getParty = useSelector(state => state.organizer.details[0])
    const [square, setSquare] = useState({vip: []})
    const navigate = useNavigate()
    useEffect(() => {
        if(role === "bartender"){
            getParty.emailBarmans.map(e => {
               for (const key in square) {
                   if(key === e.square){
                      setSquare({
                          ...square,
                          [key]: [
                              ...square[key], 
                              e
                            ]
                      })
                   }
               }
            })
        }
        if(role === "cashier"){
            
        }
    }, [])
    console.log(square)
  return (
    <div className='organizer-settings-container'>
        <Header 
            backbutton={() => navigate(-1)} 
            OrganizerParty={{party: getParty?.nameParty, path: role === 'bartender' ?  "bartenders" : "cajeros"}}
        />
    </div>
  )
}
