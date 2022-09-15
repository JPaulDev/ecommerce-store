import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NewsAndProducts from '../index';

describe('NewsAndProducts component', () => {
  it('renders a news section with 3 articles and latest products links', () => {
    const tree = renderer.create(<NewsAndProducts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('NewsAndProducts component at different screen widths', () => {
  it('renders the latest products section 1150px and above', () => {
    window.resizeTo(1050, 768);
    render(<NewsAndProducts />);
    const heading = screen.getByRole('heading', {
      name: /hot & new products/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('does not render the latest products section 1149px and below', () => {
    window.resizeTo(1049, 768);
    render(<NewsAndProducts />);
    const heading = screen.queryByRole('heading', {
      name: /hot & new products/i,
    });

    expect(heading).not.toBeInTheDocument();
  });
});
