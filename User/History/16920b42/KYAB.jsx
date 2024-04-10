import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import arrowRight from '../../../../assets/buttons/arrow-right.svg'
import '../UnitManagerSettings.scss'

export const UnitManagerSettingsBarmans = () => {
    const navigate = useNavigate()
    const organizerParty = {party: 'ajustes', path: 'barmans'}
    const [bar, setBar] = useState([{   bar: 'barra 1', barmans: []  }])
    const barmans = [
        {
            name: 'tincho',
            email: 'tincho@gmail.com',
            bar: '1',
            id: '123443345345'
        },
        {
            name: 'alan',
            email: 'alan@gmail.com',
            bar: '1',
            id: '12344352534gf5345'
        },
        {
            name: 'tincho',
            email: 'tincho@gmail.com',
            bar: '2',
            id: '123443a525345345'
        },
        {
            name: 'tincho',
            email: 'tincho@gmail.com',
            bar: '1',
            id: '123125345345'
        },
        {
            name: 'tincho',
            email: 'tincho@gmail.com',
            bar: '2',
            id: '1234'
        }
    ]
    const sotBars = (e) => {
        bar.map((j, i) => {
            if(j.bar === `barra ${e.bar}`) {
                let isBarman = bar[i].barmans.filter(f => f.id === e.id)
                if(!isBarman.length) {
                    setBar([
                        ...bar,
                        bar[i].barmans = [
                            ...bar[i].barmans, 
                            e
                        ]
                    ])
                }
            }
            if(j.bar !== `barra ${e.bar}`) {
                setBar([
                    ...bar,
                    {
                        bar: [`barra ${e.bar}`], 
                        barmans:[e]
                    }
                ])
            }
        })
    }
    useEffect(() => {
        barmans.forEach((e) => {
           sotBars(e)
        })
    }, [])

  return (
    <div className='unit-manager-settings-container'>
        <Header backbutton={() => navigate(-1)} OrganizerParty={organizerParty}/>
        {bar.map((e, i) => (
            <>
            <div className='row-container'/>
            <div className='row-container'>
                <h2>{e.bar}</h2>
            </div>
            <hr/>
            {e.barmans?.map(barman => (
                <>
                <div className='row-container' onClick={() => navigate(`/settings/${'barmans'}/${barman.id}/${bar.length}`)}>
                <p>{barman.name}</p>
                <img src={arrowRight} alt="flecha"/>
                </div>
                <hr/>
                </>
            ))}
            </>
        ))}
    </div>
  )
}
