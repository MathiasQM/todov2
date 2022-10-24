import React from 'react'
import { useState } from "react";
import './minelister.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosNotificationsOff } from 'react-icons/io';
import Liste from './liste/Liste'




const MineLister = ({getLists, handleSubmit, title, setTitle, valgtListe, setValgtListe}) => {

//    Get lists
    
    const [active, setActive] = useState("list-menu");
    const listToggle = () => {
        active === "list-menu" 
        ? setActive("list-menu list-active")
        : setActive("list-menu");
    };
      
    
  return (
    <section>
        <div onClick={listToggle}>
            <h3>Mine Lister</h3>
        </div>
        <div className={active}>     
            <form >
                <input className="list-titel"
                placeholder='Navngiv din liste'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}  />
                <button className="add-button">Tilføj</button>
            </form>
            <form>
                <div >
                <IoIosNotificationsOff/>
                <IoIosNotificationsOutline />
                </div>
                <label for="colorpicker">Vælg farvetema</label>
                <input type="color" id="colorpicker" value="#0000ff"></input>
                {getLists.map((getList) => (
                        <Liste 
                        valgtListe={valgtListe} 
                        setValgtListe={setValgtListe}
                        list={getList}
                        key={getList.id} 
                        />  
                    ))}
            </form>
            <div>
                <div>                      
                    
                </div>
            </div> 
        </div>
        <div className="bg-blur"></div>
    </section>
  )
}

export default MineLister;