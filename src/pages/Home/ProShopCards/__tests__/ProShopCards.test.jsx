import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProShopCards from '../index';

const proGamingDescription =
  /the fastest gaming pcs - plus a huge range of peripherals for the ultimate gaming experience./i;

describe('ProShopCards component', () => {
  it('renders 6 pro shop cards with links and descriptions', () => {
    const tree = renderer.create(<ProShopCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ProShopCards component at a screen width of 990px and above', () => {
  it('renders shop description text', () => {
    window.resizeTo(990, 768);
    render(<ProShopCards />);

    expect(screen.getByText(proGamingDescription)).toBeInTheDocument();
  });
});

describe('ProShopCards component at a screen width of 989px and below', () => {
  it('does not render shop description text', () => {
    window.resizeTo(989, 768);
    render(<ProShopCards />);

    expect(screen.queryByText(proGamingDescription)).toBeNull();
  });
});
