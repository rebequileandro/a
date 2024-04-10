import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './OrganizerHome.scss'
import { Chart } from '../../../components/Chart/Chart'
import { useNavigate } from 'react-router-dom'
import calendar from '../../../assets/icons/Organizer/icon_calendar.svg'
import { useDispatch, useSelector } from 'react-redux'
import CalendarButton from '../../../components/CalendarButton/CalendarButton'
import { getStatisticsHistory, getStatisticsTop5, getStatisticsTotal } from '../../../redux/store/slices/Organizer'
const OrganizerHome = ({name = 'under club', total = '3,232', client, totals= '12,000'}) => {
    const currentUser = useSelector(state => state.user)
   
    const totalPorsents = 5.9

    const getDate = new Date()
    const [date, setDate] = useState(`${new Date().toLocaleDateString()}`)
    const getTotal = useSelector(state => state.organizer.statistics.total)
    const getTop = useSelector(state => state.organizer.statistics.top5)
    const getTotalUnits = useSelector(state => state.organizer.statistics.totalUnits)
    const getDetails = useSelector(state => state.organizer.details)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValue = {
      initial: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + getDate.getDate()).slice(-2)}`,
      end: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + (getDate.getDate() + 2)).slice(-2)}`
    }
    useEffect(() => {
      if(!getTop.length || !getTotal.totalVentasFinal || !getTop.length) {
        dispatch(getStatisticsHistory({
          idParty: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
        dispatch(getStatisticsTotal({
          idParty: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
        dispatch(getStatisticsTop5({
          idParty: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
      }
    }, [])
    const others = () => {
      let others = 0
      getTop?.map(e => {
        if(e.bebida !== getTop[0]?.bebida &&
           e.bebida !== getTop[1]?.bebida &&
           e.bebida !== getTop[2]?.bebida &&
           e.bebida !== getTop[3]?.bebida && 
           e.bebida !== getTop[4]?.bebida){
            others = others + e.cantidadFinal
        }
      })
      return others
    }
    const handleClick = (initial, end) => {
      dispatch(getStatisticsHistory({
        idParty: currentUser.id,
        desde: initial,
        hasta: end
      }))
      dispatch(getStatisticsTotal({
        idParty: currentUser.id,
        desde: initial,
        hasta: end
      }))
      dispatch(getStatisticsTop5({
        idParty: currentUser.id,
        desde: initial,
        hasta: end
      }))
    }
  return (
    <div className='home-container'>
        <Header 
            backbutton={() => navigate(-1)}
            welcome={true}
            notification={true}/>
        <div className='title'>
        <h2>Inicio</h2>
        <CalendarButton date={date}/>
        </div>
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
            </div>
            <div className='chart-container'>
                <div className='chart-title'>
                    <h1>top 5 tragos</h1>
                </div>
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
        <TabbarOrganizer active={'home'}/>
    </div>
  )
}

export default OrganizerHome