import { screen, act } from '@testing-library/react';
import { renderWithProviders } from '../../../../../test-utils';
import { addProduct } from '../../basketSlice';
import BasketQuantity from '..';

describe('BasketQuantity component', () => {
  it('displays the total quantity of products in the basket', () => {
    const { store } = renderWithProviders(<BasketQuantity />);

    expect(screen.queryByText('10')).not.toBeInTheDocument();

    act(() => {
      store.dispatch(addProduct({ price: 0 }, 10));
    });

    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
