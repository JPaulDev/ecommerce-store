import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../test-utils';
import TodayOnlyOffers from '../index';

// Prevents errors caused by next image component
jest.mock('next/future/image', () => 'img');

jest.mock('../../../../data/today-only-offers', () => {
  const processors = Array.from({ length: 8 }).map((_, index) => ({
    sku: index,
    name: 'processor',
    description: [],
  }));

  const graphicsCards = Array.from({ length: 8 }).map((_, index) => ({
    sku: index,
    name: 'graphics card',
    description: [],
  }));

  return { processors, graphicsCards };
});

describe('TodayOnlyOffers component changing category', () => {
  beforeEach(() => {
    renderWithProviders(<TodayOnlyOffers />);
  });

  it('initially renders the processors category and 8 products', () => {
    expect(screen.getAllByText('processor')).toHaveLength(8);
  });

  it('changes to graphics cards category and renders 8 products', async () => {
    const button = screen.getByRole('button', {
      name: /graphics cards/i,
    });

    expect(screen.queryByText('graphics card')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(await screen.findAllByText('graphics card')).toHaveLength(8);
  });
});
