import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
export const Header = ({name, state, party}) => {
  return (
    <div className='header'>
        <h1>{name}</h1>
        <h2 className='gradient-text'>{state}</h2>
        <div className='party'>
            <h2>{party}</h2>
            <Link>
                <p>Cambiar</p>
            </Link>
        </div>
    </div>
  )
}
