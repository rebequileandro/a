import React, { useEffect, useRef, useState } from 'react'
import './Navbar.scss'
import wedrink from '../../assets/wedrink_logo.svg'

const Navbar = () => {
    const [media, setMedia] = useState({
      matches: window.innerWidth > 768 ? true : false
    })
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navigation a[href^="#"]')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                const id = e.target.getAttribute("id")
                const link = document.querySelector(`.navigation a[href="#${id}"]`)
                const icon = document.querySelector(`.navigation a[href="#${id}"] .icon-container .icon-nav`)
                if(e.isIntersecting) {
                    link.classList.add("selected")
                    icon.classList.add("selected")
                  }
                  else {
                    link.classList.remove("selected")
                    icon.classList.remove("selected")

                }
            })
        }, {
            rootMargin: "-50% 0px -50% 0px"
        })
        navLinks.forEach(e => {
            const hash = e.getAttribute("href")
            const target = document.querySelector(hash)
            if(target){
                observer.observe(target)
            }
        })
    }, []) 
    useEffect(() => {
      let mediaQuery = window.matchMedia("(max-width: 992px)");
      mediaQuery.addListener(setMedia);
      return () => mediaQuery.removeListener(setMedia)
    }, [])
    console.log(media.matches)
  return (
    <div className="navbar-container">
      <img className="logo-nav" src={wedrink} alt="wedrink" />
      <nav className="navigation desktop">
        <a href="#inicio">
          {media ? (
            <div className="icon-container">
              <span className='icon-nav home'/>
              <span>Inicio</span>
            </div>
          ) : (
            "Inicio"
          )}
        </a>
        <a href="#que-es-WeDrink">
          {media ? (
            <div className="icon-container">
              <span className='icon-nav wedrink'/>
              <span>WeDrink</span>
            </div>
          ) : (
            "Que es WeDrink"
          )}
        </a>
        <a href="#como-funciona">
          {media ? (
            <div className="icon-container">
              <span className='icon-nav beneficios'/>
              <span>Beneficios</span>
            </div>
          ) : (
            "Como funciona"
          )}
        </a>
        <a href="#contacto">
          {media ? (
            <div className='icon-container'>
              <span className='icon-nav party'/>
              <span>Discotecas</span>
            </div>
          ) : (
            "Soporte"
          )}
        </a>
        <a href="#download" className={ media ? "" : "btn btn--primary"}>
          {media ? (
            <div className='icon-container'>
              <span className='icon-nav download'/>
              <span>Descargar</span>
            </div>
          ) : (
            "Descargar WeDrink"
          )}
        </a>
      </nav>
    </div>
  );
}

export default Navbar