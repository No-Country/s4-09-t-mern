import React from 'react'
import Header from '../../components/Header/Header'
import { Map } from '../../components/Map/Map'

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div>
          <Header />
        </div>
        <Map />
      </div>
    </div>
  )
}

export default LandingPage
