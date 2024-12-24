import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/categorySlice/apiSlice';
import userReducer from './slices/userSlice/userSlice';
import cartReducer from './slices/cartSlice/cartSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;