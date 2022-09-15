import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TodayOnlyBanner from '../index';

describe('TodayOnlyBanner component', () => {
  it('renders a today only offers banner', () => {
    const tree = renderer.create(<TodayOnlyBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TodayOnlyBanner component at different screen widths', () => {
  it('renders a link with a chevron at 935px and above', () => {
    window.resizeTo(935, 768);
    render(<TodayOnlyBanner />);

    expect(screen.getByTestId('link-chevron')).toBeInTheDocument();
    expect(screen.queryByTestId('link-button')).not.toBeInTheDocument();
  });

  it('renders a link button at 934px and below', () => {
    window.resizeTo(934, 768);
    render(<TodayOnlyBanner />);

    expect(screen.queryByTestId('link-chevron')).not.toBeInTheDocument();
    expect(screen.getByTestId('link-button')).toBeInTheDocument();
  });
});
