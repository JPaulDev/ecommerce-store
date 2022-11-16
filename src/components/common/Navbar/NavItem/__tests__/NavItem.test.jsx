import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UIProvider } from '../../../../../contexts/UIContext';
import NavItem from '../index';

const linkItem = { heading: 'Home', href: 'href' };
const buttonItem = { heading: 'Components', hasDropdown: true };

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(<UIProvider>{component}</UIProvider>),
  };
}

describe('NavItem component', () => {
  it('renders a link when no hasDropdown property is set', () => {
    render(<NavItem item={linkItem} />);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('renders a button when hasDropdown property is set to true', () => {
    render(<NavItem item={buttonItem} />);

    expect(
      screen.getByRole('button', { name: /components/i })
    ).toBeInTheDocument();
  });
});

describe('NavItem dropdown', () => {
  it('opens and closes when the button is clicked', async () => {
    const { user } = setup(<NavItem item={buttonItem} />);
    const button = screen.getByRole('button', {
      name: /components/i,
    });

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.click(button);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes on clicks outside of the dropdown menu', async () => {
    const { user } = setup(<NavItem item={buttonItem} />);

    await user.click(screen.getByRole('button', { name: /components/i }));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.click(document.body);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  it('should close on pressing the escape key', async () => {
    const { user } = setup(<NavItem item={buttonItem} />);

    await user.click(screen.getByRole('button', { name: /components/i }));

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });
});
