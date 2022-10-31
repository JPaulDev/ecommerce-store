import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../../test-utils';
import BasketSubtotal from '../index';

const basketData = [
  {
    sku: 'GPU-3PAQ-ASR',
    name: 'graphics card',
    imageUrl: '',
    price: 149.99,
    discount: 9.99,
    description: 'description',
    stockStatus: 2,
    quantity: 2,
    brand: '',
    currencyCode: 'GBP',
    isOnSale: true,
  },
  {
    sku: 'CPU-2AOQ-INT',
    name: 'processor',
    imageUrl: '',
    price: 64.99,
    description: 'description',
    stockStatus: 2,
    quantity: 3,
    brand: '',
    currencyCode: 'GBP',
    isOnSale: false,
  },
];

describe('BasketSubtotal component', () => {
  it('should display £0.00 when there are no products in the basket', () => {
    renderWithProviders(<BasketSubtotal />);

    expect(screen.getByText('Subtotal £0.00')).toBeInTheDocument();
  });

  it('should display the subtotal of all the products in the basket', () => {
    renderWithProviders(<BasketSubtotal />, {
      preloadedState: {
        basket: basketData,
      },
    });

    expect(screen.getByText('Subtotal £494.95')).toBeInTheDocument();
  });
});
