import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Payments from '../index';

describe('Payments component', () => {
  it('renders a list of accepted payment methods', () => {
    const tree = renderer.create(<Payments />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Payments component at different screen widths', () => {
  it('renders a heading at 1050px and above', () => {
    window.resizeTo(1050, 768);
    render(<Payments />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('does not render a heading at 1049px and below', () => {
    window.resizeTo(1049, 768);
    render(<Payments />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
