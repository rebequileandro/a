import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CalendarButton from '../../../../components/CalendarButton/CalendarButton'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
import PdfButton from '../../../../components/PdfButton/PdfButton'
import Item from '../../Items/Items'
import './StatisticsDetails.scss'
const StatisticsDetails = () => {
    const navigate = useNavigate()
    const { name, type } = useParams()
    const getHistory = useSelector(state => state.organizer.statisticsDetails.history)

    useEffect(() => {
        
    }, [])
    
  return (
    <div className='statistics-details-container'>
        <Header 
            backbutton={() => navigate(-1)}
            OrganizerParty={{
                party: "mis estadisticas",
                path: `${name} > ${type}`
            }}
            />
        <div className='statistics-header'>
            <div className='buttons'>
                <PdfButton/>
                <CalendarButton/>
            </div>
            <div className='search-bar'>
                <InputDiv inputProps={{name: 'name', placeholder: "Buscar"}}/>
            </div>
        </div>
        <div className='data-container'>
          {getHistory.map(e => (
            <Item data={{
                date: e.Fecha
            }}/>
          ))
        }
        <hr/>
        </div>
    </div>
  )
}

export default StatisticsDetails