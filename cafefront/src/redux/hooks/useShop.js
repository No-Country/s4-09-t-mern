import { useDispatch, useSelector } from 'react-redux'
import { onSetShop, onSetSelected } from '../slices'

export const useShopStore = () => {
  const { shop, selected } = useSelector((state) => state.shop)
  const dispatch = useDispatch()

  const setShop = (data) => {
    dispatch(onSetShop(data))
  }

  const setSelected = (data) => {
    dispatch(onSetSelected(data))
  }

  return {
    //* Propiedades
    shop,
    selected,
    //* Métodos
    setShop,
    setSelected
  }
}