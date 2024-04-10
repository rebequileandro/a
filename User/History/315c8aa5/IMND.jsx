import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/global/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './OrganizerHome.scss'
import { Chart } from '../../../components/organizer/Chart/Chart'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CalendarButton from '../../../components/organizer/CalendarButton/CalendarButton'
import { getStatisticsHistory, getStatisticsTop5, getStatisticsTotal } from '../../../redux/store/slices/Organizer'
import CalendarPicker from '../../../components/organizer/CalendarPicker/CalendarPicker'
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
              <Chart
                first={{
                  value: getTop[0]?.cantidadFinal,
                  label: getTop[0]?.bebida
                }}
                second={{
                  value: getTop[1]?.cantidadFinal,
                  label: getTop[1]?.bebida
                }}
                third={{
                  value: getTop[2]?.cantidadFinal,
                  label: getTop[2]?.bebida
                }}
                fourth={{
                  value: getTop[3]?.cantidadFinal,
                  label: getTop[3]?.bebida
                }}
                fifth={{
                  value: getTop[4]?.cantidadFinal,
                  label: getTop[4]?.bebida
                }}
                others={others()}
              />
            </div>
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