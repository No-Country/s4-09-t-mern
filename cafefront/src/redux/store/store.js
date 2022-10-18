import { configureStore } from '@reduxjs/toolkit'
import { messageSlice, userSlice } from '../slices/'
import { shopSlice } from '../slices/'

export const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    user: userSlice.reducer,
    shop: shopSlice.reducer
  }
})
