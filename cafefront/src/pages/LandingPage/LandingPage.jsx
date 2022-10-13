import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Map } from '../../components/Map/Map'

const LandingPage = () => {
  return (
    <div className='container'>
      <Header />
      <Map />
      <Footer/>
    </div>
  )
}

export default LandingPage
