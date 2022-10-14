import React from 'react'
import { useState } from "react";
import './minelister.css';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoIosNotificationsOff } from 'react-icons/io'

const MineLister = () => {
    const [active, setActive] = useState("list-menu");
    const listToggle = () => {
        active === "list-menu" 
        ? setActive("list-menu list-active")
        : setActive("list-menu");
    };

    const handleSubmit = event => {
        // prevent page refresh
        event.preventDefault();
    
        console.log('form submitted ✅');
    }

  return (
    <section>
        <div onClick={listToggle}>
            <h3>Mine Lister</h3>
        </div>
        <div className={active}>     
            <form onSubmit={handleSubmit}>
                <input placeholder='Navngiv din liste'></input>
                <button type='submit'>Tilføj</button>
            </form>
            <form>
                <div >
                <IoIosNotificationsOff/>
                <IoIosNotificationsOutline />
                </div>
                <label for="colorpicker">Vælg farvetema</label>
                <input type="color" id="colorpicker" value="#0000ff"></input>
            </form>
            <div>
                <h4>XD MATTY XD</h4>
            </div> 
        </div>
        <div className="bg-blur"></div>
    </section>
  )
}

export default MineLister;