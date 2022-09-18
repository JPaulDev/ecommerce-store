import { screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../../test-utils';
import { setupStore } from '../../../app/store';
import { addProduct } from '../../../features/basket/basketSlice';
import Header from '../index';

const linkText = [
  /account$/i,
  /sign in | register/i,
  /basket$/i,
  /subtotal £0.00/i,
];

const mockBasket = [
  { price: 13.99, quantity: 2 },
  { price: 10.99, quantity: 1 },
  { price: 25.99, quantity: 3 },
];

describe('Header component', () => {
  it('renders a header with an image, search input and links', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <Header />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Header component basket link', () => {
  it('displays the subtotal of all the products in the basket', () => {
    const preloadedState = { basket: mockBasket };
    renderWithProviders(<Header />, { preloadedState });

    expect(screen.getByText(/£116.94/)).toBeInTheDocument();
  });

  it('displays the total quantity of products in the basket', () => {
    const { store } = renderWithProviders(<Header />);

    expect(screen.queryByText('999')).not.toBeInTheDocument();

    act(() => {
      store.dispatch(addProduct({ price: 0 }, 999));
    });

    expect(screen.getByText('999')).toBeInTheDocument();
  });
});

describe('Header component at different screen widths', () => {
  it('renders links with their icons and text visible at 590px and above', () => {
    window.resizeTo(590, 768);
    renderWithProviders(<Header />);

    linkText.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders links with only their icons visible at 589px and below', () => {
    window.resizeTo(589, 768);
    renderWithProviders(<Header />);

    linkText.forEach((item) => {
      expect(screen.queryByText(item)).not.toBeInTheDocument();
    });
  });
});
