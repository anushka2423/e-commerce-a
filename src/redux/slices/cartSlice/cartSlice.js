import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addtoCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if(itemInCart) {
                itemInCart.quantity++;
            }else {
                state.cart.push({...action.payload, quantity: 1});
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity++; 
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if(item.quantity > 1) {
                item.quantity--;
            }else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        removeall: (state) => {
            state.cart = [];
        }
    }
})


export const {addtoCart, incrementQuantity, decrementQuantity, removeFromCart, removeall} = cartSlice.actions;
export default cartSlice.reducer;