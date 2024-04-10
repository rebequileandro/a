import React, { useEffect, useState } from 'react'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import { Chart } from '../../../components/Chart/Chart'
import { useReactToPrint } from "react-to-print";
import CalendarButton from '../../../components/CalendarButton/CalendarButton'
import PdfButton from '../../../components/PdfButton/PdfButton'
import './Statistics.scss'
import { Header } from '../../../components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'
import { getStatisticsHistory, getStatisticsTop5, getStatisticsTotal } from '../../../redux/store/slices/Organizer';
export const Statistics = () => {
  const getDate = new Date()
  const [date, setDate] = useState({
    preview:`${new Date().toLocaleDateString()}`,
    initial: '',
    end:''
  })
  const getTotal = useSelector(state => state.organizer.statisticsDetails.total)
  const getTop = useSelector(state => state.organizer.statisticsDetails.top5)
  const getTotalUnits = useSelector(state => state.organizer.statisticsDetails.totalUnits)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getStatisticsHistory({idParty: id}))
    dispatch(getStatisticsTotal({
      idParty: id,
      desde: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + getDate.getDate()).slice(-2)}`,
      hasta: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + (getDate.getDate() + 2)).slice(-2)}`
    }))
    dispatch(getStatisticsTop5({idParty: id}))
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
  const handleClick = () => {
    dispatch(getStatisticsTotal({
      idParty: id,
      desde: date.initial,
      hasta: date.end
    }))
  }
  return (
    <>
      <div className="statistics-container">
        <Header
          backbutton={() => navigate(-1)}
          welcome={true}
          notification={true}/>
        <div className={"title"}>
          <PdfButton />
          <CalendarButton date={date.preview} onClick={() => setIsOpen(true)}/>
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
          <div className="secodary-container">
            <h2>clientes</h2>
            <div className="number-container">
              <h1>{getTotal.totalcantidadpedidos}</h1>
              {/* <p style={{ color: clietporsents >= 1 ? "#17b029" : "#b00009" }}>
                {clietporsents >= 1 ? "+" : null}
                {clietporsents}%
              </p> */}
            </div>
          </div>
        </div>
        <div className="chart-container">
          <h1>pedidos</h1>
          <div className="chart-wrapper">
            <div className="chart">
              <div className="total">
                <h2>total</h2>
                <h1>{getTotalUnits}</h1>
              </div>
              <Chart
                first={getTop[0]?.cantidadFinal}
                second={getTop[1]?.cantidadFinal}
                third={getTop[2]?.cantidadFinal}
                fourth={getTop[3]?.cantidadFinal}
                fifth={getTop[4]?.cantidadFinal}
                others={others()}
              />
            </div>
           { getTop.length ?
           <>
           <div className="first">
              <span>{getTop[0]?.bebida}</span>
              <p>{`(${getTop[0]?.cantidadFinal} un.)`}</p>
            </div>
            <div className="second">
              <span>{getTop[1]?.bebida}</span>
              <p>{`(${getTop[1]?.cantidadFinal} un.)`}</p>
            </div>
            <div className="third">
              <span>{getTop[2]?.bebida}</span>
              <p>{`(${getTop[2]?.cantidadFinal} un.)`}</p>
            </div>
            <div className="others">
              <span>OTROS</span>
              <p>{`(${others()} un.)`}</p>
            </div>
            <div className="fourth">
              <span>{getTop[3]?.bebida}</span>
              <p>{`(${getTop[3]?.cantidadFinal} un.)`}</p>
            </div>
            <div className="fifth">
              <span>{getTop[4]?.bebida}</span>
              <p>{`(${getTop[4]?.cantidadFinal} un.)`}</p>
            </div>
           </> : null}
          </div>
        </div>
        <div className="data-container">
          <div className="secodary-container">
            <h2>valor pedido promedio</h2>
            <div className="number-container">
              <h1>${Math.floor(getTotal.valorPromedioPedido)}</h1>
              {/* <p style={{ color: totalPromedio >= 1 ? "#17b029" : "#b00009" }}>
                {totalPromedio >= 1 ? "+" : null}
                {totalPromedio}%
              </p> */}
            </div>
          </div>
        </div>
        <TabbarOrganizer active={"statistics"} />
      </div>
      {isOpen && 
      <CalendarPicker
        onClick={handleClick}
        setIsOpen={setIsOpen} 
        currentDate={date} 
        setCurrentDate={setDate}/>}
    </>
  );
}
