import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import DeleteNote from "./DeleteNote";
import "./noter.css";

export default function Noter() {
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
  return (
    <div>
      {noter.length === 0 ? (
        <p>Igen noter fundet</p>
      ) : (
        noter.map(({ id, Beskrivelse }) => (
          <div className="bordernote" key={id}>
            <div className="row">
              <div className="col9">
                <p>{Beskrivelse}</p>
                <DeleteNote id={id} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
