import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodayOnlyOffers from '../index';

describe('TodayOnlyOffers component changing category', () => {
  beforeEach(() => {
    render(<TodayOnlyOffers />);
  });

  it('changes to graphics cards and renders 2 rows of products', () => {
    const button = screen.getByRole('button', {
      name: /graphics cards/i,
    });

    userEvent.click(button);

    expect(screen.getAllByTestId('graphicsCards')).toHaveLength(2);
  });

  it('changes to memory and renders 2 rows of products', () => {
    const button = screen.getByRole('button', {
      name: /memory/i,
    });

    userEvent.click(button);

    expect(screen.getAllByTestId('memory')).toHaveLength(2);
  });

  it('changes to hard drives and renders 2 rows of products', () => {
    const button = screen.getByRole('button', {
      name: /storage/i,
    });

    userEvent.click(button);

    expect(screen.getAllByTestId('storage')).toHaveLength(2);
  });

  it('changes to processors and renders 2 rows of products', () => {
    const button = screen.getByRole('button', {
      name: /processors/i,
    });

    userEvent.click(button);

    expect(screen.getAllByTestId('processors')).toHaveLength(2);
  });

  it('changes to motherboards and renders 2 rows of products', () => {
    const button = screen.getByRole('button', {
      name: /motherboards/i,
    });

    userEvent.click(button);

    expect(screen.getAllByTestId('motherboards')).toHaveLength(2);
  });
});

describe('TodayOnlyOffers component at different screen widths', () => {
  it('renders 2 rows with 4 products in each at 1120px and above', () => {
    window.resizeTo(1120, 768);
    render(<TodayOnlyOffers />);

    expect(screen.getAllByTestId('product')).toHaveLength(8);
  });

  it('renders 2 rows with 3 products in each at 1119px and below', () => {
    window.resizeTo(1119, 768);
    render(<TodayOnlyOffers />);

    expect(screen.getAllByTestId('product')).toHaveLength(6);
  });

  it('renders 2 rows with 2 products in each at 844px and below', () => {
    window.resizeTo(844, 768);
    render(<TodayOnlyOffers />);

    expect(screen.getAllByTestId('product')).toHaveLength(4);
  });
});
