import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import arrowRight from '../../../../assets/buttons/arrow-right.svg'
import '../UnitManagerSettings.scss'

export const UnitManagerSettingsBarmans = () => {
    const navigate = useNavigate()
    const organizerParty = {party: 'ajustes', path: 'barmans'}
    const [bar, setBar] = useState([{   barra1: []  }])
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
    useEffect(() => {
        barmans.forEach((e) => {
            let isBar =  bar.filter((f)=> [`barra${e.bar}`] in f)
            let index = bar.findIndex(i => [`barra${e.bar}`] in i)
            let isBarObj = isBar[0]
            if(isBarObj ? [`barra${e.bar}`] in isBarObj : null) {
                console.log(index)
                // setBar([
                //     ...bar,
                //     bar[i][`barra${e.bar}`] = [
                //         ...bar[i][`barra${e.bar}`], 
                //         e
                //     ]
                // ])
            }



            // bar.map((j, i) => {
            //     for (let key in j) {
            //         if(key === `barra${e.bar}`) {
            //             let isBarman =  bar[i][`barra${e.bar}`].filter(f => f.id === e.id)
            //             if(!isBarman.length){
            //                 setBar([
            //                     ...bar,
            //                     bar[i][`barra${e.bar}`] = [
            //                         ...bar[i][`barra${e.bar}`], 
            //                         e
            //                     ]
            //                 ])
            //             }
            //         }
            //         else {
            //             setBar([
            //                 ...bar,
            //                 {[`barra${e.bar}`]:[e]}
            //             ])
            //         }
            //     }
            // })
        })
    }, [])
    
  return (
    <div className='unit-manager-settings-container'>
        <Header backbutton={() => navigate(-1)} OrganizerParty={organizerParty}/>
        {bar.map((e, i) => (
            <>
            <div className='row-container'/>
            <div className='row-container'>
                <h2>{`barra ${i + 1}`}</h2>
            </div>
            <hr/>
            {e[`barra${i + 1}`]?.map(barman => (
                <>
                <div className='row-container'>
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
