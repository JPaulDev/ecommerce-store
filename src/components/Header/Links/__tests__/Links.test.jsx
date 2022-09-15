import { screen, render } from '@testing-library/react';
import Links from '../index';

const linkText = [
  /account$/i,
  /sign in | register/i,
  /basket$/i,
  /subtotal £0.00/i,
];

describe('Links component at different screen widths', () => {
  it('renders links with their icons and text visible at 575px and above', () => {
    window.resizeTo(575, 768);
    render(<Links />);

    linkText.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders links with only their icons visible at 574px and below', () => {
    window.resizeTo(574, 768);
    render(<Links />);

    linkText.forEach((item) => {
      expect(screen.queryByText(item)).not.toBeInTheDocument();
    });
  });
});
