/* import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  let navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth);
    updateProfile(auth.currentUser, { displayName: name });
    refreshPage(0);
  };
  return (
    <div className="register">
      <h1>Velkommen!</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Indtast dit navn her"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <br />
      <NavLink className="nav-link" to="/" onClick={handleSignup}>
        <button className="register-btn">Opret profil</button>
      </NavLink>
    </div>
  );
}
 */