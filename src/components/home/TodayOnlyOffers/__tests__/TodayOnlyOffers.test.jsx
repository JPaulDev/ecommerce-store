import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../test-utils';
import TodayOnlyOffers from '../index';

// Prevents errors caused by next image component.
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

function setup(component, preloadedState) {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(component, preloadedState),
  };
}

describe('TodayOnlyOffers component', () => {
  it('should render with a category selector', () => {
    const tree = renderer.create(<TodayOnlyOffers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TodayOnlyOffers component selecting different categories', () => {
  it('initially renders the processors category and 8 products', () => {
    setup(
      <TodayOnlyOffers products={[...processorsData, ...graphicsCardsData]} />
    );
    expect(screen.getAllByText('processor')).toHaveLength(8);
  });

  it('changes to graphics cards category and renders 8 products', async () => {
    const { user } = setup(
      <TodayOnlyOffers products={[...processorsData, ...graphicsCardsData]} />
    );

    expect(screen.queryByText('graphics card')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /graphics cards/i }));

    expect(await screen.findAllByText('graphics card')).toHaveLength(8);
  });
});
