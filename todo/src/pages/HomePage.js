import React from "react";
import MineLister from "../components/HomePage/MineLister.js";
import Noter from "../components/Noter/Noter";
import AddNote from "../components/Noter/AddNote";
import Liste from "../components/HomePage/liste/Liste.js";
import {useEffect, useState} from "react"
import { db } from '../firebaseConfig';
import { collection, addDoc, setDoc, query, onSnapshot, doc  } from 'firebase/firestore';


const HomePage = () => {

  const [valgtListe, setValgtListe] = useState('')

  //Henter Lists fra firebase og indsætter i listen

  const [getLists, setGetLists] = useState([]);
  const minListeRef = collection(db, "minliste");

  useEffect(() => {
      const q = query(minListeRef)
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let listsArray = []
          querySnapshot.forEach((doc) => {
              listsArray.push({...doc.data(), id: doc.id})
          });
          setGetLists(listsArray)
          console.log(listsArray)
      })
      return () => unsubscribe()
  }, [])


  // Tilføjer ny liste til firebase
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
      // prevent page refresh
      e.preventDefault();
      if (title !== "") {
        //         await setDoc(doc(db, "minliste", "la"), {
          setDoc(doc(db, 'minliste', title), {
            title: "Kaffe",
            completed: false,
          }); 
          setTitle("");
      }
  
      console.log('form submitted ✅');
  };
  

  return (
    <div className="container">
      <MineLister valgtListe={valgtListe} setValgtListe={setValgtListe} getLists={getLists} key={getLists.id} setGetLists={setGetLists} title={title} setTitle={setTitle} handleSubmit={handleSubmit}/>

      <div className="row">
        <div className="col-md-4">
          <AddNote valgtListe={valgtListe} title={title} setTitle={setTitle} key={title.id} handleSubmit={handleSubmit} doc={doc}/>
        </div>
      </div>

      <div className="col-md-8">
        <Noter />
      </div>
    </div>
  );
};

export default HomePage;
