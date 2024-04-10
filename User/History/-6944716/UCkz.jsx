import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import notifications from '../../../../assets/icons/notification.svg'
import back from '../../../../assets/buttons/arrow-circle-left.svg'
import './EditRol.scss'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
export const EditRol = ({rol, propsBarman, setPropsBarman, setIsEditRol, indexInputbarmans, input, setInput, newBarman}) => {
  
  const getDetails = useSelector(state => state.organizer.details)
  
  const [errors, setErrors] = useState({
    name:'',
    email:''
  })

  const goBack = (e) => {
      e.preventDefault()
      setIsEditRol(false)
    }
  const OrganizerParty = {
    party: getDetails?.nameParty,
    path: rol
  }
  return (
    <div className='container-edit-barmans'>
          <Header OrganizerParty={OrganizerParty}/>
          <div className='input-container'>
            <InputDiv
              inputProps={{
                name: "name"
              }}
            />
          </div>
          {errors?.name && <p className='erros'>* {errors.name}</p>}
          <div className='input-container'>
            <InputDiv
              inputProps={{
                name: "email"
              }}
            />
          </div>
            {errors?.email && <p className='erros'>* {errors.email}</p>}
          <button className='save-changes'>Guardar cambios</button>
          <p className='cancel' onClick={(e) => goBack(e)}>Cancelar</p>

    </div>
  );
};
