import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../../assets/images/cafeicon.jpg'
import './Footer.css'

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src={LogoIcon} alt='Logo info' className='Logo_icon'/>
      </Link>
    </div>
  )
}

export default Logo
