import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState :{
        cartItem : [],
    },
    reducers: {
        addToCart: (state, action) =>{
            const existingItem = state.cartItem.findIndex(
                (item)=> item.id === action.payload.id
            )
            if (existingItem === -1) {
                state.cartItem.push(action.payload) 
            }else{
                state.cartItem[existingItem].quantity++
            }
        },
        removeFromCart: (state, action) => {
            state.cartItem = state.cartItem.filter(
                (item) => item.id !== action.payload.id
            )
        },
        clearCart: (state) =>{
            state.cartItem = [];
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItem