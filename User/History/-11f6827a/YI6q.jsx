import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './OrganizerHome.scss'
import { Chart } from '../../../components/Chart/Chart'
import { useNavigate } from 'react-router-dom'
import calendar from '../../../assets/icons/Organizer/icon_calendar.svg'
const OrganizerHome = ({name = 'under club', total = '3,232', client, totals= '12,000', date = 'vie. 15 abr'}) => {
    const navigate = useNavigate()
    const clietporsents = -1.3
    const totalPorsents = 5.9
    const totalPromedio = 3.9
  return (
    <div className='statistics-container'>
        <Header 
            backbutton={() => navigate(-1)}
            welcome={true}
            notification={true}/>
        <div className='title'>
        <h2>Inicio</h2>
        <div className='date'>
            <img src={calendar} alt="calendario"/>
            <p>{date}</p>
        </div>
        </div>
        <div className='print-container'>
        <div className='data-container'>
            <div className='secodary-container'>
                    <h2>total facturado</h2>
                    <div className='number-container'>
                    <h1>${totals}</h1>
                    <p style={{color: totalPorsents >= 1 ? '#17b029' : '#b00009'}}>
                        {totalPorsents >= 1 ? '+' : null}
                        {totalPorsents}%</p>
                    </div>
                </div>
                <div className='secodary-container'>
                    <h2>clientes</h2>
                    <div className='number-container'>
                    <h1>{'200'}</h1>
                    <p style={{color: clietporsents >= 1 ? '#17b029' : '#b00009'}}>
                        {clietporsents >= 1 ? '+' : null}
                        {clietporsents}%</p>
                    </div>
                </div>
            </div>
            <div className='chart-container'>
            <h1>pedidos</h1>
            <div className='chart-wrapper'>
                <div className='chart'>
                    <div className='total'>
                        <h2>total</h2>
                        <h1>{total}</h1>
                    </div>
                    <Chart
                    wiskola={'123'}
                    ginTonic={'196'} 
                    fernet={'300'} 
                    otros={'50'} 
                    cubaLibre={'82'}
                    campar={'200'}
                    />
                </div>
                <div className='wiskola'>
                    <span>WISKOLA</span>
                    <p>{'20'}%<br/>{'(300 un.)'}</p>
                </div>
                <div className='gin-tonic'>
                    <span>GIN TONIC</span> 
                    <p>{'20'}%<br/>{'(300 un.)'}</p>

                </div>
                <div className='fernet'>
                    <span>FERNET</span>
                    <p>{'20'}%<br/>{'(300 un.)'}</p>

                </div>
                <div className='otros'>
                    <span>OTROS</span>
                    <p>{'20'}%<br/>{'(300 un.)'}</p>

                </div>
                <div className='cuba-libre'>
                    <span>CUBA LIBRE</span>
                    <p>{'20'}%<br/>{'(300 un.)'}</p>

                </div>
                <div className='campari'>
                    <span>CAMPARI</span>
                    <p>{'20'}%<br/>{'(300 un.)'}</p>
                </div>
                </div>
            </div>
            <div className='data-container'>
            
            </div>
        </div>
        <TabbarOrganizer active={'home'}/>
    </div>
  )
}

export default OrganizerHome