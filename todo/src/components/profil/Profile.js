import React from 'react'
import Notifikationer from './Notifikationer'

import {CgProfile} from 'react-icons/cg'
import './profile.css'

const ProfilePage = () => {
  return (
    <div className='profile-header'>
        <CgProfile className='avatar'/>

        <h1>Malte Krog #3456</h1>
    </div>
  )
}

export default ProfilePage