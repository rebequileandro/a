import React, { Fragment, useState } from 'react'
import './drinks.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Searchbar from '../../components/Searchbar/Searchbar'
import Select from '../../components/Select/Select.jsx'
import AddBtn from '../../components/AddBtn/AddBtn'
import FormCard from './FormBottle/FormCard'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useEffect } from 'react'
// import drinks from './drinks.json'
import Item from './Item/Item'
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
                                    <Item name={e.nameDrink} image={e.imageDrink} />
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
                            <div className="drinks__container__right__total-drinks">
                                <h3 className="drinks__container__right__total-drinks__title">Tragos</h3>
                                <h3 className="heading-primary--main heading-primary--rajdhani">{allDrinks?.filter(d => d.typeDrink === "drink").length}</h3>

                            </div>
                            <div className="drinks__container__right__total-drinks">
                                <h3 className="drinks__container__right__total-drinks__title">Botellas</h3>
                                <h3 className="heading-primary--main heading-primary--rajdhani">{allDrinks?.filter(d => d.typeDrink === "bottle").length}</h3>
                            </div>
                            <div className="drinks__container__right__total-drinks">
                                <h3 className="drinks__container__right__total-drinks__title">Sin Alcohol</h3>
                                <h3 className="heading-primary--main heading-primary--rajdhani">{allDrinks?.filter(d => d.typeDrink === "alcoholFree").length}</h3>
                            </div>
                        </div>
                        {!option ?
                            <div className="drinks__container__right__add-btns">
                                <AddBtn label="Agregar botella nueva" onClick={() => setOption("bottle")} />
                                <AddBtn label="Agregar Trago nuevo" onClick={() => setOption("drink")} />
                            </div>
                            :
                            <FormCard option={option} setOption={setOption} />
                        }
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Drinks