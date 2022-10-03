import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../../../../../test-utils';
import { setupStore } from '../../../../../app/store';
import ProductCard from '../index';

jest.mock('next/future/image', () => 'img');

const product = {
  sku: 'CPU-INT-10400F',
  stock: 50,
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

describe('ProductCard component', () => {
  it('renders a product card with an image and all product information', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <ProductCard />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ProductCard component quantity input', () => {
  it('records user changes to quantity', () => {
    renderWithProviders(<ProductCard product={product} />);
    const select = screen.getByLabelText(/quantity/i);

    expect(select).toHaveValue('1');

    userEvent.selectOptions(select, '3');

    expect(select).toHaveValue('3');
  });

  it('is enabled when the product is in stock', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 1 }} />);

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('is disabled when the product is out of stock', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 0 }} />);

    expect(screen.getByLabelText(/quantity/i)).toBeDisabled();
  });

  it('resets the quantity back to 1 after clicking add to basket', () => {
    renderWithProviders(<ProductCard product={product} />);
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
  it('is enabled when the product is in stock', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 1 }} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeEnabled();
  });

  it('is disabled when the product is out of stock', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 0 }} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeDisabled();
  });

  it('adds 1 of the product to the basket when clicked', () => {
    const { store } = renderWithProviders(<ProductCard product={product} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(store.getState().basket).toEqual([]);

    userEvent.click(button);

    expect(store.getState().basket).toEqual([{ ...product, quantity: 1 }]);
  });

  it('adds the correct quantity of the product to the basket when clicked', () => {
    const { store } = renderWithProviders(<ProductCard product={product} />);
    const select = screen.getByLabelText(/quantity/i);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(store.getState().basket).toEqual([]);

    userEvent.selectOptions(select, '3');
    userEvent.click(button);

    expect(store.getState().basket).toEqual([{ ...product, quantity: 3 }]);
  });
});

describe('ProductCard component stock indicator', () => {
  it('product is displayed as in stock when 31 or more', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 31 }} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('product is displayed as low stock at 30 or fewer', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 30 }} />);

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('product is displayed as out of stock at 0', () => {
    renderWithProviders(<ProductCard product={{ ...product, stock: 0 }} />);

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('ProductCard component price display', () => {
  it('displays the products base price if no sale price is passed in', () => {
    renderWithProviders(
      <ProductCard product={{ ...product, price: 100, salePrice: '' }} />
    );

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.queryByText(/was/i)).not.toBeInTheDocument();
  });
});
