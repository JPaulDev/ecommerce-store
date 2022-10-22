import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../../../../../test-utils';
import { setupStore } from '../../../../../app/store';
import ProductCard from '../index';

// Prevents errors caused by next image component
jest.mock('next/future/image', () => 'img');

const productData = {
  sku: 'GPU-3PAQ-ASU',
  name: 'ASUS ROG Strix GeForce RTX 3080 V2 OC',
  imageUrl: '',
  price: 99.99,
  discount: 30,
  description: '1440MHz, 1905MHz Boost, 8704 CUDA Cores, 10GB GDDR6X',
  stockStatus: 2,
  brand: 'asus',
  currencyCode: 'GBP',
  isOnSale: true,
};

describe('ProductCard component', () => {
  it('should render a product card with with all the product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <ProductCard product={productData} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ProductCard component quantity input', () => {
  it('should record user changes to quantity', () => {
    renderWithProviders(<ProductCard product={productData} />);
    const select = screen.getByLabelText(/quantity/i);

    expect(select).toHaveValue('1');

    userEvent.selectOptions(select, '3');

    expect(select).toHaveValue('3');
  });

  it('should be enabled when the product is in stock', () => {
    renderWithProviders(<ProductCard product={productData} />);

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('should be enabled when the product is low stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 1 }} />
    );

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('should be disabled when the product is out of stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 0 }} />
    );

    expect(screen.getByLabelText(/quantity/i)).toBeDisabled();
  });

  it('should reset back to 1 after clicking add to basket', () => {
    renderWithProviders(<ProductCard product={productData} />);
    const select = screen.getByLabelText(/quantity/i);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    userEvent.selectOptions(select, '3');

    expect(select).not.toHaveValue('1');

    userEvent.click(button);

    expect(select).toHaveValue('1');
  });
});

describe('ProductCard component add to basket button', () => {
  it('should be enabled when the product is in stock', () => {
    renderWithProviders(<ProductCard product={productData} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeEnabled();
  });

  it('should be enabled when the product is low stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 1 }} />
    );
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeEnabled();
  });

  it('should be disabled when the product is out of stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 0 }} />
    );
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeDisabled();
  });

  it('should add 1 of the product to the basket when clicked', () => {
    const { store } = renderWithProviders(
      <ProductCard product={productData} />
    );
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(store.getState().basket).toMatchObject([]);

    userEvent.click(button);

    expect(store.getState().basket).toMatchObject([
      { ...productData, quantity: 1 },
    ]);
  });

  it('should add the correct quantity to the basket when clicked', () => {
    const { store } = renderWithProviders(
      <ProductCard product={productData} />
    );
    const select = screen.getByLabelText(/quantity/i);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(store.getState().basket).toMatchObject([]);

    userEvent.selectOptions(select, '3');
    userEvent.click(button);

    expect(store.getState().basket).toMatchObject([
      { ...productData, quantity: 3 },
    ]);
  });
});

describe('ProductCard component stock indicator', () => {
  it('should display in stock', () => {
    renderWithProviders(<ProductCard product={productData} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('should display low stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 1 }} />
    );

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('should display out of stock', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, stockStatus: 0 }} />
    );

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('ProductCard component price display', () => {
  it('should only display the base price if not on sale', () => {
    renderWithProviders(
      <ProductCard product={{ ...productData, isOnSale: false }} />
    );

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.queryByText(/was:/i)).not.toBeInTheDocument();
  });

  it('should display the price and previous price when on sale', () => {
    renderWithProviders(<ProductCard product={productData} />);

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.getByText('£129.99')).toBeInTheDocument();
  });
});
