import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile-container'>
        <Sidebar active={"profile"}/>
        <div className='profile-info'>

        </div>
    </div>
  )
}

export default Profile