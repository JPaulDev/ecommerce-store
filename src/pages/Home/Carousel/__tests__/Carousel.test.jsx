import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../index';

beforeAll(() => {
  jest.useFakeTimers();
});

describe('Carousel component', () => {
  it('changes slide after 8 seconds', () => {
    render(<Carousel />);
    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
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

describe('Carousel component at a screen width of 700px and above', () => {
  beforeAll(() => {
    window.resizeTo(700, 768);
  });

  beforeEach(() => {
    render(<Carousel />);
  });

  it('Renders the top navigation', () => {
    expect(screen.getByTestId('nav-top')).toBeInTheDocument();
  });

  it('Hides the bottom navigation', () => {
    expect(screen.queryByTestId('nav-bottom')).toBeNull();
  });
});

describe('Carousel component at a screen width of 699px and below', () => {
  beforeAll(() => {
    window.resizeTo(699, 768);
  });

  beforeEach(() => {
    render(<Carousel />);
  });

  it('Renders the bottom navigation', () => {
    expect(screen.getByTestId('nav-bottom')).toBeInTheDocument();
  });

  it('Hides the top navigation', () => {
    expect(screen.queryByTestId('nav-top')).toBeNull();
  });
});
