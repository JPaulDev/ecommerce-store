import { act, render, screen } from '../../../../../test-utils';
import { addProduct } from '../../basketSlice';
import BasketQuantity from '../index';

describe('BasketQuantity', () => {
  it('should display the total quantity of products in the basket', () => {
    const { store } = render(<BasketQuantity />);

    expect(screen.queryByText('10')).not.toBeInTheDocument();

    act(() => {
      store.dispatch(addProduct({ price: 0 }, 10));
    });

    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
