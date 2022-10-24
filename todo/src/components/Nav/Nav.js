import React from 'react'
import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import "./nav.css";
import img1 from "./navwave1.svg"

const Nav = () => {
  
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current); 
    }

    var hours = new Date().getHours();
    const userName = 'Malte'
    
  return (
    <header>
      <img className="wave" src={img1} alt=""/>
        <nav>
            <h2 style={{display: !isShown ? 'block' : 'none'}}>{hours < 12 ? "Good Morning" : hours >= 12 && hours <=17 ? "Good Afternoon" : "Good Evening"}, {userName}</h2>
            <NavLink to="/" className="nav-link" onClick={handleClick} style={{display: isShown ? 'block' : 'none'}}>
                    Home
            </NavLink>
            <div className="add-profile" style={{display: !isShown ? 'flex' : 'none'}}>
              <div className="nav-link"><AiOutlineUsergroupAdd /></div>
              <NavLink className="nav-link" to="/profile" onClick={handleClick}>
              <CgProfile />
              </NavLink>
            </div>
        </nav>
    </header>

  )
}

export default Nav