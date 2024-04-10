import React from 'react'
import './ListItems.scss'
export const ListItems = (data) => {
  return (
    <div className='list-items-container'>
    {getCashRegister?.map((e, i) => {
        return <Item key={i} data={e}/>
    })}
  </div>
  )
}
