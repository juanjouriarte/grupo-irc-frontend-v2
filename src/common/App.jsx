import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import axios from 'axios';
import API_URL from '../config';

function App() {
  const [count, setCount] = useState(0);

  // Check if JWT token exists in local storage
  const jwtToken = localStorage.getItem('jwt');
  const isLoggedIn = !!jwtToken;

  async function handleLogout() {
    try{
      console.log("Logout de usuario " + localStorage.getItem("user_id"));
      const response = await axios.post(`${API_URL}/auth/logout`, {
        userId: localStorage.getItem("user_id"),
      });
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id');

    // Reload the page to reset the application state
    window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Navbar />
      <h1>¡Texas Holdem!</h1>
      <h2>Jugar para Ganar</h2>
      <div className='box-img'>
        {/* <img src='/assets/HOLDEM IRC.png' className="logo"/> */}
        <img src='/assets/poker-assets/chip.svg' className="landing-img" />
      </div>
      <div className="profile-navbar">
        <ul className='profile-ul'>
          {!isLoggedIn && <li><a className='login-link' href='/Login'>Login</a></li>}
          {!isLoggedIn && <li><a className='register-link' href='/Register'>Register</a></li>}
          {isLoggedIn && (
            <>
              <li><a className='play-link' href='./PreGame'>PLAY</a></li>
              <div className='center-button'>
                  <li className='button-logout-container'><button className='logout-button' onClick={handleLogout}>Logout</button></li>
              </div>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;

