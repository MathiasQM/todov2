 /* import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useState } from "react";
import "./profile.css";


const Register = () => {
  
  const [erVist, setErVist] = useState(false);

  return (
    <div className="Signin">
      <NavLink className="nav-link" to="/Signup" onClick= {() => setErVis}>
        <button className="register-btn">Opret profil</button>
      </NavLink>

      <button
        className="logout-btn"
        onClick={() => {
          signOut(auth);
        }}
      >
        Log ud
      </button>
    </div>
  );
};

export default Register; /*mport React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./profile.css";


const Register = () => 

  const handleClick = () => {
    setIsShown((current) => !current);
  };
  return (
    <div className="Signin">
      <NavLink className="nav-link" to="/Signup" onClick= {handleClick}>
        <button className="register-btn">Opret profil</button>
      </NavLink>

      <button
        className="logout-btn"
        onClick={() => {
          signOut(auth);
        }}
      >
        Log ud
      </button>
    </div>
  );
};

export default Register; */