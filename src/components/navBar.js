import React from 'react';
import {
  Link
} from "react-router-dom";

import './navbar.css';

function NavBar() {
  return (
    <ul className='menuBar'>
      <li className='logoItem'><Link to="/"><img className='logo' src="/Pics/logo.jpg" /></Link></li>
      <li className='menuItem'><Link to="/">HOME</Link></li>
      <li className='teamMenuItem'><Link to="/Team">TEAMS</Link></li>
      <li className='menuItem'><Link to="/About">ABOUT</Link></li>
      <li className='menuItem'><Link to="/Recruiting">RECRUITING</Link></li>
    </ul>


  );
}

export default NavBar;
