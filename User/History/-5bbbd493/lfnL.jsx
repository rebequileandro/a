import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/app')
        }, 3500);
    })
  return (
    <div className='landing'>
        <div className='logo'>
            <span>LR</span>
        </div>
    </div>
  )
}
