import { act, render, screen } from '../../../../../test-utils';
import TopBannerSmall from '../index';

describe('TopBannerSmall', () => {
  it('should cycle through and display each slide after a set amount of time', () => {
    window.resizeTo(999, 769);
    jest.useFakeTimers();
    render(<TopBannerSmall />);

    expect(screen.getByTestId('0')).not.toBeVisible();
    expect(screen.getByTestId('1')).toBeVisible();
    expect(screen.getByTestId('2')).not.toBeVisible();

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId('0')).not.toBeVisible();
    expect(screen.getByTestId('1')).not.toBeVisible();
    expect(screen.getByTestId('2')).toBeVisible();
  });
});
