import React, { useEffect, useState } from 'react'
import { Header } from '../../../../components/Header/Header'
import { TabbarOrganizer } from '../../Tabbar/TabbarOrganizer'
import row from '../../../../assets/buttons/arrow-right.svg'
import '../OrganizerSettings.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editParty, fetchParty } from '../../../../redux/store/slices/Organizer'
import { Loading } from '../../../../components/Loader/Loader'
import axios from 'axios'
const { 
    REACT_APP_MP_CLIENT_ID, 
    REACT_APP_MP_CLIENT_SECRET, 
    REACT_APP_MP_REDIRECT } = process.env

const Premises = () => {
    const allParty = useSelector(state => state.organizer.myParty)
    const getParty = useSelector(state => state.organizer.details[0])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchParty())
    }, [])
    const search = useLocation().search;
    const code = new URLSearchParams(search).get('code');
    useEffect(() => {
        if(code){
          axios.post("https://api.mercadopago.com/oauth/token",
          {
            client_id: REACT_APP_MP_CLIENT_ID,
            client_secret: REACT_APP_MP_CLIENT_SECRET,
            code: code,
            redirect_uri: REACT_APP_MP_REDIRECT,
            grant_type: "authorization_code"
          },
          {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
          .then((result) => {
              dispatch(editParty({accessToken: result.data.access_token}, window.localStorage.getItem("idParty")))
              .then(data => window.localStorage.setItem("idParty", null))
            })
        }

      }, [])
      useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100000);
      }, [])
      
  return (
    <div className='organizer-settings-container'>
    <Header 
        backbutton={() => navigate("/ajustes")}
        notification={true}
        OrganizerParty={{party: 'ajustes', path: 'mis locales'}}
        />
    {loading || !allParty.length ? 
    <div className='loading-premises'>
        <Loading/>  
    </div>
    :
    <>
    <hr/> 
    {allParty?.map(e => (
            <React.Fragment key={e._id}>
                <div className='row-container' onClick={() => navigate(`/mis-locales/${e._id}` )}>
                    <h2>{e.nameParty}</h2>
                    <img src={row} alt="flecha" />
                </div>
                <hr/>
            </React.Fragment>
    ))}
        <div className='row-container' onClick={() => navigate('/nuevo-local')}>
            <p>agregar local</p>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
    </>
    }   
    <TabbarOrganizer active={'settings'}/>
</div>
  )
}

export default Premises
