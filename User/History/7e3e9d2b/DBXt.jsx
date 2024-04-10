import React, { useEffect } from 'react'
import { Header } from '../../../../components/Header/Header'
import { TabbarOrganizer } from '../../Tabbar/TabbarOrganizer'
import row from '../../../../assets/buttons/arrow-right.svg'
import '../OrganizerSettings.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchParty } from '../../../../redux/store/slices/Organizer'
const Premises = () => {
    const allParty = useSelector(state => state.organizer.myParty)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchParty())
    }, [])
    
  return (
    <div className='organizer-settings-container'>
    <Header 
        backbutton={() => navigate(-1)}
        notification={true}
        OrganizerParty={{party: 'ajustes', path: 'mis locales'}}
        />
    <hr/>    
   {allParty?.map(e => (
        <>
        <div className='row-container'>
            <h2>{e.nameParty}</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
        </>
   ))}
    <div className='row-container' onClick={() => navigate('/nuevo-local')}>
        <p>agregar local</p>
        <img src={row} alt="flecha" />
    </div>
    <hr/>
    <TabbarOrganizer active={'settings'}/>
</div>
  )
}

export default Premises
