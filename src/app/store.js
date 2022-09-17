import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';

const rootReducer = combineReducers({
  basket: basketReducer,
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });
