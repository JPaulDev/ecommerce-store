import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../../app/store';
import { renderWithProviders } from '../../../../../test-utils';
import BasketItem from '../index';

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

describe('BasketItem component', () => {
  it('should render a product card with with all the product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <BasketItem product={productData} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('BasketItem component stock indicator', () => {
  it('should display in stock', () => {
    renderWithProviders(<BasketItem product={productData} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('should display low stock', () => {
    renderWithProviders(
      <BasketItem product={{ ...productData, stockStatus: 1 }} />
    );

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('should display out of stock', () => {
    renderWithProviders(
      <BasketItem product={{ ...productData, stockStatus: 0 }} />
    );

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('BasketItem component price display', () => {
  it('should display the price and the previous price when on sale', () => {
    renderWithProviders(<BasketItem product={productData} />);

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.getByText('£129.99')).toBeInTheDocument();
  });

  it('should only display the base price if not on sale', () => {
    renderWithProviders(
      <BasketItem product={{ ...productData, isOnSale: false }} />
    );

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.queryByText(/was:/i)).not.toBeInTheDocument();
  });
});

describe('BasketItem component total price display', () => {
  it('should display the correct item total', () => {
    renderWithProviders(
      <BasketItem product={{ ...productData, quantity: 2 }} />
    );

    expect(screen.getByText('199')).toHaveTextContent('£199.98');
  });

  it('should display the correct previous price total', () => {
    renderWithProviders(
      <BasketItem product={{ ...productData, quantity: 2 }} />
    );

    expect(screen.getByText('£259.98')).toBeInTheDocument();
  });
});
