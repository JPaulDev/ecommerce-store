import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBottom from '../index';

describe('NavBottom component', () => {
  it('renders a button for each slide in the slides array', () => {
    const tree = renderer.create(<NavBottom length={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('applies styles to the active slide button', () => {
    render(<NavBottom length={2} slideIndex={0} />);
    const button = screen.getByRole('button', {
      name: /slide 1 of 2/i,
    });

    expect(button).toHaveStyle('height: 7px');
  });
});
