import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavTop from '../index';

const slides = [
  {
    topNavText: '30 SERIES 3XS PCs',
  },
  {
    topNavText: 'INTEL 3XS PCs',
  },
];

describe('NavTop component', () => {
  it('renders a button with text for each slide in the slides array', () => {
    const tree = renderer.create(<NavTop slides={slides} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies styles to the active slide button', () => {
    render(<NavTop slides={slides} slideIndex={0} />);
    const button = screen.getByRole('button', {
      name: /30 series 3xs pcs/i,
    });

    expect(button).toHaveStyle(`
      transform: scale(1.06);
      color: white;
    `);
  });
});
