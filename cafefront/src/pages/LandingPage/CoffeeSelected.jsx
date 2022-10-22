import React from 'react'
import { useShopStore } from '../../redux/hooks/useShop'

export const CoffeeSelected = () => {
  const { shopSelected, setSelectedById } = useShopStore()

  return (
    <div className="card-column">
      <div className="card">
        {shopSelected && (
          <>
            <div>
              <img
                style={{ objectFit: 'cover', position: 'relative' }}
                className="card-img-top"
                src={
                  shopSelected &&
                  require('../../assets/cafeterias/' + shopSelected.image)
                }
                height="320"
                alt="Card cap"
              />
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  color: 'white',
                  top: '0%',
                  transform: 'translate(-0%, -0%)',
                  zIndex: 10000,
                  height: '2rem',
                  width: '2rem',
                  padding: 0,
                  margin: 0,
                  right: 0,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  backgroundColor: 'var(--error)',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => setSelectedById(null)}
              >
                <span>X</span>
              </div>
            </div>
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
