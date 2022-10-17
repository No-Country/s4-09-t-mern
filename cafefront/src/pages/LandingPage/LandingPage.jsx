import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Map } from '../../components/Map/Map'
import { CoffeeCards } from './CoffeeCards'
import { CoffeeSelected } from './CoffeeSelected'

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <h4 style={{ color: 'white' }}>
          {' '}
          Cafeterías en Buenos Aires, Argentina
        </h4>
        <div className="row">
          <div className="col-md-8" style={{ backgroundColor: 'white' }}>            
            <Map />
          </div>
          <div className="col-md-4">            
            <CoffeeSelected numero={0} />
          </div>
        </div>
        <br />
        <h2 style={{ color: 'white' }}> Recomendadas para vos </h2>
        <div className="row">
          <div className="col-md-4">
            <CoffeeCards numero={0} />
          </div>
          <div className="col-md-4">
            <CoffeeCards numero={3} />
          </div>
          <div className="col-md-4">
            <CoffeeCards numero={6} />
          </div>
        </div>
        <br />
        <h2 style={{ color: 'white' }}> Sponsors </h2>
        <div className="row">
          <div className="col">
            <CoffeeSelected numero={10} />
          </div>
          <div className="col">
            <CoffeeSelected numero={11} />
          </div>
        </div>
        <br />
        <h2 style={{ color: 'white' }}> Agregadas recientemente </h2>
        <div className="row">
          <div className="col-md-4">
            <CoffeeCards numero={6} />
          </div>
          <div className="col-md-4">
            <CoffeeCards numero={9} />
          </div>
          <div className="col-md-4">
            <CoffeeCards numero={3} />
          </div>
        </div>
        <br />
        <h2 style={{ color: 'white' }}> Porque fuiste a Cafe Pirulin </h2>
        <div className="row">
          <div className="col">
            <CoffeeCards numero={0} />
          </div>
          <div className="col">
            <CoffeeCards numero={3} />
          </div>
        </div>
      </div>
      <div>
       <Footer />
      </div>
      
    </>
  )
}

export default LandingPage
