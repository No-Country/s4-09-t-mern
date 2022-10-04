import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-dark bg-dark navbar_desktop">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CafeApp
          </a>
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
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <nav className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <Link to="inicio" className="btn btn-outline-primary">
                  Inicio
                </Link>
                <Link to="ranking" className="btn btn-outline-primary">
                  Ranking
                </Link>
                <Link to="login" className="btn btn-outline-primary">
                  Login
                </Link>
                <Link to="register" className="btn btn-outline-primary">
                  Register
                </Link>
              </nav>
              <form className="d-flex" role="search">
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
