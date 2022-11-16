import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../../../../test-utils';
import { setupStore } from '../../../../app/store';
import ProductCard from '../index';

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

describe('ProductCard component horizontal variant', () => {
  it('should render a product card with with all the product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <ProductCard product={productData} variant="horizontal" />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('ProductCard component vertical variant', () => {
  it('should render a product card with with all the product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <ProductCard product={productData} variant="vertical" />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('ProductCard component quantity input', () => {
  it('should record user changes to quantity', async () => {
    const { user } = setup(
      <ProductCard product={productData} variant="vertical" />
    );
    const select = screen.getByLabelText(/quantity/i);

    expect(select).toHaveValue('1');

    await user.selectOptions(select, '3');

    expect(select).toHaveValue('3');
  });

  it('should be enabled when the product is in stock', () => {
    setup(<ProductCard product={productData} variant="vertical" />);

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('should be enabled when the product is low stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 1 }}
        variant="vertical"
      />
    );

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('should be disabled when the product is out of stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 0 }}
        variant="vertical"
      />
    );

    expect(screen.getByLabelText(/quantity/i)).toBeDisabled();
  });

  it('should reset back to 1 after clicking add to basket', async () => {
    const { user } = setup(
      <ProductCard product={productData} variant="vertical" />
    );
    const select = screen.getByLabelText(/quantity/i);

    await user.selectOptions(select, '3');

    expect(select).not.toHaveValue('1');

    await user.click(screen.getByRole('button', { name: /add to basket/i }));

    expect(select).toHaveValue('1');
  });
});

describe('ProductCard component add to basket button', () => {
  it('should be enabled when the product is in stock', () => {
    setup(<ProductCard product={productData} variant="vertical" />);

    expect(
      screen.getByRole('button', { name: /add to basket/i })
    ).toBeEnabled();
  });

  it('should be enabled when the product is low stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 1 }}
        variant="vertical"
      />
    );

    expect(
      screen.getByRole('button', { name: /add to basket/i })
    ).toBeEnabled();
  });

  it('should be disabled when the product is out of stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 0 }}
        variant="vertical"
      />
    );

    expect(
      screen.getByRole('button', { name: /add to basket/i })
    ).toBeDisabled();
  });

  it('should add 1 of the product to the basket when clicked', async () => {
    const { user, store } = setup(
      <ProductCard product={productData} variant="vertical" />
    );

    expect(store.getState().basket).toMatchObject([]);

    await user.click(screen.getByRole('button', { name: /add to basket/i }));

    expect(store.getState().basket).toMatchObject([
      { ...productData, quantity: 1 },
    ]);
  });

  it('should add the correct quantity to the basket when clicked', async () => {
    const { user, store } = setup(
      <ProductCard product={productData} variant="vertical" />
    );

    expect(store.getState().basket).toMatchObject([]);

    await user.selectOptions(screen.getByLabelText(/quantity/i), '3');
    await user.click(screen.getByRole('button', { name: /add to basket/i }));

    expect(store.getState().basket).toMatchObject([
      { ...productData, quantity: 3 },
    ]);
  });
});

describe('ProductCard component stock indicator', () => {
  it('should display in stock', () => {
    setup(<ProductCard product={productData} variant="vertical" />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('should display low stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 1 }}
        variant="vertical"
      />
    );

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('should display out of stock', () => {
    setup(
      <ProductCard
        product={{ ...productData, stockStatus: 0 }}
        variant="vertical"
      />
    );

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('ProductCard component price display', () => {
  it('should only display the base price if not on sale', () => {
    setup(
      <ProductCard
        product={{ ...productData, isOnSale: false }}
        variant="vertical"
      />
    );

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.queryByText(/was:/i)).not.toBeInTheDocument();
  });

  it('should display the price and previous price when on sale', () => {
    setup(<ProductCard product={productData} variant="vertical" />);

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.getByText('£129.99')).toBeInTheDocument();
  });
});
