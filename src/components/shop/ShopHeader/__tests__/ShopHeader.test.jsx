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

describe('ShopHeader component', () => {
  it('should render a category heading and description', () => {
    const tree = renderer.create(<ShopHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ShopHeader component description and latest arrivals', () => {
  it('should open and close the category description', async () => {
    render(<ShopHeader {...categoryData} />);
    const text = /category description/i;
    const button = screen.getByTestId('description-button');

    expect(screen.getAllByText(text)).toHaveLength(1);

    userEvent.click(button);

    expect(screen.getAllByText(text)).toHaveLength(2);

    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getAllByText(text)).toHaveLength(1);
    });
  });

  it('should open and close the latest arrivals description', async () => {
    render(<ShopHeader {...categoryData} />);
    const text = /latest arrivals description/i;
    const button = screen.getByTestId('latest-arrivals-button');

    expect(screen.queryByText(text)).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByText(text)).toBeInTheDocument();

    userEvent.click(button);

    await waitForElementToBeRemoved(screen.queryByText(text));
  });
});
