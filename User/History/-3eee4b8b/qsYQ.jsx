import React from 'react'
import './header.scss'
export const Header = ({name, state, party}) => {
  return (
    <div className='header'>
        <h1>{name}</h1>
        <h2 className='gradient-text'>{state}</h2>
        <h2>{party}</h2>
    </div>
  )
}
