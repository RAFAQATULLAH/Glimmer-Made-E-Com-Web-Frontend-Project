import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './ProductsSlice/ProductsSlice'
import cartReducer from './CartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})