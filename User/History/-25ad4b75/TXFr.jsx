import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import code from '../../assets/code.gif'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import { MyProjects } from '../Slider/Slider'
import { Skills } from '../Skills/Skills'

export const Home = () => {
    return (
        <div>
            <div style={{width: '4em'}}>
                <Link to='/' className={styles.link}>
                    <button className={styles.btn}>{'<<'}</button>
                </Link>
            </div>
            <div className={styles.home}>
                <div className={styles.header}>
                    <div className={styles.general}>
                        <div className={styles.left}>
                        <img className={styles.image} src={code} alt="not found"/>
                        <div className={styles.contact}>
                            <div className={styles.colums}>
                                <a href="https://github.com/rebequileandro1398" target="_blank">
                                    <img className={styles.icon} src={github} alt="not found"/>
                                </a>
                                <a href="https://www.linkedin.com/in/leandro-rebequi-dev/" target='_blank'>
                                    <img className={styles.icon} src={linkedin} alt="not found"/>
                                </a>
                            </div>
                            <div className={styles.colums}>
                                <a href="mailto:rebequileandro@gmail.com" target='_blank'>
                                    <img className={styles.icon} src={gmail} alt="not found"/>
                                </a>
                                <a href="https://wa.me/+5493435442575" target='_blank'>
                                <img className={styles.icon} src={whatsapp} alt="not found"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        <div className={styles.container}>
                            <div>
                                <h2 className={styles.title}>Acerca de</h2>
                                <p className={styles.content}>
                                    Hola mi nombre es Leandro Rebequi soy desarrollador Full Stack (P.E.R.N), 
                                    una gran parte de mis conocimiento los adquirí en Henry, una academia que 
                                    se dedica a formar y preparar desarrolladores para el mundo laboral, 
                                    otra parte los conseguí por mi propia cuenta, por curiosidad o por la 
                                    necesidad de incorporar otras herramientas a un proyecto.

                                </p>
                            </div>
                            <p className={styles.contentFtr}>
                                A continuación podrás encontrar algunos proyectos en los que he trabajado,
                                clickea sobre el nombre para ver mas detalles .
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <MyProjects/>
                </div>
                <div>
                    <Skills/>
                </div>
            </div>
        </div>
    )
}
