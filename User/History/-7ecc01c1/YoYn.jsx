// load component
import React from 'react'
import './Loader.scss'
import loading from '../../../assets/icons/loading .svg'
export const Loading = () => {
  return (
    <div className='loader-wrapper'>
      <img className='loader-wrapper__loader' src={loading} alt="loading"/>
    </div>
  )
}
