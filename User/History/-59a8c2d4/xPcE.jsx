import React, { useEffect, useState } from 'react'
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
    const getTop = useSelector(state => state.organizer.statisticsDetails.top5)
    const [data, setData] = useState([])
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
  return (
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
          <CalendarButton />
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
  );
}

export default StatisticsDetails