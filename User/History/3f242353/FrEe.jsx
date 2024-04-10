import React from 'react'
import './gradient-text.scss'
export const GradientText = ({route, text}) => {
  return (
    <div className='gradient-text'>
        <a href={route}>{text}</a>
    </div>
  )
}
