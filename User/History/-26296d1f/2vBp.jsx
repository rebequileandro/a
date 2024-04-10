import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './Inventory.scss'
import InputDiv from '../../../components/InputDiv/InputDiv'
import Item from './Item/Item'
import edit from '../../../assets/icons/icon_edit.svg'
import plus from '../../../assets/icons/Organizer/plus.svg'
import NewBottle from './popupNewBottle/NewBottle'
import { useParams, useNavigate } from 'react-router-dom'
import { getInventory, setInventoryBar, updateBottle } from '../../../redux/store/slices/Organizer'
import Lottie from "lottie-react";
import loadingAnimation from '../../../assets/loading.json'

const Inventory = () => {
     const currentUser = useSelector((state) => state.user);
     const getBartenders = useSelector(state => state.organizer.bartenderSquares)
     const inventory = useSelector(state => state.organizer.inventory)
     const dispatch = useDispatch()
     const [isNewBottle, setIsnewBottle] = useState(false)
     const [isEdit, setIsEdit] = useState(false)
     const [isLoading, setIsLoading] = useState(true)
     const [editDrink, setEditDrink] = useState([])
     const [editDrinkBar, setEditDrinkBar] = useState([])
     const [selected, setSelected] = useState('general')
     const { id } = useParams() 
     const navigate = useNavigate()

     useEffect(() => {
        dispatch(getInventory({idParty: id}))
     }, [])
     const handleSubmit = () => {
        setIsLoading(true)

        if(selected !== 'general') {
          dispatch(setInventoryBar(editDrinkBar[0].id, {inventorySquare: editDrinkBar}))
          .then((response) => {
            setIsLoading(false)
            setIsEdit(false)
            }
          )
        }
        else{
          editDrink?.forEach((e) => {
            dispatch(updateBottle(e.id, { inventoryGeneral: e.value }))
            .then(() => {
              setIsLoading(false)
              setIsEdit(false)
              }
            )
          })
        }
     }
     
  return (
    <>
      <NewBottle setIsnewBottle={setIsnewBottle} isNewBottle={isNewBottle} />
      <div className="inventory-container">
        <Header backbutton={() => navigate(`/mis-locales/${id}`)} />
        <div className="inventory-header">
          <div className="inventory-header-container">
            <div className="calendar-path-container">
              {currentUser.rol === "organizador" ? (
                <div className="path-party">
                  <p className="path">inventario</p>
                </div>
              ) : (
                <p className="path">inventario</p>
              )}
              <div className="select-wrapper">
                <select onChange={(e) => {
                  setEditDrinkBar([])
                  setSelected(e.target.value)}}>
                  <option value={'general'}>General</option>
                  {getBartenders?.map((e) => (
                    <option value={e.square} key={e.square}>{e.square}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search">
              <InputDiv
                inputProps={{
                  name: "invetario",
                  placeholder: "Buscar",
                }}
              />
            </div>
          </div>
        </div>
        <div className="items-container">
          {inventory?.map((e, i) => (
            <Item
              key={i}
              isEdit={isEdit}
              nameCategory={e.drink}
              content={e.brand}
              setEditDrink={setEditDrink}
              editDrink={editDrink}
              bar={selected}
              editDrinkBar={editDrinkBar}
              setEditDrinkBar={setEditDrinkBar}
            />
          ))}
          {isEdit && (
            <div className="add-bottle" onClick={() => setIsnewBottle(true)}>
              <span>Agregar botella</span>
              <img src={plus} alt="mas" />
            </div>
          )}
        </div>
        {isEdit && (
          <div className="save-cancel">
            <button className="save" onClick={() => handleSubmit()}>
              {isLoading ? (
                <Lottie
                  animationData={loadingAnimation}
                  className="loading-animation"
                  loop={true}
                />
              ) : (
                "Guardar cambios"
              )}
            </button>
            <button className="cancel" onClick={() => {
              setIsEdit(false)
              setIsLoading(false)
              }}>
              Cancelar
            </button>
          </div>
        )}
        {!isEdit && (
          <button className="edit" onClick={() => setIsEdit(true)}>
            <img src={edit} alt="editar" />
          </button>
        )}
        {currentUser.rol === "unitManager" && (
          <TabbarOrganizer active={"drinks"} />
        )}
      </div>
    </>
  );
}
 
export default Inventory