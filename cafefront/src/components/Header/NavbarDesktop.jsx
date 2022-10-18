import React from 'react'
import { NavLink } from 'react-router-dom'
import Icono from '../../../src/assets/images/cafeicon.jpg'
import './Header.css'
// import { useMessageStore } from '../../redux/hooks/useMessage'
import { useUserStore } from '../../redux/hooks/useUser'

const NavbarDesktop = () => {
  // eslint-disable-next-line no-unused-vars
  // const { message, setMessage } = useMessageStore()
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUserStore()

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <NavLink to="/">
            <img src={Icono} className="Nav_icon" alt="Coffee App"/>
          </NavLink>
        </div>
        <div className="navbar-nav mr-auto Nav_header">
          <div className="Nav_header">
            {user !== null && (
              <>
                {/* <NavLink to="/ranking" className="nav-link">
            Ranking
          </NavLink> */}
                <div style={{ color: 'white', alignSelf: 'center' }}>
                  {user ? 'Usuario Logueado: ' + user : 'No estas Logueado'}
                </div>
                <button style={{ margin: '10px' }} onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
            {user === null && (
              <>
                <NavLink to="/" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/Register" className="nav-link">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarDesktop
