import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../../test-utils';
import BasketSubtotal from '..';

const basket = [
  { price: 13.99, quantity: 2 },
  { price: 10.99, quantity: 1 },
  { price: 25.99, quantity: 3 },
];

describe('BasketSubtotal component', () => {
  it('displays £0.00 when there are no products in the basket', () => {
    renderWithProviders(<BasketSubtotal />);

    expect(screen.getByText('Subtotal £0.00')).toBeInTheDocument();
  });

  it('displays the subtotal of all the products in the basket', () => {
    const preloadedState = { basket };
    renderWithProviders(<BasketSubtotal />, { preloadedState });

    expect(screen.getByText('Subtotal £116.94')).toBeInTheDocument();
  });
});
