import React from 'react'
import { Link } from 'react-router-dom'

const NavBarDesktop = () => {
  return (
    <div className='row'>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
      <Link to='inicio' className='btn btn-outline-primary'>Inicio</Link>
      <Link to='ranking' className='btn btn-outline-primary'>Ranking</Link>
      <Link to='Login' className='btn btn-outline-primary'>Login</Link>
      </div>
    </nav>
    </div>
  )
}

export default NavBarDesktop 
