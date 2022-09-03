import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodayOnlyBanner from '../index';

describe('TodayOnlyBanner component', () => {
  it('renders a today only offers banner', () => {
    const tree = renderer.create(<TodayOnlyBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TodayOnlyBanner component at a screen width of 935px and above', () => {
  beforeEach(() => {
    window.resizeTo(935, 768);
    render(<TodayOnlyBanner />);
  });

  it('renders a link with a chevron', () => {
    expect(screen.getByTestId('link-chevron')).toBeInTheDocument();
  });

  it('does not render a link button', () => {
    expect(screen.queryByTestId('link-button')).toBeNull();
  });
});

describe('TodayOnlyBanner component at a screen width of 934px and below', () => {
  beforeEach(() => {
    window.resizeTo(934, 768);
    render(<TodayOnlyBanner />);
  });

  it('renders a link button', () => {
    expect(screen.getByTestId('link-button')).toBeInTheDocument();
  });

  it('does not render a link with a chevron', () => {
    expect(screen.queryByTestId('link-chevron')).toBeNull();
  });
});
