import { createSlice, current } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shop: null,
    shopId: null,
    shopSelected: null,
  },
  reducers: {
    onSetShop (state, action) {
      state.shop = action.payload     
    },
    onSetSelectedById (state, action)
    {
      state.shopId = action.payload      
      state.shopSelected = state.shop.find( c => (action.payload === c._id))      
    },
    
  }
})

export const { onSetShop, onSetSelectedById } = shopSlice.actions