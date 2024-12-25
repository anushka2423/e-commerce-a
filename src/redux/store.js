import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import apiReducer from './slices/categorySlice/apiSlice';
import userReducer from './slices/userSlice/userSlice';
import cartReducer from './slices/cartSlice/cartSlice';

const rootReducer = combineReducers({
    api: apiReducer,
    user: userReducer,
    cart: cartReducer,
});

const persistConfig =  {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);