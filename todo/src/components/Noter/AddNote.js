import React from "react";
import { useState } from "react";
import { Timestamp, collection, addDoc, getFirestore, doc, setDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import { toast } from "react-toastify";

import "./noter.css";

export default function Noter({title, setTitle, key}) {


  const [formData, setFormData] = useState({
    Titel: "",
    Beskrivelse: "",
    image: "",
    oprettet: Timestamp.now().toDate(),
  }, []);

  const [progress, setProgress] = useState(0);

  const handle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.Beskrivelse) {
      alert("Udfyld venligst alle felterne");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          Titel: "",
          Beskrivelse: "",
          oprettet: ""
        }, []);
        

        // Add's todo to list
        const noterRef = doc(db, "minliste", "5v7krEiV7Q8AWA2cj5yl" );
        const minListeRef = collection(db, "minliste");
        const listeId = String(key);

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          setDoc(doc(db, "Arbejde", formData.Beskrivelse), {
            Titel: formData.Titel,
            Beskrivelse: formData.Beskrivelse,
            imageUrl: url,
            oprettet: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Todo er tilføjet", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        }, []);
      }
    );
  };

  return (
      
    <div className="lavtodo">
      
      {/* beskrivelse */}
      <textarea
        name="Beskrivelse"
        className="form-control"
        value={formData.Beskrivelse}
        placeholder="Hvad vil du gerne have gjort?"
        // onChange={handleChange}
      />

      <div className="pick-day">
      <div className="addbutton">
        <button className="btn-primary" onClick={handlePublish}>
          Tilføj
        </button>
      </div>
    </div>
    
    </div>
  );
}
