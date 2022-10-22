import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Map } from '../../components/Map/Map'
import { CoffeeCards } from './CoffeeCards'
import { CoffeeSelected } from './CoffeeSelected'
import { useShopStore } from '../../redux/hooks/useShop'
import { useResize } from '../../hooks/useResize'

const LandingPage = () => {
  const { shopSelected } = useShopStore()
  const { isPhone } = useResize(768)

  return (
    <>
      <div className="container-fluid">
        <Header />
        <h5 style={{ color: 'white' }}>
          {' '}
          Cafeterías en Buenos Aires, Argentina
        </h5>
        <div className="row">
          {shopSelected && 
            isPhone && 
              <>           
                <div className="col-md-6">
                  <CoffeeSelected />
                </div>              
                <div className="col-md-6">
                  <Map />
                </div>
              </>            
          }         
          {shopSelected && 
            !isPhone && 
              <>           
                <div className="col-md-6">
                  <Map />
                </div>
                <div className="col-md-6">
                  <CoffeeSelected />
                </div>              
              </>            
            }          
           {!shopSelected && 
           <>           
              <div className="col-md-12">
                <Map />
              </div>              
            </>
          }
        </div>
        <br />
        <h5 style={{ color: 'white' }}> Recomendadas para vos </h5>
        <div className="row">          
            <CoffeeCards tipo={0}/>                  
        </div>
        <br />        
        <h5 style={{ color: 'white' }}> Agregadas recientemente </h5>
        <div className="row">          
            <CoffeeCards tipo={1}/>                  
        </div>
        <br />
        <h5 style={{ color: 'white' }}> Porque fuiste a Cafe Pirulin </h5>        
        <div className="row">          
            <CoffeeCards tipo={2}/>                  
        </div>
        <br />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
