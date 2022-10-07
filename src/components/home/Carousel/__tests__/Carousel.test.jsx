import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Carousel from '../index';

// Prevents errors caused by next image component
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

beforeAll(() => {
  jest.useFakeTimers();
});

describe('Carousel component', () => {
  it('renders a carousel and all of its navigation buttons', () => {
    const tree = renderer.create(<Carousel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Carousel component', () => {
  beforeEach(() => {
    render(<Carousel />);
  });

  it('displays the first slide on load', () => {
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
  });

  it('should display only 1 slide', () => {
    expect(screen.getAllByTestId(/slide/i)).toHaveLength(1);
  });

  it('changes to the next slide after 9 seconds', () => {
    expect(screen.queryByTestId('slide-2')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(9000);
    });

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });
});

describe('Carousel component side navigation arrows', () => {
  beforeEach(() => {
    render(<Carousel />);
  });

  it('navigates to the next slide on clicking the button', () => {
    const button = screen.getByRole('button', {
      name: /next slide/i,
    });

    expect(screen.queryByTestId('slide-2')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });

  it('navigates to the last slide on clicking the previous button', () => {
    const button = screen.getByRole('button', {
      name: /previous slide/i,
    });

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });

  it('goes back to the first slide on clicking the next button', async () => {
    const previous = screen.getByRole('button', {
      name: /previous slide/i,
    });
    const next = screen.getByRole('button', {
      name: /next slide/i,
    });

    userEvent.click(previous);

    await waitForElementToBeRemoved(screen.queryByTestId('slide-1'), {
      timeout: 1500,
    });

    userEvent.click(next);

    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
  });

  it('should prevent navigating to another slide while transitioning', () => {
    const button = screen.getByRole('button', {
      name: /next slide/i,
    });

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    userEvent.dblClick(button);

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();
  });
});

describe('Carousel component top navigation buttons', () => {
  it('changes to the correct slide on clicking the 3rd button', () => {
    render(<Carousel />);
    const button = screen.getByRole('button', {
      name: /slide-3/i,
    });

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });
});

describe('Carousel component bottom navigation buttons', () => {
  it('navigates to the correct slide on clicking the 3rd button', () => {
    render(<Carousel />);
    const button = screen.getByRole('button', {
      name: /slide 3 of 3/i,
    });

    expect(screen.queryByTestId('slide-3')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });
});
