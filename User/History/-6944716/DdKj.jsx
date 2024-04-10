import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import notifications from '../../../../assets/icons/notification.svg'
import back from '../../../../assets/buttons/arrow-circle-left.svg'
import './EditRol.scss'
import { Header } from '../../../../components/Header/Header'
import InputDiv from '../../../../components/InputDiv/InputDiv'
export const EditRol = ({propsBarman, setPropsBarman, setIsEditBarman, indexInputbarmans, input, setInput, newBarman}) => {
  
  const getDetails = useSelector(state => state.organizer.details)
  
  const [errors, setErrors] = useState({
    name:'',
    email:''
  })

  const goBack = (e) => {
      e.preventDefault()
      setIsEditBarman(false)
    }
  const OrganizerParty = {
    party: getDetails?.nameParty,
    path:''
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
          <button className='save-changes' 
            onClick={(e) => saveChanges(e)}>Guardar cambios</button>
          <p className='cancel' onClick={(e) => goBack(e)}>Cancelar</p>

    </div>
  );
};
