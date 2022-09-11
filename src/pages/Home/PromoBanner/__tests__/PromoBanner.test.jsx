import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PromoBanner from '../index';

describe('PromoBanner component', () => {
  it('renders a promotional banner about RTX studio', () => {
    const tree = renderer.create(<PromoBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('PromoBanner component at different screen widths', () => {
  it('renders a logo image at 850px and above', () => {
    window.resizeTo(850, 768);
    render(<PromoBanner />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('does not render a logo image at 849px and below', () => {
    window.resizeTo(849, 768);
    render(<PromoBanner />);

    expect(screen.queryByTestId('logo')).toBeNull();
  });

  it('renders a link button at 530px and above', () => {
    window.resizeTo(530, 768);
    render(<PromoBanner />);

    expect(screen.queryByTestId('link-chevron')).toBeNull();
    expect(screen.getByTestId('link-button')).toBeInTheDocument();
  });

  it('renders a link with a chevron at 529px and below', () => {
    window.resizeTo(529, 768);
    render(<PromoBanner />);

    expect(screen.queryByTestId('link-button')).toBeNull();
    expect(screen.getByTestId('link-chevron')).toBeInTheDocument();
  });
});
