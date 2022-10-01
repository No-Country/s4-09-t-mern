import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='inicio' className='btn btn-outline-primary'>Inicio</Link>
      <Link to='ranking' className='btn btn-outline-primary'>ranking</Link>
    </div>
  )
}

export default NavBar
