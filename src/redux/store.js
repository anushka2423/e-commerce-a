import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/categorySlice/apiSlice';
import userReducer from './slices/userSlice/userSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
  },
});

export default store;