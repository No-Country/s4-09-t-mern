import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shop: null
  },
  reducers: {
    onSetShop (state, action) {
      state.shop = action.payload
    }
  }
})

export const { onSetShop } = shopSlice.actions