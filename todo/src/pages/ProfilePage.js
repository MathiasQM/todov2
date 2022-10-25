import React from 'react'
import Profile from '../components/profil/Profile'
import '../components/profil/profile.css'
import Notifikationer from '../components/profil/Notifikationer'
import Theme from '../components/profil/Theme'
import Register from "../components/profil/Register";


const ProfilePage = () => {
  return (
    <div>
      <Profile classname="profile" />
      <Notifikationer />
      <Theme />
    </div>
  )
}

export default ProfilePage