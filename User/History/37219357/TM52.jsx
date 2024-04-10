import React, { useEffect, useRef } from 'react'
import './Navbar.scss'
import wedrink from '../../assets/wedrink_logo.svg'
import home from '../../assets/navbar/icon_home.svg'
import phone from '../../assets/navbar/icon_phone.svg'
import like from '../../assets/navbar/icon_like.svg'
import party from '../../assets/navbar/icon_party.svg'
import download from  '../../assets/navbar/icon_download.svg'
import selectedHome from '../../assets/navbar/selected-icons/selected_home.svg'
import selectedPhone from  '../../assets/navbar/selected-icons/selected_phone.svg'
import selecetedLike from  '../../assets/navbar/selected-icons/selected_like.svg'
import selectedParty from  '../../assets/navbar/selected-icons/selected_party.svg'

const Navbar = () => {
    const homeRef = useRef()
    const weDrinkRef = useRef()
    const partyRef = useRef()
    const contactRef = useRef()

    useEffect(() => {
        const navLinks = document.querySelectorAll('.navigation a[href^="#"]')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                const id = e.target.getAttribute("id")
                const link = document.querySelector(`.navigation a[href="#${id}"]`)
                if(e.isIntersecting) {
                    link.classList.add("selected")
                }
                else {
                    link.classList.remove("selected")
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
    console.log(weDrinkRef.current)
  return (
    <div className="navbar-container">
      <img className="logo-nav" src={wedrink} alt="wedrink" />
      <nav className="navigation desktop">
        <a href="#inicio">Inicio</a>
        <a href="#que-es-WeDrink">Que es WeDrink</a>
        <a href="#afilia-tu-discoteca">Afilia tu Discoteca</a>
        <a href="#contacto">Contacto</a>
        <a herf="#download" className="btn btn--primary">Descargar WeDrink</a>
      </nav>
      <nav className="navigation mobile">
        <a href="#inicio">
          <img
            src={homeRef.current?.classList.contains("selected") ? selectedHome : home}
            alt="inicio"
          />
        </a>
        <a ref={weDrinkRef} href="#que-es-WeDrink">
          <img
            src={
                weDrinkRef.current?.classList.contains("selected")  ? selectedPhone : phone
            }
            alt="WeDrink"
          />
        </a>
        <a ref={partyRef} href="#afilia-tu-discoteca">
          <img
            src={partyRef.current?.classList.contains("selected") ? selecetedLike : like}
            alt="beneficios"
          />
        </a>
        <a ref={contactRef} href="#contacto">
          <img
            src={
                contactRef.current?.classList.contains("selected") ? selectedParty : party
            }
            alt="Discoteca"
          />
        </a>
        <a id="download_ID">
          <img src={download} alt="descargar" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar