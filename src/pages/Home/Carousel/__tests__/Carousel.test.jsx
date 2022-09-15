import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../index';

beforeAll(() => {
  jest.useFakeTimers();
});

describe('Carousel component', () => {
  beforeEach(() => {
    render(<Carousel />);
  });

  it('displays the first slide on load', () => {
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
  });

  it('renders only 1 slide', () => {
    expect(screen.getByTestId(/slide/i)).toBeInTheDocument();
  });

  it('changes to the next slide after 8 seconds', () => {
    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });

  it('the previous slide is removed after transitioning out', async () => {
    act(() => {
      jest.advanceTimersByTime(8000);
    });

    await waitForElementToBeRemoved(screen.queryByTestId('slide-1'), {
      timeout: 1500,
    });
  });
});

describe('Carousel component side navigation arrows', () => {
  beforeEach(() => {
    render(<Carousel />);
    // Clears the ref transitioning timer in the useCarousel hook
    jest.advanceTimersByTime(1000);
  });

  it('navigates to the next slide on clicking the button', () => {
    const button = screen.getByRole('button', {
      name: /next slide/i,
    });

    userEvent.click(button);

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });

  it('navigates to the previous slide on clicking the button', () => {
    const button = screen.getByRole('button', {
      name: /previous slide/i,
    });

    userEvent.click(button);

    expect(screen.getByTestId('slide-4')).toBeInTheDocument();
  });
});

describe('Carousel component top navigation buttons', () => {
  it('changes to the correct slide on clicking the second button', () => {
    render(<Carousel />);
    const button = screen.getByRole('button', {
      name: /intel 3xs pcs/i,
    });

    jest.advanceTimersByTime(1000);
    userEvent.click(button);

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });
});

describe('Carousel component bottom navigation buttons', () => {
  it('navigates to the correct slide on clicking the second button', () => {
    window.resizeTo(500, 768);
    render(<Carousel />);
    const button = screen.getByRole('button', {
      name: /slide 2 of 4/i,
    });

    jest.advanceTimersByTime(1000);
    userEvent.click(button);

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
  });
});

describe('Carousel component at different screen widths', () => {
  it('Renders the top navigation at 715px and above', () => {
    window.resizeTo(715, 768);
    render(<Carousel />);

    expect(screen.queryByTestId('nav-bottom')).not.toBeInTheDocument();
    expect(screen.getByTestId('nav-top')).toBeInTheDocument();
  });

  it('Renders the bottom navigation at 714px and below', () => {
    window.resizeTo(714, 768);
    render(<Carousel />);

    expect(screen.queryByTestId('nav-top')).not.toBeInTheDocument();
    expect(screen.getByTestId('nav-bottom')).toBeInTheDocument();
  });
});
