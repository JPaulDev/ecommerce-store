import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../test-utils';
import TodayOnlyOffers from '../index';

// Prevents errors caused by next image component
jest.mock('next/future/image', () => 'img');

const processorsData = Array.from({ length: 8 }).map((_, index) => ({
  sku: index,
  name: 'processor',
  parentCategoryId: 1,
}));

const graphicsCardsData = Array.from({ length: 8 }).map((_, index) => ({
  sku: index,
  name: 'graphics card',
  parentCategoryId: 4,
}));

describe('TodayOnlyOffers component selecting different categories', () => {
  beforeEach(() => {
    renderWithProviders(
      <TodayOnlyOffers products={[...processorsData, ...graphicsCardsData]} />
    );
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
