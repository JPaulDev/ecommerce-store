import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';
import Basket from '../pages/basket';

// Prevents errors caused by next image component
jest.mock('next/future/image', () => 'img');

const product = {
  sku: 'CPU-INT-10400F',
  stock: 50,
  quantity: 1,
  name: 'Intel Core i5 10400F',
  image: '',
  price: 129.99,
  salePrice: 114.99,
  description: [
    '6 Cores, 12 Threads',
    'S1200 Comet Lake',
    '2.9GHz, 4.3GHz Turbo',
    '12MB Cache',
  ],
};

describe('Basket component total', () => {
  it('should display the correct total including £4.99 delivery', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [{ ...product, quantity: 2 }],
      },
    });

    expect(screen.getByText('234')).toHaveTextContent('£234.97');
  });
});

describe('Basket component quantity buttons', () => {
  it('should increase the product quantity by 1', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [product],
      },
    });
    const button = screen.getByRole('button', {
      name: /increase quantity/i,
    });

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');

    userEvent.click(button);

    expect(screen.getByTestId('quantity')).toHaveTextContent('2');
  });

  it('should decrease the product quantity by 1', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [{ ...product, quantity: 2 }],
      },
    });
    const button = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    expect(screen.getByTestId('quantity')).toHaveTextContent('2');

    userEvent.click(button);

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');
  });

  it('should prevent decreasing the quantity below 1', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [product],
      },
    });
    const button = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');

    userEvent.click(button);

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');
  });
});

describe('Basket component remove item button', () => {
  it('should remove the product from the basket', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [product],
      },
    });
    const button = screen.getByRole('button', {
      name: /remove item/i,
    });

    expect(screen.getByText(/CPU-INT-10400F/i)).toBeInTheDocument();

    userEvent.click(button);

    expect(screen.queryByText(/CPU-INT-10400F/i)).not.toBeInTheDocument();
  });
});

describe('Basket component empty basket screen', () => {
  it('should be rendered when the basket is empty', () => {
    renderWithProviders(<Basket />);

    expect(
      screen.getByText(/your basket is empty, please add some products/i)
    ).toBeInTheDocument();
  });

  it('should not be rendered when the basket contains products', () => {
    renderWithProviders(<Basket />, {
      preloadedState: {
        basket: [product],
      },
    });

    expect(
      screen.queryByText(/your basket is empty, please add some products/i)
    ).not.toBeInTheDocument();
  });
});
