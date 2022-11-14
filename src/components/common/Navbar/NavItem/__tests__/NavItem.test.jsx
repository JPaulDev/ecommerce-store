import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UIProvider } from '../../../../../contexts/UIContext';
import NavItem from '../index';

const linkItem = { heading: 'Home', href: 'href' };
const buttonItem = { heading: 'Components', hasDropdown: true };

const renderWithProviders = (ui) => render(<UIProvider>{ui}</UIProvider>);

describe('NavItem component', () => {
  it('renders a link when no hasDropdown property is set', () => {
    render(<NavItem item={linkItem} />);
    const link = screen.getByRole('link', {
      name: /home/i,
    });

    expect(link).toBeInTheDocument();
  });

  it('renders a button when hasDropdown property is set to true', () => {
    render(<NavItem item={buttonItem} />);
    const button = screen.getByRole('button', {
      name: /components/i,
    });

    expect(button).toBeInTheDocument();
  });
});

describe('NavItem dropdown', () => {
  it('opens and closes when the button is clicked', () => {
    renderWithProviders(<NavItem item={buttonItem} />);
    const button = screen.getByRole('button', {
      name: /components/i,
    });

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    userEvent.click(button);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });

  it('closes on clicks outside of the dropdown menu', () => {
    renderWithProviders(<NavItem item={buttonItem} />);
    const button = screen.getByRole('button', {
      name: /components/i,
    });

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument();

    userEvent.click(document.body);

    expect(screen.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  });
});
