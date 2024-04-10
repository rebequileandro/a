import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import '../OrganizerSettings.scss'
import row from '../../../../assets/buttons/arrow-right.svg'

export const Roles = ({role}) => {
    const getParty = useSelector(state => state.organizer.details[0])
    const getBartenders = useSelector(state => state.organizer.bartenderSqueres)
    const getCashiers = useSelector(state => state.organizer.cashierSqueres)
    const navigate = useNavigate()
    const handleClick = (id) => {
      role === 'bartender' && navigate(`/bartender/${id}`)
      role === 'cashier' && navigate(`/cajero/${id}`)
    }
  return (
    <div className='organizer-settings-container'>
        <Header 
            backbutton={() => navigate(-1)} 
            OrganizerParty={{party: getParty?.nameParty, path: role === 'bartender' ?  "bartenders" : "cajeros"}}
        />
         {[role === "bartender" ? getBartenders : getCashiers][0].map((e, i) => (
            <React.Fragment key={i}>
              <div className='row-container'>
                  <h2>{e.square}</h2>
              </div>
              <hr/>
              {e.worker?.map((worker, i) => (
                  <React.Fragment key={i}>
                    <div 
                      onClick={() => handleClick(worker.id)}
                      className='row-container'>
                      <p>{worker.name}</p>
                      <img src={row} alt="flecha"/>
                    </div>
                    <hr/>
                  </React.Fragment>
              ))}
              <div className='row-container'/>
            </React.Fragment>
        ))}
        <hr/>
        {role === "bartender" ?
          <div className='row-container' onClick={() => navigate("/bartender/nuevo")}>
              <h2>añadir bartender</h2>
              <img src={row} alt="flecha" />
          </div>
          :
          <div className='row-container' onClick={() => navigate("/cajero/nuevo")}>
            <h2>añadir cajero</h2>
            <img src={row} alt="flecha" />
          </div>}
        <hr/>
    </div>
  )
}
