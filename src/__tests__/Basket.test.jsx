import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../test-utils';
import Basket from '../pages/basket';

// Prevents errors caused by next image component.
jest.mock('next/future/image', () => 'img');

const productData = {
  sku: 'GPU-3PAQ-ASU',
  name: 'ASUS ROG Strix GeForce RTX 3080 V2 OC',
  imageUrl: '',
  price: 99.99,
  discount: 30,
  description: '1440MHz, 1905MHz Boost, 8704 CUDA Cores, 10GB GDDR6X',
  stockStatus: 2,
  quantity: 1,
  brand: '',
  currencyCode: 'GBP',
  isOnSale: true,
};

function setup(component, preloadedState) {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(component, preloadedState),
  };
}

describe('Basket component quantity buttons', () => {
  it('should increase the product quantity by 1 and display the total', async () => {
    const { user } = setup(<Basket />, {
      preloadedState: {
        basket: [productData],
      },
    });

    expect(screen.getByText('104')).toHaveTextContent('£104.98');
    expect(screen.getByTestId('quantity')).toHaveTextContent('1');

    await user.click(
      screen.getByRole('button', { name: /increase quantity/i })
    );

    expect(screen.getByText('204')).toHaveTextContent('£204.97');
    expect(screen.getByTestId('quantity')).toHaveTextContent('2');
  });

  it('should decrease the product quantity by 1 display the total', async () => {
    const { user } = setup(<Basket />, {
      preloadedState: {
        basket: [{ ...productData, quantity: 2 }],
      },
    });

    expect(screen.getByText('204')).toHaveTextContent('£204.97');
    expect(screen.getByTestId('quantity')).toHaveTextContent('2');

    await user.click(
      screen.getByRole('button', { name: /decrease quantity/i })
    );

    expect(screen.getByText('104')).toHaveTextContent('£104.98');
    expect(screen.getByTestId('quantity')).toHaveTextContent('1');
  });

  it('should prevent decreasing the quantity below 1', async () => {
    const { user } = setup(<Basket />, {
      preloadedState: {
        basket: [productData],
      },
    });

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');

    await user.click(
      screen.getByRole('button', { name: /decrease quantity/i })
    );

    expect(screen.getByTestId('quantity')).toHaveTextContent('1');
  });
});

describe('Basket component remove item button', () => {
  it('should remove the product from the basket', async () => {
    const { user } = setup(<Basket />, {
      preloadedState: {
        basket: [productData],
      },
    });

    expect(screen.getByText(/GPU-3PAQ-ASU/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /remove item/i }));

    expect(screen.queryByText(/GPU-3PAQ-ASU/i)).not.toBeInTheDocument();
  });
});

describe('Basket component empty basket message', () => {
  it('should be rendered when the basket is empty', () => {
    setup(<Basket />);

    expect(screen.getByText(/your basket is empty/i)).toBeInTheDocument();
  });

  it('should not be rendered when the basket contains products', () => {
    setup(<Basket />, {
      preloadedState: {
        basket: [productData],
      },
    });

    expect(screen.queryByText(/your basket is empty/i)).not.toBeInTheDocument();
  });
});
