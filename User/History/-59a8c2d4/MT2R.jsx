import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CalendarButton from '../../../../components/CalendarButton/CalendarButton'
import CalendarPicker from '../../../../components/CalendarPicker/CalendarPicker'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
import PdfButton from '../../../../components/PdfButton/PdfButton'
import Item from '../../Items/Items'
import './StatisticsDetails.scss'
const StatisticsDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getDate = new Date()
    const { name, type } = useParams()
    const getHistory = useSelector(state => state.organizer.statisticsDetails.history)
    const getTop = useSelector(state => state.organizer.statisticsDetails.top5)
    const [data, setData] = useState([])
    const [date, setDate] = useState(`${new Date().toLocaleDateString()}`)
    const [isOpen, setIsOpen] = useState(false)
    const initialValue = {
        initial: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + getDate.getDate()).slice(-2)}`,
        end: `${getDate.getFullYear()}-${("0"+(getDate.getMonth()+1)).slice(-2)}-${("0" + (getDate.getDate() + 2)).slice(-2)}`
      }
    useEffect(() => {
        if(type === "total-facturado"){
            setData(getHistory)
        }
        if(type === "mas-pedidos") {
            setData(getTop)
        }
    }, [])
    const handleClick = (initial, end) => {
        dispatch(getStatisticsTotal({
          idParty: id,
          desde: initial,
          hasta: end
        }))
        dispatch(getStatisticsTop5({
          idParty: id,
          desde: initial,
          hasta: end
        }))
        dispatch(getStatisticsHistory({
          idParty: id,
          desde: initial,
          hasta: end
        }))
      }
  return (
      <>
        <div className="statistics-details-container">
        <Header
            backbutton={() => navigate(-1)}
            OrganizerParty={{
            party: "mis estadisticas",
            path: `${name} > ${type}`,
            }}
        />
        <div className="statistics-header">
            <div className="buttons">
            <PdfButton />
            <CalendarButton date={date} onClick={() => setIsOpen(true)}/>
            </div>
            <div className="search-bar">
            <InputDiv inputProps={{ name: "name", placeholder: "Buscar" }} />
            </div>
        </div>
        <div className="data-container">
            {data.map((e, i) =>
            type === "total-facturado" ? (
                <Item
                key={i}
                data={{
                    date: e.Fecha,
                    total: `$${e.Total}`,
                }}
                />
            ) : type === "mas-pedidos" ? (
                <Item
                key={i}
                data={{
                    name: e.bebida,
                    total: e.cantidadFinal,
                }}
                />
            ) : null)}
            <hr />
        </div>
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

export default StatisticsDetails