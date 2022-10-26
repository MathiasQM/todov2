import { Timestamp, collection, updateDoc, onSnapshot, orderBy, query, doc, setDoc  } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import DeleteNote from "./DeleteNote";
import "./noter.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import {FiEdit2} from "react-icons/fi"
import BlockIcon from "./blockicon.svg"


// Henter todos

export default function Noter({valgtListe}) {
  const [noter, setNoter] = useState([]);


  //Viser ALLE ToDos fra ALLE Lister
  // useEffect(() => {
  //   const noterRef = collection(db, "Arbejde");
  //   const q = query(noterRef, orderBy("oprettet", "desc"));
  //   onSnapshot(q, (snapshot) => {
  //     const noter = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setNoter(noter);
  //     console.log(noter);
  //   });
  // }, []);

  const [active, setActive] = useState("bordernote");
  const [activetwo, setActivetwo] = useState("flex-box");
  const [activethree, setActivethree] = useState("col-9");
  const blockToggle = () => {
    active === "bordernote"
      ? setActive("bordernote bordernote-active")
      : setActive("bordernote bordernote-active");

    activetwo === "flex-box"
      ? setActivetwo("flex-box-active")
      : setActivetwo("flex-box-active")

    activethree === "col-9"
      ? setActivethree("col-9-active")
      : setActivethree("col-9-active")
  };

  const listToggle = () => {
    active === "bordernote"
      ? setActive("bordernote")
      : setActive("bordernote");

    activetwo === "flex-box"
      ? setActivetwo("flex-box")
      : setActivetwo("flex-box")

    activethree === "col-9"
      ? setActivethree("col-9")
      : setActivethree("col-9")
  };

  // Update Todo

  const [formData, setFormData] = useState({
    Titel: "",
    Beskrivelse: "",
    image: "",
    oprettet: Timestamp.now().toDate(),
  }, []);



  setDoc(doc(db, "Arbejde", "Kaffe"), {
    Titel: formData.Titel,
    Beskrivelse: formData.Beskrivelse,
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/to-do-25365.appspot.com/o/images%2F1666606519547undefined?alt=media&token=0541a9e8-fe10-4e25-80e5-73290714d07c",
    oprettet: Timestamp.now().toDate(),
  }, []);


  return (
    <div className="block">

      <div className="layout-box">
        <h3>Layout</h3>
        <div className="filter-box">
          <h4 className='list' onClick={listToggle}><AiOutlineUnorderedList /></h4>
          <img src={BlockIcon} alt="BlockIcon" className='block-icon' onClick={blockToggle}/>
        </div>
      </div>
      <h2 className="valgt-liste">Mine Lister</h2>
      <div className={activetwo}>
        {noter.length === 0 ? (
          <p>Igen noter fundet</p>
        ) : (
          noter.map(({ id, oprettet }) => (
            <div className={active} key={id}>
              <div className="row">
                <div className={activethree}>
                    <input for="update" type="text" placeholder={id}  name="Beskrivelse"></input>
                    <FiEdit2/>
                  <p>{oprettet.toDate().toDateString()}</p>
                  <DeleteNote id={id} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
