import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from '../features/auth/authSlice';
import basketReducer from '../features/basket/basketSlice';
import { api } from '../services/api';

export const setupStore = (preloadedState) =>
  configureStore({
    preloadedState,
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer,
      basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const wrapper = createWrapper(setupStore);
