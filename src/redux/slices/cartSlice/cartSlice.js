import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addtoCart: (state, action) => {},
        removeFromCart: (state, action) => {},
        updateTotalQuantity: (state) => {},
        updateTotalAmount: (state) => {}
    }
})