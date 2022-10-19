import React from 'react'
import image1 from '../../assets/cafeterias/cafeteria1.jpg'
import image2 from '../../assets/cafeterias/cafeteria2.jpg'
import image3 from '../../assets/cafeterias/cafeteria3.jpg'
import image4 from '../../assets/cafeterias/cafeteria4.jpg'
import image5 from '../../assets/cafeterias/cafeteria5.jpg'
import image6 from '../../assets/cafeterias/cafeteria6.jpg'
import image7 from '../../assets/cafeterias/cafeteria7.jpg'
import image8 from '../../assets/cafeterias/cafeteria8.jpg'
import image9 from '../../assets/cafeterias/cafeteria9.jpg'
import image10 from '../../assets/cafeterias/cafeteria10.jpg'
import image11 from '../../assets/cafeterias/cafeteria11.jpg'
import image12 from '../../assets/cafeterias/cafeteria12.jpg'

import { useShopStore } from '../../redux/hooks/useShop'

export const CoffeeSelected = ({ numero = 0 }) => {
  const { shop, setShop } = useShopStore()
  let imagenes = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12
  ]

  return (
    <div className="card-column">
      <div className="card">
        <img
          style={{ objectFit: 'cover' }}
          className="card-img-top"
          src={imagenes[numero]}
          height="480"
          alt="Card cap"
        />
        <div className="card-body">
          {shop && <h5 className="card-title">{shop[0].name}</h5>}
          {shop && <p className="card-text">
            Direccion: {shop[0].address}  <br />
            Telefono: {shop[0].phone}  <br />
            Email: {shop[0].email} <br />            
          </p>}
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  )
}
