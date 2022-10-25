import React from 'react'
// import Notifikationer from './Notifikationer'

import {CgProfile} from 'react-icons/cg'
import './profile.css'
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebaseConfig";


const ProfilePage = () => {
  // const [user] = useAuthState(auth);
  return (
    <div className='profile-header'>
        <CgProfile className='avatar'/>

        <h1>ssss</h1>
    </div>
  )
}

export default ProfilePage