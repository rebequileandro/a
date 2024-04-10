import React from 'react'
import Item from './Items/Items'
import './ListItems.scss'
export const ListItems = (data) => {
  return (
    <div className='list-items-container'>
    {data?.map((e, i) => {
        return <Item key={i} data={e}/>
    })}
  </div>
  )
}
