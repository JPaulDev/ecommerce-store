import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../../../../../test-utils';
import Links from '../index';

const item = {
  heading: 'Information',
  links: [
    {
      text: 'About Us',
      href: '/',
    },
    {
      text: 'Contact',
      href: '/',
    },
  ],
};

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Links', () => {
  beforeAll(() => {
    window.resizeTo(500, 768);
  });

  it('the dropdown should initially be closed', () => {
    setup(<Links item={item} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should open and close the dropdown on clicking the button', async () => {
    const { user } = setup(<Links item={item} />);
    const button = screen.getByRole('button');

    expect(screen.queryByRole('link')).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getAllByRole('link')).toHaveLength(2);

    // Delays the second click to prevent the menu improperly closing.
    setTimeout(() => user.click(button), 1000);

    await waitForElementToBeRemoved(screen.queryAllByRole('link'), {
      timeout: 3000,
    });
  });
});
