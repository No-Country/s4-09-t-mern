import { useDispatch, useSelector } from 'react-redux'
import { onSetShop, onSetSelectedById } from '../slices'

export const useShopStore = () => {
  const { shop, shopId, shopSelected } = useSelector((state) => state.shop)
  const dispatch = useDispatch()

  const setShop = (data) => {
    dispatch(onSetShop(data))
  }

  const setSelectedById = (data) => {
    dispatch(onSetSelectedById(data))
  }

  return {
    //* Propiedades
    shop,
    shopId,
    shopSelected,
    //* Métodos
    setShop,
    setSelectedById,
  }
}