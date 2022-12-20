import { render, screen } from '../../../../../test-utils';
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

describe('BasketItem', () => {
  it('should display in stock', () => {
    render(<BasketItem product={productData} />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });

  it('should display low stock', () => {
    render(<BasketItem product={{ ...productData, stockStatus: 1 }} />);

    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
  });

  it('should display out of stock', () => {
    render(<BasketItem product={{ ...productData, stockStatus: 0 }} />);

    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });

  it('should display the price and the previous price when on sale', () => {
    render(<BasketItem product={productData} />);

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.getByText('£129.99')).toBeInTheDocument();
  });

  it('should display only the base price if not on sale', () => {
    render(<BasketItem product={{ ...productData, isOnSale: false }} />);

    expect(screen.getByText('99')).toHaveTextContent('£99.99');
    expect(screen.queryByText(/was:/i)).not.toBeInTheDocument();
  });

  it('should display the correct item total', () => {
    render(<BasketItem product={{ ...productData, quantity: 2 }} />);

    expect(screen.getByText('199')).toHaveTextContent('£199.98');
  });

  it('should display the correct previous price total', () => {
    render(<BasketItem product={{ ...productData, quantity: 2 }} />);

    expect(screen.getByText('£259.98')).toBeInTheDocument();
  });
});
