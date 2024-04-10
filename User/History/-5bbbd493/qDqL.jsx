import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 1500);
    })
  return (
    <div className='landing'>
        <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
    </div>
  )
}
