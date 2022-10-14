import React from 'react';
import './reset.css'
import './universal.css';
import {Routes,
        Route,
        Navigate
        } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav/Nav";



function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
