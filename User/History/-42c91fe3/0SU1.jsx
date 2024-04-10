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

  useEffect(() => {
    dispatch(fetchParty())
  }, [])
  return (
    <div className='my-party-container'>
        <HeaderOrganizer organizer={'tincho'}/>
          <h2>mis boliches</h2>
          <div className='container-party'>
              { getMyParty.length ? getMyParty?.map(e => (
                  <MyPartyCard
                    key={e._id}
                    id={e._id}
                    image={e.imageParty}
                    name={e.nameParty}
                    address={e.addressParty}
                  />
                  )) 
                  : null
                }
            <div className={getMyParty.length ? 'add-more-party' : 'add-party'}>
              <h2>agregar boliche</h2>
              <img src={plus} alt="mas"/>
            </div>
        </div>
    </div>
  )
}
