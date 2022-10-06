import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDesktop = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-nav mr-auto">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="ranking" className="nav-link">
          Ranking
        </Link>
        <Link to="login" className="nav-link">
          Login
        </Link>
        <Link to="register" className="nav-link">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default NavbarDesktop
