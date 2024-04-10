import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './Inventory.scss'
import InputDiv from '../../../components/InputDiv/InputDiv'
import CalendarButton from '../../../components/CalendarButton/CalendarButton'
import Item from './Item/Item'
import edit from '../../../assets/icons/icon_edit.svg'
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'
import plus from '../../../assets/icons/Organizer/plus.svg'
import NewBottle from './popupNewBottle/NewBottle'
import { useParams, useNavigate } from 'react-router-dom'
import { getInventory, updateBottle } from '../../../redux/store/slices/Organizer'
import Lottie from "lottie-react";
import loadingAnimation from '../../../assets/loading.json'

const Inventory = () => {
     const currentUser = useSelector((state) => state.user);
     const getBartenders = useSelector(state => state.organizer.bartenderSquares)
     const inventory = useSelector(state => state.organizer.inventory)
     const dispatch = useDispatch()
     const [isOpen, setIsOpen] = useState(false)
     const [isNewBottle, setIsnewBottle] = useState(false)
     const [isEdit, setIsEdit] = useState(false)
     const [date, setDate] = useState(`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear().toString().slice(-2)}`)
     const [isLoading, setIsLoading] = useState(false)
     const [editDrink, setEditDrink] = useState([])
     const [status, setStatus] = useState(false)
     const { id } = useParams() 
     const navigate = useNavigate()

     useEffect(() => {
        dispatch(getInventory({idParty: id}))
     }, [])
     const handleSubmit = () => {
        setIsLoading(true)
        editDrink?.forEach(e => {
            dispatch(updateBottle(e.id, {inventoryGeneral: e.value}))
            .then((response) => {
              if(response.status === 200) {
                if(!status) {
                  setStatus([response.status])
                }
                else {
                  status.push(response.status)
                }
              }
            })
        })
     }
     useEffect(() => {
        if(status?.length === editDrink.length) {
          setEditDrink([])
          alert('si soy')
        }
     }, [status])
     console.log(status)
  return (
    <>
      {isOpen && (
        <CalendarPicker setIsOpen={setIsOpen} setCurrentDate={setDate} />
      )}
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
              <CalendarButton
                style={{ width: "6rem", justifyContent: "center", gap: 5 }}
                onClick={() => setIsOpen(true)}
                date={date}
              />
              <div className="select-wrapper">
                <select>
                  <option>General</option>
                  {getBartenders?.map((e) => (
                    <option key={e.square}>{e.square}</option>
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
            <button className="cancel" onClick={() => setIsEdit(false)}>
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