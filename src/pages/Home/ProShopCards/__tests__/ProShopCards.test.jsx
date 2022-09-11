import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProShopCards from '../index';

const proGamingDescription =
  /the fastest gaming pcs - plus a huge range of peripherals for the ultimate gaming experience./i;

describe('ProShopCards component', () => {
  it('renders 6 pro shop cards with links and shop descriptions', () => {
    const tree = renderer.create(<ProShopCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ProShopCards component at different screen widths', () => {
  it('renders shop description text at 990px and above', () => {
    window.resizeTo(990, 768);
    render(<ProShopCards />);

    expect(screen.getByText(proGamingDescription)).toBeInTheDocument();
  });

  it('does not render shop description text at 989px and below', () => {
    window.resizeTo(989, 768);
    render(<ProShopCards />);

    expect(screen.queryByText(proGamingDescription)).toBeNull();
  });
});
