import React from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import "../Noter/noter.css";



const Theme = () => {
  const [noter, setNoter] = useState([]);
  useEffect(() => {
    const noterRef = collection(db, "Noter");
    const q = query(noterRef, orderBy("oprettet", "desc"));
    onSnapshot(q, (snapshot) => {
      const noter = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoter(noter);
      console.log(noter);
    });
  }, []);

  // Change theme

  useEffect(() => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--color-bg-opacity')
      const topBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--note-topborder-color')

  }, []);

  function setColor(color, bgSecondary, textColor) {
    document.documentElement.style.setProperty('--color-bg', color)
    document.documentElement.style.setProperty('--color-text', textColor)
    document.documentElement.style.setProperty('--color-bg-opacity', bgSecondary)
  }
  return (
    <div className='notifikation-container'>
        <h3>Theme</h3>
        <div className='notif-picker'>
            <p className='selected' onClick={() => setColor('rgb(239, 239, 239', 'rgb(250, 250, 250)', 'black')} >☀️</p>
            <p onClick={() => setColor('rgba( 0, 0, 0, 0.9', 'rgb(37, 37, 37)',  '#FFF')}>🌑</p>
            <p>🌈</p> 
        </div>

        <div className='theme-show-box'>
            <div className="bordernote">
                <div className="row">
                    <div className="col-9">
                        <p>Tøm opvasker</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

)}

export default Theme