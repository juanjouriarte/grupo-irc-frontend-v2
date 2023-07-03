import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-navbar">
        <div className='logo-img-box'>
          <img src='../src/assets/poker-assets/chip.svg' className="logo-img" alt='poker logo'/>
        </div>
        <div className='logo-text-box'>
          <p className='logo-text'>Texas Hold'em</p>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href='/'>Home</a></li>
        <li><a href='/main-page'>Partidas</a></li>
        <li><a href='./instructions'>How to Play</a></li>
        <li><a href='/team'>Our Team</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
