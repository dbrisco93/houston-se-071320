import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className='navbar'>
      <div className='header'> Books App (not Amazon duh!) </div>
      <ul>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/newbook"> Add New Book </NavLink>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/signup"> Signup </NavLink>
      </ul>
    </div>
  )
}

export default Header;
