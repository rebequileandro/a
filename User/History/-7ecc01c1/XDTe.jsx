// load component
import React from 'react'
import './Loader.scss'
import loading from '../../../assets/icons/loading .svg'
export const Loading = () => {
  return <img className='loader' src={loading} alt="loading"/>
}
