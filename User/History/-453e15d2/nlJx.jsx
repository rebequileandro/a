import React from 'react'

export const ListItems = (data) => {
  return (
    <div className='data-container'>
    {getCashRegister?.map((e, i) => {
        return <Item key={i} data={e}/>
    })}
  </div>
  )
}
