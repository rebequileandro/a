import React, { useEffect } from 'react'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import plus from '../../../assets/icons/Organizer/plus.svg'
import './MyParty.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchParty } from '../../../redux/store/slices/Organizer'
import { MyPartyCard } from './MyPartyCard'
export const MyParty = () => {
  const dispatch = useDispatch()
  const getMyParty = useSelector(state => state.organizer.myParty)
  let arr = [{_id:"628badf5b3ae6767e1c3d38e",
                imageParty:"https://www.cronica.com.ar/__export/1521466908745/sites/cronica/img/2018/03/19/crobaar_crop1521466872966.jpg_1419575775.jpg",
                nameParty:"under club",
                addressParty:"Niceto vega 3100 CAVA - Argentina",
                emailBarman: ['alannimtapia@gmail.com']
              }]

  useEffect(() => {
    dispatch(fetchParty())
  }, [])
  return (
    <div className='my-party-container'>
        <HeaderOrganizer organizer={'tincho'}/>
          <h2>mis boliches</h2>
          <div className='container-party'>
              { getMyParty.length  ? getMyParty?.map(e => (
                  <MyPartyCard
                    key={e._id}
                    id={e._id}
                    image={e.imageParty}
                    name={e.nameParty}
                    address={e.addressParty}
                  />
                  )) 
                  : <MyPartyCard/>
                }
            <div className={getMyParty.length ? 'add-more-party' : 'add-party'}>
              <h2>agregar boliche</h2>
              <img src={plus} alt="mas"/>
            </div>
        </div>
    </div>
  )
}
