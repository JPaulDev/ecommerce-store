import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
