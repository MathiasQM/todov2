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

  function setColor(topBorderColor, color) {
    document.documentElement.style.setProperty('--color-bg-opacity', color)
    document.documentElement.style.setProperty('--note-topborder-color', topBorderColor)
  }
  return (
    <div className='notifikation-container'>
        <h3>Theme</h3>
        <div className='notif-picker'>
            <p className='selected' onClick={() => setColor('orange', 'white')} >☀️</p>
            <p onClick={() => setColor('green', 'rgba( 0, 0, 0, 0.3')}>🌑</p>
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