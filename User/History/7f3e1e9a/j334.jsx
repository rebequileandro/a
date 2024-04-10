import React from 'react'
import './WhatIsWeDrink.scss'
import appStore from '../../../assets/icon_app-store.svg'
import playStore from '../../../assets/icon_play-store.svg'
const WhatIsWeDrink = () => {
  return (
    <div className='what-is-wedrink-container'>
      <div className='baner'>
        <h1>¿fila para pedir tu trago?</h1>
        <h1>eso ya pinchó</h1>
        <p>estamos en el siglo XXI, dejemos que la tecnología haga la fila por nosotros</p>
        <div>
          <button>
            <img src={playStore} alt="play store" />
          </button>
          <button>
            <img src={appStore} alt="app store" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatIsWeDrink