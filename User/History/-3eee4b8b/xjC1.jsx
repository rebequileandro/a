import React from 'react'
import { GradientText } from '../gradient-text-redirect/GradientText'
import './header.scss'
export const Header = ({name, party}) => {
  return (
    <div className='header'>
        <h1>{name}</h1>
        <h2 className='party'>{party}</h2>
    </div>
  )
}
