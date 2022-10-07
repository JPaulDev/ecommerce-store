import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../../app/store';
import { renderWithProviders } from '../../../../../test-utils';
import BasketItem from '../index';

// Prevents errors caused by next image component
jest.mock('next/future/image', () => 'img');

const product = {
  sku: 'CPU-INT-10400F',
  stock: 50,
  name: 'Intel Core i5 10400F',
  image: '',
  price: 129.99,
  salePrice: 114.99,
  quantity: 1,
  description: [
    '6 Cores, 12 Threads',
    'S1200 Comet Lake',
    '2.9GHz, 4.3GHz Turbo',
    '12MB Cache',
  ],
};

describe('BasketItem component', () => {
  it('renders a product card with an image and all product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <BasketItem product={product} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('BasketItem component stock indicator', () => {
  it('product is displayed as in stock when 31 or more', () => {
    renderWithProviders(<BasketItem product={{ ...product, stock: 31 }} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('product is displayed as low stock at 30 or fewer', () => {
    renderWithProviders(<BasketItem product={{ ...product, stock: 30 }} />);

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('product is displayed as out of stock at 0', () => {
    renderWithProviders(<BasketItem product={{ ...product, stock: 0 }} />);

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('BasketItem component price display', () => {
  it('should display only the base price if no sale price is present', () => {
    renderWithProviders(
      <BasketItem product={{ ...product, salePrice: undefined }} />
    );

    expect(screen.getByText('129')).toHaveTextContent('£129.99');
    expect(screen.queryByText(/was/i)).not.toBeInTheDocument();
  });
});

describe('BasketItem component price totals', () => {
  it('should display the correct sale price total', () => {
    renderWithProviders(<BasketItem product={{ ...product, quantity: 2 }} />);

    expect(screen.getByText('229')).toHaveTextContent('£229.98');
  });

  it('should display the correct base price total', () => {
    renderWithProviders(<BasketItem product={{ ...product, quantity: 2 }} />);

    expect(screen.getByText('£259.98')).toBeInTheDocument();
  });
});
