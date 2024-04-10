import React from 'react'
import WhatIsWeDrink from './WhatIsWeDrink/WhatIsWeDrink'
import './Wedrink.scss'

const Wedrink = () => {
  return (
    <div id="que-es-WeDrink" className='wedrink-container'>
        <WhatIsWeDrink/>
        <div className='with-wedrink'>
            <span className='ellipse one'></span>
            <span className='ellipse two'></span>
            <span className='ellipse three'></span>
            <h1>con wedrink, tu tiempo lo</h1> 
            <h1>usas para divertirte</h1>
            <span className='ellipse-pink one'></span>
            <span className='ellipse-pink two'></span>
            <span className='ellipse-pink three'></span>
        </div>
    </div>
  )
}

export default Wedrink