import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import basketReducer from '../features/basket/basketSlice';

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      basket: basketReducer,
    },
    preloadedState,
  });

export const wrapper = createWrapper(setupStore);
