import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate
    setTimeout(() => {
        navigate('/home')
    }, 1000);
  return (
    <div className='landing'></div>
  )
}
