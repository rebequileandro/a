import React from 'react'
import './Home.scss'
import background from '../../assets/background.mp4'
import smartphone_1 from '../../assets/smartphone_1.png'
import wedrink_logo from '../../assets/wedrink_logo.svg'
const Home = () => {
  return (
    <div id="inicio" className="home-container">
      <video 
        className='video-background'
        src={background} 
        autoPlay={true}
        muted={true} 
        loop={true}/>
        <img className='wedrink_logo' src={wedrink_logo} alt="wedrink"/>
        <div className='baner'>
            <div className='slogan'>
              <div className='cont'>
                <h1>donde la fiesta comienza y termina en tu smartphone</h1>
                <div className='underline'></div>
              </div>
                <p>Con WeDrink, las filas para comprar bebidas en las discotecas es cosa del pasado</p>
                <div className='buttons'>
                    <button className='btn btn--primary'>Soy Fiestero</button>
                    <a className='btn btn--secondary'>Soy Discoteca</a>
                </div>
            </div>
            <img className='smartphone' src={smartphone_1} alt="smartphone_1"/>
        </div>
    </div>
  );
}

export default Home