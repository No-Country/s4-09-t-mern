import React from 'react'
import { NavLink } from 'react-router-dom'
import Icono from '../../../src/assets/images/cafeicon.jpg'
import './Header.css'

const NavbarMobile = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-dark bg-dark navbar_desktop">
        <div className="container-fluid">
          <NavLink to='/'>
          <img src={Icono} alt='cafeterias' className='Nav_iconMobile'/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Tu cafe.
              </h5>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="btn btn-outline-dark mt-2">
                  Inicio
                </NavLink>
                <NavLink to="ranking" className="btn btn-outline-dark mt-2">
                  Ranking
                </NavLink>
                <NavLink to="Login" className="btn btn-outline-dark mt-2">
                  Login
                </NavLink>
              </nav>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarMobile
