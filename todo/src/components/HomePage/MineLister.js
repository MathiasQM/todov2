import React from 'react'
import { useState, useEffect } from "react";
import './minelister.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosNotificationsOff } from 'react-icons/io';
import { db } from '../../firebaseConfig';
import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import Liste from './liste/Liste'


const MineLister = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "lists"));
        const unsub = onSnapshot(q, (querySnapshot) => { 
        let listsArray = [];
        querySnapshot.forEach((doc) => {
            listsArray.push({...doc.data(), id: doc.id });
        });
        setLists(listsArray);
    });
    return () => unsub();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "mineliste", id));
    };

    const handleEdit = async (list, title) => {
        await updateDoc(doc(db, "mineliste", list.id), { title: title });
    };

    
    const [active, setActive] = useState("list-menu");
    const listToggle = () => {
        active === "list-menu" 
        ? setActive("list-menu list-active")
        : setActive("list-menu");
    };

    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "minliste"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    
        console.log('form submitted ✅');
    };

  return (
    <section>
        <div onClick={listToggle}>
            <h3>Mine Lister</h3>
        </div>
        <div className={active}>     
            <form onSubmit={handleSubmit}>
                <input placeholder='Navngiv din liste'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <button >Tilføj</button>
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
                <div>
                                       
                    {lists.map((list) => (
                        <Liste
                        key={list.id}
                        list={list}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}/>
                        
                    ))}
                </div>
            </div> 
        </div>
        <div className="bg-blur"></div>
    </section>
  )
}

export default MineLister;