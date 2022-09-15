import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import ProductCard from '../index';

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
    const tree = renderer.create(<ProductCard product={product} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ProductCard component quantity input', () => {
  it('records user input changes quantity', () => {
    render(<ProductCard product={product} />);
    const select = screen.getByLabelText(/quantity/i);

    userEvent.selectOptions(select, '3');

    expect(select).not.toHaveValue('1');
    expect(select).toHaveValue('3');
  });

  it('is enabled when the product is in stock', () => {
    render(<ProductCard product={{ ...product, stock: 1 }} />);

    expect(screen.getByLabelText(/quantity/i)).toBeEnabled();
  });

  it('is disabled when the product is out of stock', () => {
    render(<ProductCard product={{ ...product, stock: 0 }} />);

    expect(screen.getByLabelText(/quantity/i)).toBeDisabled();
  });
});

describe('ProductCard component add to basket button', () => {
  it('is enabled when the product is in stock', () => {
    render(<ProductCard product={{ ...product, stock: 1 }} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeEnabled();
  });

  it('is disabled when the product is out of stock', () => {
    render(<ProductCard product={{ ...product, stock: 0 }} />);
    const button = screen.getByRole('button', {
      name: /add to basket/i,
    });

    expect(button).toBeDisabled();
  });
});

describe('ProductCard component stock indicator', () => {
  it('product is displayed as in stock when 31 or more', () => {
    render(<ProductCard product={{ ...product, stock: 31 }} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('product is displayed as low stock at 30 or fewer', () => {
    render(<ProductCard product={{ ...product, stock: 30 }} />);

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('product is displayed as out of stock at 0', () => {
    render(<ProductCard product={{ ...product, stock: 0 }} />);

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });
});

describe('ProductCard component price display', () => {
  it('displays the products base price if no sale price is passed in', () => {
    render(<ProductCard product={{ ...product, price: 100, salePrice: '' }} />);

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.queryByText(/was/i)).not.toBeInTheDocument();
  });
});
