import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopBannerSmall from '../index';

describe('TopBannerSmall component', () => {
  it('renders a banner with 3 icons and text next to each one', () => {
    const tree = renderer.create(<TopBannerSmall />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TopBannerSmall component at different screen widths', () => {
  it('cycles through and displays each slide at 999px and below', () => {
    window.resizeTo(999, 769);
    jest.useFakeTimers();
    render(<TopBannerSmall />);

    expect(screen.getByTestId('0')).toHaveStyle('opacity: 0');
    expect(screen.getByTestId('1')).toHaveStyle('opacity: 1');
    expect(screen.getByTestId('2')).toHaveStyle('opacity: 0');

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('0')).toHaveStyle('opacity: 0');
    expect(screen.getByTestId('1')).toHaveStyle('opacity: 0');
    expect(screen.getByTestId('2')).toHaveStyle('opacity: 1');
  });
});
