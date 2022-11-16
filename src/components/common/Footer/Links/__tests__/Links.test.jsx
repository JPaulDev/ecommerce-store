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

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Links component', () => {
  it('renders a heading along with related links', () => {
    const { asFragment } = setup(<Links item={item} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Links component dropdown menu', () => {
  beforeAll(() => {
    window.resizeTo(500, 768);
  });

  it('should initially be closed', () => {
    setup(<Links item={item} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('opens and closes the links dropdown on clicking the button', async () => {
    const { user } = setup(<Links item={item} />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(screen.getAllByRole('link')).toHaveLength(2);

    // Delays the second click to prevent the menu improperly closing.
    setTimeout(() => user.click(button), 1000);

    await waitForElementToBeRemoved(screen.queryAllByRole('link'), {
      timeout: 3000,
    });
  });
});
