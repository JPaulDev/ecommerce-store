import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../../../test-utils';
import { setupStore } from '../../../app/store';
import Header from '../index';

const linkText = [
  /account$/i,
  /sign in | register/i,
  /basket$/i,
  /subtotal £0.00/i,
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
