import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/app/home')
        }, 1500);
    })
  return (
    <div className='landing'>
        
    </div>
  )
}
