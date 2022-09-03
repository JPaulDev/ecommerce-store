import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PromoBanner from '../index';

describe('PromoBanner component', () => {
  it('renders a promotional banner about RTX studio', () => {
    const tree = renderer.create(<PromoBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('PromoBanner component at a screen width of 850px and above', () => {
  it('renders a logo image', () => {
    window.resizeTo(850, 768);
    render(<PromoBanner />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});

describe('PromoBanner component at a screen width of 849px and below', () => {
  it('does not render a logo image', () => {
    window.resizeTo(849, 768);
    render(<PromoBanner />);

    expect(screen.queryByTestId('logo')).toBeNull();
  });
});

describe('PromoBanner component at a screen width of 530px and above', () => {
  beforeEach(() => {
    window.resizeTo(530, 768);
    render(<PromoBanner />);
  });

  it('renders a link button', () => {
    expect(screen.getByTestId('link-button')).toBeInTheDocument();
  });

  it('does not render a link with a chevron', () => {
    expect(screen.queryByTestId('link-chevron')).toBeNull();
  });
});

describe('PromoBanner component at a screen width of 529px and below', () => {
  beforeEach(() => {
    window.resizeTo(529, 768);
    render(<PromoBanner />);
  });

  it('renders a link with a chevron', () => {
    expect(screen.getByTestId('link-chevron')).toBeInTheDocument();
  });

  it('does not render a link button', () => {
    expect(screen.queryByTestId('link-button')).toBeNull();
  });
});
