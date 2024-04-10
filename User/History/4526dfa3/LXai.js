import React, { Fragment, useState } from 'react'
import './drinks.scss'
import Select from '../../components/Select/Select.jsx'
import AddBtn from '../../components/AddBtn/AddBtn'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useEffect } from 'react'
import Item from './Item/Item'
import FormBottle from './Form/FormBottle'
import FormDrink from './Form/FormDrink'
import FormEdit from './Form/FormEdit'
const Drinks = () => {
    const [input, setInput] = useState(false)
    const [option, setOption] = useState(false)
    const [allDrinks, setAllDrinks] = useState([])

    const getAllDrinks = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API}/shooza/drink/all`)
            setAllDrinks(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllDrinks()
    }, [])

    const totalDB = [
        {
            title: "Tragos",
            total: allDrinks?.filter(d => d.typeDrink === "drink").length
        },
        {
            title: "Botellas",
            total: allDrinks?.filter(d => d.typeDrink === "bottle").length
        },
        {
            title: "Sin Alcohol",
            total: allDrinks?.filter(d => d.typeDrink === "alcoholFree").length
        }
    ]
    return (
        <Layout active={"drink"}>
            <div className='drinks'>
                <div className='drinks__container'>
                    <div className="drinks__container__left">
                        <Select
                            placeholder="Elige una categoría"
                            label="Bebidas"
                            onChange={setInput}
                            options={[
                                "bottle",
                                "drink",
                                "alcoholFree",
                            ]}
                            icon
                        />
                        <ul className='drinks__container__left__list'>
                            {allDrinks?.filter(d =>
                                input ?
                                    d.typeDrink === input
                                    :
                                    d
                            )?.map((e, i, arr) => (
                                <Fragment key={i}>
                                    <Item data={e} setEdit={setOption} />
                                    {i < arr.length - 1 &&
                                        <div className='drinks__container__left__list__line' />
                                    }
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                    <div className="drinks__container__right">
                        <h2 className="drinks__container__right__title">Total Base de Datos - Bebidas</h2>
                        <div className="drinks__container__right__total-drinks-wrapper">
                            {totalDB?.map(e => (
                                <div key={e.title} className="drinks__container__right__total-drinks">
                                    <h3 className="drinks__container__right__total-drinks__title">{e.title}</h3>
                                    <h3 className="heading-primary--main heading-primary--rajdhani">{e.total}</h3>
                                </div>
                            ))}
                        </div>
                        {!option ?
                            <div className="drinks__container__right__add-btns">
                                <AddBtn label="Agregar botella nueva" onClick={() => setOption("bottle")} />
                                <AddBtn label="Agregar Trago nuevo" onClick={() => setOption("drink")} />
                            </div>
                            :
                            option === "bottle" ? <FormBottle setOption={setOption} /> :
                                option === "drink" ? <FormDrink setOption={setOption} /> :
                                    <FormEdit setOption={setOption} data={option} />
                        }
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Drinks