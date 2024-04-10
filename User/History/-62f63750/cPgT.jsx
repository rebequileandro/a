//bartman screens header component
import React from 'react'
import'./HeaderBarman.scss'

export const HeaderBarman = ({name}) => {
  return (
    <div className='container-header-barman'>
        <div className='header'>
            <h1>WeDrink</h1>
        </div>
        <p>Bienvenido {name}</p>
    </div>
  )
}
