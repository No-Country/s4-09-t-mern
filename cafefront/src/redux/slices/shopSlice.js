import { createSlice } from '@reduxjs/toolkit'

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shop: null,
    selected: 0,
  },
  reducers: {
    onSetShop (state, action) {
      state.shop = action.payload
    },
    onSetSelected (state, action)
    {
      state.selected = action.payload
    }
  }
})

export const { onSetShop, onSetSelected } = shopSlice.actions