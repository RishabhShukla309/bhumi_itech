import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartData: {
    products: [],
  },
}

export const cartSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    //  reducers come here
    addToCart: (state, action) => {
      return {
        ...state,
        cartData: {
          ...state.cartData,
          products: [...state.cartData.products, action.payload],
        },
      }
    },

    removeFromCart: (state, action) => {
      const updatedProducts = state.cartData.products.filter(
        (product) => product.id !== action.payload.id,
      )

      return {
        ...state,
        cartData: {
          ...state.cartData,
          products: updatedProducts,
        },
      }
    },

  },
  extraReducers: () => {
    //  Extra reducers come here
  },
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
