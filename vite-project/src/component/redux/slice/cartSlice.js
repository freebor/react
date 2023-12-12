import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState :{
        cartItem : [],
    },
    reducers: {
        addToCart: (state, action) =>{
            state.cartItem.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(
                (item) => item.title !== action.payload.title
            )
        },
        clearCart: (state) =>{
            state.cartItem = [];
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItem;