import React from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavbarMobile from './NavbarMobile'

const Header = () => {
  return (
    <>
      <div className="col-12 d-none d-lg-block ">
        <NavBarDesktop />
      </div>
      <div className="col-12 d-lg-none d-md-block">
        <NavbarMobile />
      </div>
    </>
  )
}

export default Header
