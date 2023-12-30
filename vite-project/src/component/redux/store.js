import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice/cartSlice"
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, persistReducer,PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  })
})

