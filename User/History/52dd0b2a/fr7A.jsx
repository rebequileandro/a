import React, { useState } from 'react'
import './Items.scss'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
const Item = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='item-activities-container'>
        <hr/>
        <div className='row-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='item'>
              {data?.time ?
                <p>{new Date(data?.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                :
                data?.date ?  <p>{new Date(data?.date).toLocaleDateString()}</p>
                :null}
              <div className='name'>
                <p>{data?.name}</p>
              </div>
              <p>{data?.total}</p>
              {data?.details &&
                <img className={`row-image ${isOpen && "show"}`} src={arrow} alt="desplegar"/>}
            </div>
        </div>
        <div className={`content ${isOpen && "show-content"}`}>
        {data?.details?.map((e) => (
            <div className='item-content' key={e.title}>
                {Object.keys(e).map(key => (
                    <p>{key} <span>{e[key]}</span></p>
                ))}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Item