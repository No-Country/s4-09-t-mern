import { useShopStore } from '../../redux/hooks/useShop'

const filtros = [
[
  // recomendados para vos
  '635084407dd48c30b29a956a',  
  '635082597dd48c30b29a954c',
  '6339e6012f86593e6e0c0aa9',
],
[
  // recientemente agregados  
  '635087507dd48c30b29a95a6',
  '635086457dd48c30b29a9592',
  '635086007dd48c30b29a958e' 
],
[
  // Porque fuiste a cafe pirulin
  '6339e6012f86593e6e0c0aa9',
  '635088a97dd48c30b29a95c4',
  '635082597dd48c30b29a954c'
]
]

export const CoffeeCards = ({tipo}) => {
  const { shop } = useShopStore()

 const filteredShops = () => {  
  return shop.filter(element => filtros[tipo].includes(element._id)) 
 }

  return (
    <div className="row">
      {shop &&
        filteredShops(shop).map(item => (          
          <div className="col-md-4" key={item._id}>
            <div className="card">
              <img
                style={{ objectFit: 'cover' }}
                className="card-img-top"
                src={require('../../assets/cafeterias/' + item.image)}
                height="250"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.address} <br />
                  Tel: {item.phone} <br />
                  {item.email} <br />
                </p>
              </div>
            </div>            
          </div>
        ))}
    </div>
  )
}
