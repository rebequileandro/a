import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
import SelectDiv from '../../../../components/SelectDiv/SelectDiv'
import arrowRight from '../../../../assets/buttons/arrow-right.svg'
import '../OrganizerSettings.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getTeam, teamParty, updateTeam } from '../../../../redux/store/slices/Organizer'
import Lottie from "lottie-react";
import loadingAnimation from '../../../../assets/loading.json'
export const EditRole = ({role}) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getBartenders = useSelector(state => state.organizer.bartenderSqueres)
  const getCashiers = useSelector(state => state.organizer.cashierSqueres)
  const getDetails = useSelector(state => state.organizer.details[0])
  const [isLoading, setIsLoading] = useState(false)
  const getUser = useSelector(state => state.user)
  const [options, setOptions] = useState({})
  const [input, setInput] = useState({
    name: '',
    email: '',
    square: '',
  })
  const handleChange = (type) => (value) => {
      setInput({
        ...input,
        [type]: value
      })
  }
  const getOptions = (element) => {
    let opt = {}
    element.forEach(e => {
      opt = {
        ...opt, [e.square]: e.square
      }
    })
    setOptions(opt)
  }
  const generatePassword = (num) => {
    let length = num,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  useEffect(() => {
    if(role === "bartender"){
      let bartender;
      getBartenders?.forEach(e => {
        let filter = e.worker.filter(f => f._id === id)
        filter.length && (bartender = filter)
      })
      setInput({
        ...input,
        name: bartender[0]?.name,
        email: bartender[0]?.email,
        square: bartender[0]?.square,
      })
      getOptions(getBartenders)
    }
    if(role === "cashier"){
      let cashier;
      getCashiers?.forEach(e => {
        let filter = e.worker.filter(f => f._id === id)
        if(filter.length) cashier = filter
      })
      setInput({
        ...input,
        name: cashier[0]?.name,
        email: cashier[0]?.email,
        square: cashier[0]?.square,
      })
      getOptions(getCashiers)
    }
    if(role === "unitManager"){
      setInput({
        name: getDetails.unitManager.name,
        email: getDetails.unitManager.email
      })
    }
  }, [])

  const handleSubmit = () => {
    setIsLoading(true)
    if(role === "newCashier" || role === "newBartender"){
        dispatch(teamParty({
          name: input.name,
          email: input.email,
          password: generatePassword(5),
          rol: `${role === "newCashier" ? "cashier" : "bartender"}`,
          idParty: getDetails._id,
          idOrganizer: getUser?.id,
          idBarra: `${getDetails._id}-barra-${input.square}`, 
          square: input.square
        }))
        .then(response => {  
          if(response?.status === 200) {
              dispatch(getTeam(getDetails._id))
              navigate(`/mis-locales/${getDetails._id}`)
          }
        })
    }
    else {
      dispatch(updateTeam(id ? id : getDetails.unitManager._id, input))
      .then(response => {  
        if(response?.status === 200) {
            dispatch(getTeam(getDetails._id))
            navigate(`/mis-locales/${getDetails._id}`)
        }
      })
    }
  }
  return (
    <div className='organizer-settings-container'>
        <Header 
          OrganizerParty={{
            party: 'ajustes',
            path: `${role === 'bartender' || role === "newBartender" ? 
            "bartender" : role === 'cashier' || role === "newCashier" ? "cajero" : "gerente de unidad"} > ${input.name}`
          }}
          backbutton={() => navigate(-1)}/>
        <div className={role === "unitManager" || role === "newBartender" || role === "newCashier" ? 
          "input-edit-unit-manager" : 'input-edit-container'}>
          <InputDiv
            inputProps={{
              type: 'text',
              value: input.name,
              placeholder: "Nombre"
            }}
            setState={handleChange('name')}
          />
          <InputDiv
            inputProps={{
              type: 'text',
              value: input.email,
              placeholder: "example@gmail.com"
            }}
            setState={handleChange('email')}
          />
          {role === 'bartender' || role === 'cashier' ?
            <SelectDiv
              selectProps={{
                name: 'squar',
                value: input.square,
                id:''
              }}
              setState={handleChange('square')}
              options={options}
            />: null}
          {(role === "newBartender" || role === "newCashier")&& 
            <InputDiv
            inputProps={{
              type: 'text',
              value: input.square,
              placeholder: `Nombre de ${role === "newBartender" ? "barra" : "caja"}`
            }}
            setState={handleChange('square')}
          />}
        </div>
        {role === 'bartender' || role === 'cashier' ?
          <>
          <hr/>
          <div className='row-container'>
              <h2>{`eliminar ${role === 'bartender' ? role : "cajero"}`}</h2>
              <img src={arrowRight} alt="" />
          </div> 
          <hr/>
          </> : null}
        <button className='save' onClick={() => handleSubmit()}>
        {isLoading ?  
          <Lottie
              animationData={loadingAnimation}
              className="loading-animation"
              loop={true}
            /> : role === "newCashier" || role === "newBartender" ? "Aceptar" : "Guardar cambios"}
        </button>
        <button className='cancel' onClick={() => navigate(-1)}>Cancelar</button>
    </div>
  )
}
