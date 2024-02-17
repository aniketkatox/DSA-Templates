import React from 'react';
import {NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            CodeBetter
          </NavLink>
        </li>
        <li>
          <NavLink to="/practiceHub" activeClassName="active">
            PracticeHub
          </NavLink>
        </li>
        <li>
          <NavLink to ="/Community" activeClassName="active">
            Community
            </NavLink>
        </li>
        <li style={{ float: 'right' }}>
          <a href="https://chat.whatsapp.com/Jeb31C5IjY3ATSC69SQ10Y" target="_blank">Request Feature</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
