import React from "react";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="row">
      <nav class="navbar navbar-dark bg-dark fixed-top navbar_desktop">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            tu cafe.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Tu cafe.
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <nav class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <Link to="inicio" className="btn btn-outline-primary">
                  Inicio
                </Link>
                <Link to="ranking" className="btn btn-outline-primary">
                  Ranking
                </Link>
                <Link to="Login" className="btn btn-outline-primary">
                  Login
                </Link>
              </nav>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
