import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../../test-utils';
import BasketTotal from '../index';

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
    brand: 'asrock',
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
    brand: 'intel',
    currencyCode: 'GBP',
    isOnSale: false,
  },
];

describe('BasketTotal component', () => {
  it('should display the basket total including £4.99 delivery', () => {
    renderWithProviders(<BasketTotal />, {
      preloadedState: {
        basket: basketData,
      },
    });

    expect(screen.getByText('499')).toHaveTextContent('£499.94');
  });
});
