import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Carousel from '../index';

// Prevents errors caused by next image component.
jest.mock('next/future/image', () => 'img');

jest.mock('../carousel-slides', () => [
  {
    topNavText: 'slide-1',
    rightText: [],
  },
  {
    topNavText: 'slide-2',
    rightText: [],
  },
  {
    topNavText: 'slide-3',
    rightText: [],
  },
]);

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Carousel component', () => {
  it('renders a carousel and all of its navigation buttons', () => {
    const tree = renderer.create(<Carousel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Carousel component side navigation arrows', () => {
  it('navigates to the next slide on clicking the button', async () => {
    const { user } = setup(<Carousel />);

    expect(screen.queryByTestId('slide-2')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /next slide/i }));

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });

  it('navigates to the last slide on clicking the previous button', async () => {
    const { user } = setup(<Carousel />);

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /previous slide/i }));

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });

  it('goes back to the first slide on clicking the next button', async () => {
    const { user } = setup(<Carousel />);

    await user.click(screen.getByRole('button', { name: /previous slide/i }));

    await waitForElementToBeRemoved(screen.queryByTestId('slide-1'), {
      timeout: 2500,
    });

    await user.click(screen.getByRole('button', { name: /next slide/i }));

    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
  });

  it('should prevent navigating to another slide while transitioning', async () => {
    const { user } = setup(<Carousel />);

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    await user.dblClick(screen.getByRole('button', { name: /next slide/i }));

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();
  });
});

describe('Carousel component', () => {
  it('displays the first slide on load', () => {
    setup(<Carousel />);
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
  });

  it('should display only 1 slide', () => {
    setup(<Carousel />);

    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(screen.getAllByTestId(/slide/i)).toHaveLength(1);
  });

  it('changes to the next slide after 9 seconds', () => {
    jest.useFakeTimers();
    setup(<Carousel />);
    expect(screen.queryByTestId('slide-2')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(9000);
    });

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
    jest.useRealTimers();
  });
});

describe('Carousel component top navigation buttons', () => {
  it('changes to the correct slide on clicking the 3rd button', async () => {
    const { user } = setup(<Carousel />);

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /slide-3/i }));

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });
});

describe('Carousel component bottom navigation buttons', () => {
  it('navigates to the correct slide on clicking the 3rd button', async () => {
    const { user } = setup(<Carousel />);

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /slide 3 of 3/i }));

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });
});
