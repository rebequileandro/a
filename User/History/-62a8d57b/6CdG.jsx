import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './OrganizerHome.scss'
import { ChartOR } from '../../../components/Chart/Chart'
import { useNavigate } from 'react-router-dom'
import calendar from '../../../assets/icons/Organizer/icon_calendar.svg'
import { useDispatch, useSelector } from 'react-redux'
import CalendarButton from '../../../components/CalendarButton/CalendarButton'
import { getStatisticsHistory, getStatisticsTop5, getStatisticsTotal } from '../../../redux/store/slices/Organizer'
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'
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
       
        dispatch(getStatisticsHistory({
          idOrganizer: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
        dispatch(getStatisticsTotal({
          idOrganizer: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
        dispatch(getStatisticsTop5({
          idOrganizer: currentUser.id,
          desde: initialValue.initial,
          hasta: initialValue.end
        }))
      
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
        idOrganizer: currentUser.id,
        desde: initial,
        hasta: end
      }))
      dispatch(getStatisticsTotal({
        idOrganizer: currentUser.id,
        desde: initial,
        hasta: end
      }))
      dispatch(getStatisticsTop5({
        idOrganizer: currentUser.id,
        desde: initial,
        hasta: end
      }))
    }
  return (
    <>
      <div className="home-container">
        <Header
          backbutton={() => navigate(-1)}
          welcome={true}
          notification={true}
        />
        <div className="title">
          <h2>Inicio</h2>
          <CalendarButton date={date} onClick={() => setIsOpen(true)} />
        </div>
        <div className="data-container">
          <div className="secodary-container">
            <h2>total facturado</h2>
            <div className="number-container">
              <h1>${getTotal.totalVentasFinal}</h1>
              {/* <p style={{ color: totalPorsents >= 1 ? "#17b029" : "#b00009" }}>
                    {totalPorsents >= 1 ? "+" : null}
                    {totalPorsents}%
                </p> */}
            </div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-title">
            <h1>top 5 tragos</h1>
          </div>
          <div className="chart-wrapper">
            <div className="chart">
              <div className="total">
                <h2>total</h2>
                <h1>{getTotalUnits}</h1>
              </div>
              <ChartOR
                first={{
                  total: getTop[0]?.cantidadFinal,
                  name: getTop[0]?.bebida
                }}
                second={{
                  total: getTop[1]?.cantidadFinal,
                  name: getTop[1]?.bebida
                }}
                third={{
                  total: getTop[2]?.cantidadFinal,
                  name: getTop[2]?.bebida
                }}
                fourth={{
                  total: getTop[3]?.cantidadFinal,
                  name: getTop[3]?.bebida
                }}
                fifth={{
                  total: getTop[4]?.cantidadFinal,
                  name: getTop[4]?.bebida
                }}
                others={others()}
              />
            </div>

            {/* <div className="first">
              {getTop[0]?.cantidadFinal && (
                <>
                  <span>{getTop[0]?.bebida}</span>
                  <p>{`(${getTop[0]?.cantidadFinal} un.)`}</p>
                </>
              )}
            </div>
            <div className="second">
              {getTop[1]?.cantidadFinal && (
                <>
                  <span>{getTop[1]?.bebida}</span>
                  <p>{`(${getTop[1]?.cantidadFinal} un.)`}</p>
                </>
              )}
            </div>
            <div className="third">
              {getTop[2]?.cantidadFinal && (
                <>
                  <span>{getTop[2]?.bebida}</span>
                  <p>{`(${getTop[2]?.cantidadFinal} un.)`}</p>
                </>
              )}
            </div>
            <div className="others">
              {others() > 0 && (
                <>
                  <span>OTROS</span>
                  <p>{`(${others()} un.)`}</p>
                </>
              )}
            </div>
            <div className="fourth">
              {getTop[3]?.cantidadFinal && (
                <>
                  <span>{getTop[3]?.bebida}</span>
                  <p>{`(${getTop[3]?.cantidadFinal} un.)`}</p>
                </>
              )}
            </div>
            <div className="fifth">
              {getTop[4]?.cantidadFinal && (
                <>
                  <span>{getTop[4]?.bebida}</span>
                  <p>{`(${getTop[4]?.cantidadFinal} un.)`}</p>
                </>
              )}
            </div> */}
          </div>
        </div>
        <TabbarOrganizer active={"home"} />
      </div>
      {isOpen && (
        <CalendarPicker
          onClick={handleClick}
          setIsOpen={setIsOpen}
          currentDate={date}
          setCurrentDate={setDate}
        />
      )}
    </>
  );
}

export default OrganizerHome