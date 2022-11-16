import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
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

describe('ShopHeader component', () => {
  it('should render a category heading and description', () => {
    const tree = renderer.create(<ShopHeader {...categoryData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ShopHeader component description and latest arrivals', () => {
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
