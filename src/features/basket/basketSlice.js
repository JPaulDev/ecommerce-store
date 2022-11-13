import { createSlice, createSelector } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, action) {
        const { sku, quantity } = action.payload;
        const product = state.find((item) => item.sku === sku);

        if (product) {
          product.quantity += quantity;
        } else {
          state.push(action.payload);
        }
      },
      prepare(product, quantity) {
        return {
          payload: {
            ...product,
            quantity,
          },
        };
      },
    },
    removeProduct(state, action) {
      return state.filter((product) => product.sku !== action.payload);
    },
    incrementQuantity(state, action) {
      const product = state.find((item) => item.sku === action.payload);

      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const product = state.find((item) => item.sku === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export function selectBasket(state) {
  return state.basket;
}

export const selectBasketSubtotal = createSelector(
  (state) => state.basket,
  (basket) =>
    basket.reduce((subtotal, product) => {
      const { price, quantity } = product;
      const itemTotal = price * quantity;

      // eslint-disable-next-line no-param-reassign
      subtotal += itemTotal;

      return subtotal;
    }, 0)
);

export const selectBasketQuantity = createSelector(
  (state) => state.basket,
  (basket) => basket.reduce((total, product) => total + product.quantity, 0)
);

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
