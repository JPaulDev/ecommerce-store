import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Links from '../index';

const item = {
  heading: 'Information',
  links: [
    {
      text: 'About Us',
      href: 'Link',
    },
    {
      text: 'Contact',
      href: 'Link',
    },
  ],
};

describe('Links component', () => {
  it('renders a heading along with related links', () => {
    const { asFragment } = render(<Links item={item} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Links component dropdown menu', () => {
  beforeAll(() => {
    window.resizeTo(500, 768);
  });

  it('should initially be closed', () => {
    render(<Links item={item} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('opens and closes the links dropdown on clicking the button', async () => {
    render(<Links item={item} />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(screen.getAllByRole('link')).toHaveLength(2);

    // Delays the second click to prevent the menu improperly closing.
    setTimeout(() => userEvent.click(button), 600);

    await waitForElementToBeRemoved(screen.queryAllByRole('link'), {
      timeout: 2000,
    });
  });
});
