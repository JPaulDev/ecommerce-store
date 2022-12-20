import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../../../../test-utils';
import Navbar from '../index';

// Prevents TypeError: Cannot use 'in' operator to search for 'beforePopState' in null
// when clicking a next link with userEvent.click.
jest.mock(
  'next/link',
  () =>
    ({ children, ...rest }) =>
      React.cloneElement(children, { ...rest, href: '' })
);

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Navbar', () => {
  it('should open and close the dropdown when the button is clicked', async () => {
    const { user } = setup(<Navbar />);
    const button = screen.getByRole('button', {
      name: /components/i,
    });

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.click(button);

    await waitForElementToBeRemoved(screen.queryByTestId('dropdown-menu'), {
      timeout: 500,
    });
  });

  it('should close the dropdown menu on clicks outside of the dropdown', async () => {
    const { user } = setup(<Navbar />);

    await user.click(screen.getByRole('button', { name: /components/i }));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.click(document.body);

    await waitForElementToBeRemoved(screen.queryByTestId('dropdown-menu'), {
      timeout: 500,
    });
  });

  it('should close the dropdown menu on pressing the escape key', async () => {
    const { user } = setup(<Navbar />);

    await user.click(screen.getByRole('button', { name: /components/i }));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitForElementToBeRemoved(screen.queryByTestId('dropdown-menu'), {
      timeout: 500,
    });
  });

  it('should close the dropdown menu when a link is clicked', async () => {
    const { user } = setup(<Navbar />);

    await user.click(screen.getByRole('button', { name: /components/i }));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: /amd motherboards/i }));

    await waitForElementToBeRemoved(screen.queryByTestId('dropdown-menu'), {
      timeout: 500,
    });
  });
});
