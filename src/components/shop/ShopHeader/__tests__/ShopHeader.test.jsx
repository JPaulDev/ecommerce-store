import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../../../../../test-utils';
import ShopHeader from '../index';

const categoryData = {
  heading: 'heading',
  description: 'category description',
  latestArrivals: 'latest arrivals',
  latestArrivalsDescription: 'latest arrivals description',
};

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('ShopHeader', () => {
  it('should open and close the category description', async () => {
    const { user } = setup(<ShopHeader {...categoryData} />);
    const text = /category description/i;
    const button = screen.getByTestId('description-button');

    expect(screen.getByText(text)).toBeInTheDocument();

    await user.click(button);

    expect(screen.getAllByText(text)).toHaveLength(2);

    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('should open and close the latest arrivals description', async () => {
    const { user } = setup(<ShopHeader {...categoryData} />);
    const text = /latest arrivals description/i;
    const button = screen.getByTestId('latest-arrivals-button');

    expect(screen.queryByText(text)).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();

    await user.click(button);

    await waitForElementToBeRemoved(screen.queryByText(text));
  });
});
