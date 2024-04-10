import React from 'react'
import WhatIsWeDrink from './WhatIsWeDrink/WhatIsWeDrink'
import './Wedrink.scss'

const Wedrink = () => {
  return (
    <div id="que-es-WeDrink" className='wedrink-container'>
        <WhatIsWeDrink/>
        <div className='with-wedrink'>
            <h1>con wedrink, tu tiempo lo usas para divertirte</h1>
            <span className='ellipse 1'></span>
            <span className='ellipse 2'></span>
            <span className='ellipse 3'></span>

        </div>
    </div>
  )
}

export default Wedrink