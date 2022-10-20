import React from 'react'
import { useShopStore } from '../../redux/hooks/useShop'

export const CoffeeSelected = () => {
  const { shopSelected } = useShopStore()

  return (
    <div className="card-column">
      <div className="card">
        {shopSelected && (
          <>
            <img
              style={{ objectFit: 'cover' }}
              className="card-img-top"
              src={
                shopSelected &&
                require('../../assets/cafeterias/' + shopSelected.image)
              }
              height="320"
              alt="Card cap"
            />
            <div className="card-body">
              {shopSelected && (
                <h5 className="card-title">{shopSelected.name}</h5>
              )}
              {shopSelected && (
                <p className="card-text">
                  Direccion: {shopSelected.address} <br />
                  Telefono: {shopSelected.phone} <br />
                  Email: {shopSelected.email} <br />
                </p>
              )}
              <p className="card-text">
                <small className="text-muted"> </small>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
