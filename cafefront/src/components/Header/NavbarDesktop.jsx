import React from 'react'
import { NavLink } from 'react-router-dom'
import Icono from '../../../src/assets/images/cafeicon.jpg'
import './Header.css'

const NavbarDesktop = () => {
  return (
    <div className='row'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div>
        <NavLink to='/'>
          <img src={Icono} className='Nav_icon'/>
        </NavLink>
        </div>
      <div className="navbar-nav mr-auto Nav_header">
        <div className='Nav_header'>
        {/* <NavLink to="/ranking" className="nav-link">
          Ranking
        </NavLink>
        <NavLink to="/Login" className="nav-link">
          Login
        </NavLink> */}
        <NavLink to="/Register" className="nav-link">
          Register
        </NavLink>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarDesktop
