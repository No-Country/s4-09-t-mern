import { useDispatch, useSelector } from 'react-redux'
import { onSetShop } from '../slices'

export const useShopStore = () => {
  const { shop } = useSelector((state) => state.shop)
  const dispatch = useDispatch()

  const setShop = (data) => {
    dispatch(onSetShop(data))
  }

  return {
    //* Propiedades
    shop,
    //* Métodos
    setShop
  }
}